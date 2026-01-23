
import React from 'react';
import { type Currency, formatCurrency } from './currency.ts';
import type { Product } from './types.ts';

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-3 h-3 ${filled ? 'text-black' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickView, onProductSelect }) => {
    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    return (
        <div 
            className="group flex flex-col h-full bg-white transition-all duration-500 cursor-pointer relative"
        >
            {/* ÁREA IMAGEN */}
            <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] flex items-center justify-center p-4">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-[1500ms] group-hover:scale-110" 
                />
                
                {/* ETIQUETA NOVEDAD / OFERTA */}
                {(product.tag || isDiscounted) && (
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <span className="bg-[#fbc5fa] text-black text-[8px] font-black px-3 py-1 uppercase tracking-widest shadow-sm">
                            {product.tag === 'OFERTA' ? 'OFERTA' : 'NOVEDAD'}
                        </span>
                    </div>
                )}

                {/* BOTÓN FAVORITOS (Snippet style) */}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-300 hover:text-red-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                {/* BOTÓN COMPRA RÁPIDA (Snippet style) */}
                <div className="absolute inset-x-4 bottom-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product, null, null);
                        }}
                        className="w-full bg-black text-white text-[9px] font-black uppercase tracking-[0.3em] py-4 shadow-xl hover:bg-[#fbc5fa] hover:text-black"
                    >
                        Añadir a la cesta
                    </button>
                </div>
            </div>

            {/* INFO PRODUCTO */}
            <div className="flex flex-col pt-6 pb-2 px-2" onClick={() => onQuickView(product)}>
                {/* RATING */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                        <StarIcon filled={true} />
                        <StarIcon filled={true} />
                        <StarIcon filled={true} />
                        <StarIcon filled={true} />
                        <StarIcon filled={true} />
                    </div>
                    <span className="text-[9px] text-gray-300 font-bold">(12)</span>
                </div>

                <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-1">{product.brand}</span>
                <h3 className="text-sm font-bold text-black leading-tight mb-4 tracking-tight uppercase min-h-[2rem]">
                    {product.name}
                </h3>

                <div className="flex items-center gap-3">
                    <p className="text-lg font-black text-black">{formatCurrency(product.price, currency)}</p>
                    {isDiscounted && (
                        <p className="text-[12px] text-gray-300 line-through font-bold">
                            {formatCurrency(product.regularPrice!, currency)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
