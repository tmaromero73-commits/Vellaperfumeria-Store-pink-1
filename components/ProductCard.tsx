
import React, { useState } from 'react';
import { type Currency, formatCurrency } from './currency.ts';
import type { Product } from './types.ts';

export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickView, onProductSelect }) => {
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    const variantKey = product.variants ? Object.keys(product.variants)[0] : null;

    return (
        <div 
            className="group flex flex-col h-full bg-white transition-all duration-700 cursor-pointer overflow-hidden border border-black/5 hover:border-black/20 shadow-none hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] relative"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-white flex items-center justify-center p-8">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-[2000ms] group-hover:scale-110 luminous-effect" 
                />
                
                {product.tag && (
                    <div className="absolute top-6 left-6 z-10">
                        <span className="bg-black text-white text-[9px] font-black px-6 py-2 uppercase tracking-widest shadow-lg">{product.tag}</span>
                    </div>
                )}

                {/* BOTONES DE ACCIÓN - MÁXIMA NITIDEZ */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all flex flex-col items-center justify-end pb-10 gap-4 px-10 opacity-0 group-hover:opacity-100">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product, null, selectedVariant ? { [variantKey!]: selectedVariant } : null);
                        }}
                        className="w-full bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] py-5 shadow-2xl hover:bg-[#fbc5fa] hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0"
                    >
                        Añadir
                    </button>
                    
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onQuickView(product);
                        }}
                        className="w-full bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] py-5 shadow-2xl hover:bg-black hover:text-white transition-all border-2 border-black transform translate-y-4 group-hover:translate-y-0"
                    >
                        Detalles
                    </button>
                </div>
            </div>

            <div className="flex flex-col p-8 bg-white" onClick={() => onQuickView(product)}>
                <span className="text-[10px] text-[#fbc5fa] font-black uppercase tracking-[0.5em] mb-2">{product.brand}</span>
                <h3 className="text-[16px] font-black text-black leading-tight mb-4 font-serif tracking-tight uppercase min-h-[3rem] italic">
                    {product.name}
                </h3>

                <div className="flex items-center gap-6">
                    <p className="text-xl font-black text-black">{formatCurrency(product.price, currency)}</p>
                    {isDiscounted && <p className="text-[14px] text-black/30 line-through font-bold">{formatCurrency(product.regularPrice!, currency)}</p>}
                </div>
            </div>
        </div>
    );
};
