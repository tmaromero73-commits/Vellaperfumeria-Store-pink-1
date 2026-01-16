
import React, { useState, useEffect } from 'react';
import type { Product } from './types';
import { type Currency, formatCurrency } from './currency';

interface ProductDetailPageProps {
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart }) => {
    const variantKey = product.variants ? Object.keys(product.variants)[0] : null;
    const variantOptions = variantKey ? product.variants![variantKey] : [];
    
    const [selectedVariant, setSelectedVariant] = useState<string | null>(variantOptions.length > 0 ? variantOptions[0].value : null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <div className="container mx-auto px-6 py-12 md:py-24 bg-white">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                {/* ÁREA VISUAL - Estilo Boutique */}
                <div className="md:col-span-7 space-y-8">
                    <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative group">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                        {product.tag && (
                            <div className="absolute top-8 left-8">
                                <span className="bg-black text-white text-[10px] font-black px-6 py-2 uppercase tracking-[0.3em]">
                                    {product.tag}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* ÁREA DE INFORMACIÓN - Descripciones Extensas */}
                <div className="md:col-span-5 flex flex-col">
                    <nav className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mb-12">
                        Tienda / {product.category} / {product.brand}
                    </nav>

                    <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-[0.9] tracking-tighter text-black uppercase">
                        {product.name}
                    </h1>
                    
                    <div className="flex items-center gap-6 mb-12">
                        <p className="text-3xl font-black text-black">{formatCurrency(product.price, currency)}</p>
                        {product.regularPrice && (
                            <p className="text-xl text-gray-300 line-through font-medium">{formatCurrency(product.regularPrice, currency)}</p>
                        )}
                    </div>
                    
                    <div className="space-y-12 border-t border-gray-100 pt-12">
                        <div className="prose prose-sm">
                            <h3 className="text-[12px] font-black uppercase tracking-[0.3em] mb-4">El Legado</h3>
                            <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                                {product.description}
                            </p>
                        </div>

                        {/* Selección de Variantes (Tonos/Shades) */}
                        {variantKey && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[11px] font-black uppercase tracking-widest">
                                        {variantKey}: <span className="text-[#fbc5fa]">{selectedVariant || "Selecciona"}</span>
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                                    {variantOptions.map(option => (
                                        <button
                                            key={option.variationId || option.value}
                                            onClick={() => setSelectedVariant(option.value)}
                                            className={`py-4 px-4 text-[9px] font-black border transition-all uppercase tracking-tighter text-left ${selectedVariant === option.value ? 'bg-black text-white border-black shadow-lg' : 'border-gray-200 text-gray-400 hover:border-black'}`}
                                        >
                                            {option.value}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            onClick={() => {
                                if (variantKey && !selectedVariant) {
                                    alert(`Por favor selecciona un ${variantKey.toLowerCase()}`);
                                    return;
                                }
                                onAddToCart(product, null, variantKey ? { [variantKey]: selectedVariant! } : null);
                            }}
                            className="w-full bg-black text-white font-black py-6 rounded-none hover:bg-[#fbc5fa] hover:text-black transition-all uppercase tracking-[0.4em] text-[11px] shadow-2xl transform active:scale-95"
                        >
                            Añadir a mi Colección
                        </button>

                        {/* Detalles Adicionales */}
                        <div className="space-y-4 pt-10 border-t border-gray-100">
                             <details className="group" open>
                                <summary className="flex justify-between items-center cursor-pointer list-none py-4 border-b border-gray-50">
                                    <span className="text-[11px] font-black uppercase tracking-[0.3em]">Ritual de Aplicación</span>
                                    <span className="text-xl font-light transition-transform group-open:rotate-45 text-gray-400">+</span>
                                </summary>
                                <div className="text-[12px] leading-relaxed text-gray-500 py-6 font-medium">
                                    {product.howToUse || "Consultar el prospecto incluido para una experiencia sensorial completa. Recomendado por expertos en belleza europea."}
                                </div>
                             </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
