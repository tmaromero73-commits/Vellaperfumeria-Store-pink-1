
import React, { useState, useMemo, useEffect } from 'react';
import { ProductCard } from './ProductCard.tsx';
import type { Product } from './types.ts';
import type { Currency } from './currency.ts';
import { allProducts } from './products.ts';

const categories = [
    { key: 'all', name: 'Boutique Global' },
    { key: 'makeup', name: 'Maquillaje Pro' },
    { key: 'skincare', name: 'Facial Avanzado' },
    { key: 'perfume', name: 'Fragancias VIP' },
    { key: 'bodycare', name: 'Cuidado Corporal' },
];

const ShopPage: React.FC<{
    currency: Currency;
    initialCategory: string;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, initialCategory, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [displayLimit, setDisplayLimit] = useState(20);
    
    useEffect(() => {
        setActiveCategory(initialCategory);
        setDisplayLimit(20);
    }, [initialCategory]);

    const filteredProducts = useMemo(() => {
        return activeCategory === 'all'
            ? [...allProducts]
            : allProducts.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    const visibleProducts = filteredProducts.slice(0, displayLimit);
    const currentCategoryName = categories.find(c => c.key === activeCategory)?.name || 'Tienda';

    return (
        <div className="bg-white min-h-screen pb-40">
            <div className="bg-white border-b border-gray-100 py-20">
                <div className="container mx-auto px-10">
                    <h1 className="text-6xl md:text-[11rem] font-serif font-black uppercase italic tracking-tighter mb-14 leading-none text-black">{currentCategoryName}</h1>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`flex-shrink-0 px-14 py-6 text-[10px] font-black uppercase tracking-[0.3em] border-2 transition-all ${activeCategory === cat.key ? 'bg-black text-white border-black' : 'border-gray-100 text-gray-400 hover:border-black hover:text-black'}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-10 py-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-40">
                    {visibleProducts.map((product, idx) => (
                        <ProductCard
                            key={`${product.id}-${idx}`}
                            product={product}
                            currency={currency}
                            onAddToCart={onAddToCart}
                            onQuickAddToCart={onQuickAddToCart}
                            onProductSelect={onProductSelect}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>
                
                {displayLimit < filteredProducts.length && (
                    <div className="mt-48 flex justify-center">
                        <button 
                            onClick={() => setDisplayLimit(prev => Math.min(prev + 30, filteredProducts.length))}
                            className="bg-black text-white px-28 py-10 text-[12px] font-black uppercase tracking-[0.6em] hover:bg-[#fbc5fa] hover:text-black transition-all rounded-full shadow-2xl transform hover:scale-105"
                        >
                            Mostrar más de {currentCategoryName} ({filteredProducts.length - displayLimit} restantes)
                        </button>
                    </div>
                )}
            </div>
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        </div>
    );
};

export default ShopPage;
