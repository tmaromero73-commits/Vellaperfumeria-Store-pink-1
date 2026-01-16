
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onProductSelect, onQuickView }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const sizes = ["S", "M", "L", "XL"];
    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    return (
        <div 
            className="group flex flex-col h-full bg-white transition-all duration-500 cursor-pointer overflow-hidden border border-transparent hover:border-gray-100"
            onClick={() => onProductSelect(product)}
        >
            {/* Visual Area */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                />
                
                {product.tag && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-black text-white text-[8px] font-bold px-4 py-1 uppercase tracking-widest">{product.tag}</span>
                    </div>
                )}

                {/* Quick Selection Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end pb-8 px-6">
                    <div className="bg-white p-4 w-full shadow-2xl flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <div className="flex justify-between gap-2">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={(e) => { e.stopPropagation(); setSelectedSize(size); }}
                                    className={`flex-grow py-2 text-[10px] font-bold border transition-colors ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                if (selectedSize) {
                                    onAddToCart(product, null, { "Talla": selectedSize });
                                } else {
                                    onQuickView(product);
                                }
                            }}
                            className="w-full bg-black text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                        >
                            {selectedSize ? 'Añadir' : 'Seleccionar Talla'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Area */}
            <div className="flex flex-col p-4 pt-6">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-1">{product.brand}</span>
                <h3 className="text-[13px] font-medium text-gray-900 leading-snug mb-2 font-serif tracking-tight">
                    {product.name}
                </h3>

                <div className="flex items-center gap-3">
                    <p className="text-sm font-bold text-black">{formatCurrency(product.price, currency)}</p>
                    {isDiscounted && <p className="text-[11px] text-gray-400 line-through">{formatCurrency(product.regularPrice!, currency)}</p>}
                </div>
            </div>
        </div>
    );
};
