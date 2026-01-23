
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
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 bg-white">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                {/* Área Visual */}
                <div className="lg:col-span-6">
                    <div className="sticky top-40 aspect-[4/5] bg-[#f9f9f9] overflow-hidden relative rounded-[2.5rem] shadow-sm border border-gray-100 group">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full h-full object-contain p-12 transform transition-transform duration-[3000ms] group-hover:scale-105" 
                        />
                        {product.tag && (
                            <div className="absolute top-8 left-8">
                                <span className="bg-black text-white text-[10px] font-black px-5 py-2 uppercase tracking-[0.4em] shadow-xl">
                                    {product.tag}
                                </span>
                            </div>
                        )}
                        <div className="absolute bottom-8 right-8">
                            <span className="text-gray-300 font-black text-[10px] uppercase tracking-widest">VP SKU: {product.id}</span>
                        </div>
                    </div>
                </div>

                {/* Área de Información */}
                <div className="lg:col-span-6 flex flex-col pt-4">
                    <nav className="text-[10px] text-[#fbc5fa] font-black uppercase tracking-[0.6em] mb-8 italic">
                        Boutique / {product.category} / {product.brand}
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-[1.1] tracking-tighter text-black uppercase italic">
                        {product.name}
                    </h1>
                    
                    <div className="flex items-center gap-10 mb-12">
                        <div className="flex flex-col">
                            {product.regularPrice && product.regularPrice > product.price && (
                                <span className="text-gray-300 line-through text-lg font-bold mb-1">{formatCurrency(product.regularPrice, currency)}</span>
                            )}
                            <p className="text-4xl font-black text-black">{formatCurrency(product.price, currency)}</p>
                        </div>
                        <div className="flex items-center gap-3 border-l border-gray-100 pl-10">
                             <span className="w-2.5 h-2.5 bg-[#fbc5fa] rounded-full animate-pulse"></span>
                             <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Existencias Limitadas en Boutique</span>
                        </div>
                    </div>
                    
                    <div className="space-y-10">
                        {/* Selector de Pestañas Editorial */}
                        <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
                            <button onClick={() => setActiveTab('desc')} className={`pb-4 pr-10 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'desc' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-gray-500'}`}>La Experiencia</button>
                            <button onClick={() => setActiveTab('ing')} className={`pb-4 pr-10 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'ing' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-gray-500'}`}>Composición</button>
                            <button onClick={() => setActiveTab('use')} className={`pb-4 pr-10 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'use' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-gray-500'}`}>Ritual de Uso</button>
                        </div>

                        <div className="min-h-[250px]">
                            {activeTab === 'desc' && (
                                <div className="animate-fade-in">
                                    <p className="text-gray-700 text-lg md:text-xl leading-[1.8] font-medium italic first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-black">
                                        {product.description}
                                    </p>
                                </div>
                            )}
                            {activeTab === 'ing' && (
                                <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 animate-fade-in">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-black">Alquimia Avanzada</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed font-bold tracking-tight">
                                        {product.ingredients}
                                    </p>
                                </div>
                            )}
                            {activeTab === 'use' && (
                                <div className="space-y-8 animate-fade-in">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Instrucciones del Concierge:</h4>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{product.usage}</p>
                                    <div className="bg-[#fbc5fa]/10 p-6 border-l-4 border-[#fbc5fa]">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#fbc5fa]">Sugerencia VIP</p>
                                        <p className="text-xs text-black/70 mt-2">Para una fijación superior en fragancias, aplique sobre puntos de pulso después de su loción corporal.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="pt-10 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => onAddToCart(product, null, variantKey ? { [variantKey]: selectedVariant! } : null)}
                                className="flex-grow bg-black text-white font-black py-8 rounded-full hover:bg-[#fbc5fa] hover:text-black transition-all uppercase tracking-[0.5em] text-[11px] shadow-2xl transform active:scale-95"
                            >
                                Añadir a mi Pedido Real
                            </button>
                            <a 
                                href={`https://wa.me/34661202616?text=Hola, solicito asesoramiento experto sobre ${product.name} (Ref: ${product.id}). Deseo conocer más detalles sobre esta selección boutique.`}
                                target="_blank"
                                className="sm:w-20 w-full border-2 border-black flex items-center justify-center rounded-full hover:bg-black group transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default ProductDetailPage;
