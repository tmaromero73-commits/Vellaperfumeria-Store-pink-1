
import React, { useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickView }) => {
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    const variantKey = product.variants ? Object.keys(product.variants)[0] : null;
    const variantOptions = variantKey ? product.variants![variantKey] : [];

    const handleCardAction = (e: React.MouseEvent) => {
        // Direct add to cart
        if (variantOptions.length > 0 && !selectedVariant) {
            onQuickView(product); // Needs variant selection
        } else {
            onAddToCart(product, null, selectedVariant ? { [variantKey!]: selectedVariant } : null);
        }
    };

    return (
        <div 
            className="group flex flex-col h-full bg-white transition-all duration-500 cursor-pointer overflow-hidden border border-transparent hover:border-gray-100"
            onClick={handleCardAction}
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                />
                
                {product.tag && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-black text-white text-[8px] font-black px-4 py-1 uppercase tracking-widest">{product.tag}</span>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end pb-4 px-4">
                    <div className="bg-white/95 backdrop-blur-sm p-4 w-full shadow-2xl flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        {variantOptions.length > 0 && (
                            <div className="w-full overflow-x-auto no-scrollbar py-2" onClick={(e) => e.stopPropagation()}>
                                <div className="flex gap-2 min-w-max pb-1">
                                    {variantOptions.map(option => (
                                        <button
                                            key={option.variationId || option.value}
                                            onClick={(e) => { 
                                                e.stopPropagation(); 
                                                setSelectedVariant(option.value); 
                                            }}
                                            className={`px-3 py-1.5 text-[9px] font-black border transition-all whitespace-nowrap uppercase tracking-tighter ${selectedVariant === option.value ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-500 hover:border-black bg-white'}`}
                                        >
                                            {option.value}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <span className="text-[10px] font-black uppercase text-center tracking-widest text-black">
                           Añadir a la Cesta
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-4 pt-6">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-1">{product.brand}</span>
                <h3 className="text-[12px] font-black text-black leading-snug mb-2 font-serif tracking-tight uppercase">
                    {product.name}
                </h3>

                <div className="flex items-center gap-3">
                    <p className="text-sm font-black text-black">{formatCurrency(product.price, currency)}</p>
                    {isDiscounted && <p className="text-[11px] text-gray-400 line-through font-medium">{formatCurrency(product.regularPrice!, currency)}</p>}
                </div>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};
