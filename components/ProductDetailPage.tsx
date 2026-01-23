
import React, { useState, useEffect } from 'react';
import type { Product } from './types.ts';
import { type Currency, formatCurrency } from './currency.ts';

interface ProductDetailPageProps {
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart }) => {
    const variantKey = product.variants ? Object.keys(product.variants)[0] : null;
    const variantOptions = variantKey ? product.variants![variantKey] : [];
    
    const [selectedVariant, setSelectedVariant] = useState<string | null>(variantOptions.length > 0 ? variantOptions[0].value : null);
    const [activeTab, setActiveTab] = useState<'desc' | 'ing' | 'use'>('desc');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <div className="container mx-auto px-10 py-24 bg-white">
            <div className="grid lg:grid-cols-12 gap-20">
                {/* Visual Area */}
                <div className="lg:col-span-7">
                    <div className="aspect-square bg-gray-50 overflow-hidden relative rounded-[3rem] shadow-2xl border border-gray-100 group">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full h-full object-contain p-10 transform transition-transform duration-[3000ms] group-hover:scale-110" 
                        />
                        {product.tag && (
                            <div className="absolute top-10 left-10">
                                <span className="bg-black text-white text-[11px] font-black px-6 py-2 uppercase tracking-[0.4em] shadow-xl">
                                    {product.tag}
                                </span>
                            </div>
                        )}
                        <div className="absolute bottom-10 right-10">
                            <span className="text-gray-300 font-black text-[12px] uppercase tracking-widest">SKU: {product.id}</span>
                        </div>
                    </div>
                </div>

                {/* Info Area */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <nav className="text-[11px] text-[#fbc5fa] font-black uppercase tracking-[0.5em] mb-10 italic">
                        Boutique / {product.category} / {product.brand}
                    </nav>

                    <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight tracking-tighter text-black uppercase italic">
                        {product.name}
                    </h1>
                    
                    <div className="flex items-center gap-10 mb-12">
                        <p className="text-4xl font-black text-black">{formatCurrency(product.price, currency)}</p>
                        <div className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Envío Boutique Prioritario</span>
                        </div>
                    </div>
                    
                    <div className="space-y-12 border-t border-gray-100 pt-12">
                        {/* Tabs Técnicos */}
                        <div className="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
                            <button onClick={() => setActiveTab('desc')} className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'desc' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}>Ficha Técnica</button>
                            <button onClick={() => setActiveTab('ing')} className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'ing' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}>Ingredientes</button>
                            <button onClick={() => setActiveTab('use')} className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'use' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}>Modo de Uso</button>
                        </div>

                        <div className="min-h-[200px]">
                            {activeTab === 'desc' && (
                                <p className="text-gray-500 text-lg leading-relaxed font-medium animate-fade-in">
                                    {product.description}
                                </p>
                            )}
                            {activeTab === 'ing' && (
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 animate-fade-in">
                                    <p className="text-gray-500 text-sm leading-relaxed font-bold tracking-tight">
                                        {product.ingredients}
                                    </p>
                                </div>
                            )}
                            {activeTab === 'use' && (
                                <div className="space-y-6 text-gray-500 text-sm font-medium animate-fade-in">
                                    <p className="flex items-start gap-4 font-bold uppercase tracking-widest text-black">Instrucciones de Aplicación:</p>
                                    <p className="flex items-start gap-4">{product.usage}</p>
                                    <p className="text-[10px] italic text-gray-400">Resultados óptimos tras 28 días de uso continuado.</p>
                                </div>
                            )}
                        </div>

                        <div className="pt-10 flex flex-col gap-6">
                            <button
                                onClick={() => onAddToCart(product, null, variantKey ? { [variantKey]: selectedVariant! } : null)}
                                className="w-full bg-black text-white font-black py-8 rounded-full hover:bg-[#fbc5fa] hover:text-black transition-all uppercase tracking-[0.5em] text-[12px] shadow-2xl transform active:scale-95"
                            >
                                Añadir a mi Pedido Real
                            </button>
                            <a 
                                href={`https://wa.me/34661202616?text=Deseo información experta sobre ${product.name} (SKU ${product.id})`}
                                target="_blank"
                                className="w-full border-4 border-black text-black font-black py-8 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-[0.5em] text-[12px] text-center"
                            >
                                Consultar Asesora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default ProductDetailPage;
