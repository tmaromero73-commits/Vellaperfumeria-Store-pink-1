
import React, { useMemo } from 'react';
import type { View, Product } from './types.ts';
import { allProducts } from './products.ts';
import { ProductCard } from './ProductCard.tsx';
import HeroCarousel from './HeroCarousel.tsx';
import type { Currency } from './currency.ts';

interface ProductListProps {
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
    onNavigate, 
    onProductSelect, 
    onAddToCart, 
    onQuickAddToCart, 
    currency, 
    onQuickView 
}) => {
    const products = useMemo(() => allProducts.slice(0, 11), []);

    return (
        <div className="w-full bg-white">
            <HeroCarousel onNavigate={onNavigate} />
            
            <section className="w-full py-12 md:py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 md:px-12">
                    
                    {/* BARRA DE ACCIONES (FILTRAR / CONTADOR) - Inspirada en tu snippet */}
                    <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 pb-6 mb-12 gap-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 cursor-pointer group hover:text-[#fbc5fa] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Filtrar</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer group hover:text-[#fbc5fa] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                </svg>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Recomendado</span>
                            </div>
                        </div>
                        <div className="text-gray-400">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">{products.length} PRODUCTOS</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
                        
                        {/* BANNER PROMO TEXTO - Integrado en la grid */}
                        <div className="col-span-2 bg-[#fbc5fa]/10 p-10 flex flex-col justify-center items-center text-center border border-[#fbc5fa]/20 group cursor-pointer hover:bg-[#fbc5fa]/20 transition-all rounded-sm">
                            <h4 className="text-xl md:text-2xl font-serif font-black italic text-black mb-4">
                                Pide el Peine Golden por solo 2,99€
                            </h4>
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/60">
                                al comprar un champú o acondicionador Milk & Honey Gold
                            </p>
                            <div className="mt-6 h-[1px] w-12 bg-black opacity-20 group-hover:w-24 transition-all"></div>
                        </div>

                        {/* PRODUCTOS */}
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                currency={currency}
                                onAddToCart={onAddToCart}
                                onQuickAddToCart={onQuickAddToCart}
                                onProductSelect={onProductSelect}
                                onQuickView={onQuickView}
                            />
                        ))}

                        {/* BANNER PROMO IMAGEN */}
                        <div className="col-span-2 relative overflow-hidden group rounded-sm shadow-sm">
                            <img 
                                src="https://media-cdn.oriflame.com/contentImage?externalMediaId=e7298ad1-d0e5-4d50-a9bd-44ec6b731479&name=Promo_single_whole_Comb&inputFormat=jpg" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Promo Especial"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                        </div>
                    </div>

                    <div className="mt-32 flex flex-col items-center gap-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.6em] text-gray-300">Mostrando {products.length} de {products.length} artículos</p>
                        <button 
                            onClick={() => onNavigate('products', 'all')}
                            className="bg-black text-white px-20 py-6 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#fbc5fa] hover:text-black transition-all shadow-2xl transform hover:scale-105"
                        >
                            Ver Todo el Catálogo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
