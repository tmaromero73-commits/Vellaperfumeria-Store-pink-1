import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

const HeartIcon: React.FC<{ isFilled: boolean }> = ({ isFilled }) => (
    <svg className={`h-5 w-5 transition-colors ${isFilled ? 'text-black fill-current' : 'text-gray-400 fill-transparent'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const StarIcon: React.FC<{ fill: boolean }> = ({ fill }) => (
    <svg className={`w-3 h-3 ${fill ? 'text-black' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    
    const shades = product.variants?.['Tono'] || [];
    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    return (
        <div 
            className="group flex flex-col h-full bg-white transition-all duration-300 hover:shadow-2xl rounded-[2.5rem] border border-gray-100 overflow-hidden cursor-pointer"
            onClick={() => onProductSelect(product)}
        >
            {/* Area Visual */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50/50 p-8 flex items-center justify-center">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                    {product.tag === 'OFERTA' && (
                        <span className="bg-red-600 text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">Oferta</span>
                    )}
                    {product.tag === 'NOVEDAD' && (
                        <span className="bg-black text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">Novedad</span>
                    )}
                </div>

                <button 
                    onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
                    className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-all shadow-md active:scale-90"
                >
                    <HeartIcon isFilled={isWishlisted} />
                </button>
            </div>

            {/* Información */}
            <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} fill={i < Math.floor(product.rating || 0)} />)}
                    <span className="text-[10px] text-gray-400 font-bold ml-1.5">({product.reviewCount})</span>
                </div>

                <span className="text-[9px] text-gray-400 font-black uppercase tracking-[0.3em] mb-2">{product.brand}</span>
                <h3 className="text-xs font-bold text-gray-900 leading-snug mb-5 line-clamp-2 min-h-[2.4rem] transition-colors group-hover:text-black">
                    {product.name}
                </h3>

                {/* SELECTOR DE TONOS - Solo Maquillaje */}
                {product.category === 'makeup' && shades.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                            {shades.map((shade, idx) => (
                                <div 
                                    key={idx}
                                    className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0 cursor-help hover:scale-125 hover:border-black transition-all"
                                    style={{ backgroundColor: shade.colorCode }}
                                    title={shade.value}
                                />
                            ))}
                        </div>
                        <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mt-1">Tonos: {shades.length} <span className="opacity-30 ml-1">• Desliza</span></p>
                    </div>
                )}

                <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
                        <p className="text-lg font-black text-black leading-none">{formatCurrency(product.price, currency)}</p>
                        {isDiscounted && <p className="text-[10px] text-gray-400 line-through mt-2">{formatCurrency(product.regularPrice!, currency)}</p>}
                    </div>
                    <button 
                        ref={btnRef}
                        onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                        className="w-12 h-12 bg-black text-white rounded-full hover:bg-[#fbc5fa] hover:text-black transition-all flex items-center justify-center shadow-lg transform active:scale-95 group-hover:scale-110"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};
