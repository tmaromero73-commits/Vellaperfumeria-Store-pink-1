
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
    const featuredProducts = useMemo(() => {
        return allProducts.slice(0, 12);
    }, []);

    return (
        <div className="w-full bg-white">
            <HeroCarousel onNavigate={onNavigate} />
            
            <section className="w-full py-24 bg-[#ffffff]">
                <div className="w-full px-6 md:px-20">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#fbc5fa] mb-4 block">SELECCIÓN BOUTIQUE 2026</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-black uppercase italic tracking-tighter text-black leading-tight mb-8">
                            Momentos <br/> Compartidos
                        </h2>
                        <div className="w-20 h-1 bg-black"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-24">
                        {featuredProducts.map((product) => (
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
                    </div>

                    <div className="mt-32 flex justify-center">
                        <button 
                            onClick={() => onNavigate('products', 'all')}
                            className="bg-black text-white px-16 py-6 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#fbc5fa] hover:text-black transition-all shadow-2xl transform hover:scale-105"
                        >
                            Explorar Catálogo Completo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
