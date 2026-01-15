import React, { useState, useEffect } from 'react';
import type { Product } from './types';
import { type Currency, formatCurrency } from './currency';

interface ProductDetailPageProps {
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart }) => {
    const [selectedVariant, setSelectedVariant] = useState<Record<string, string> | null>(null);
    const [currentImageUrl, setCurrentImageUrl] = useState(product.imageUrl);

    useEffect(() => {
        // Reiniciar estado al cambiar de producto
        if (product.variants && Object.keys(product.variants).length > 0) {
            const firstKey = Object.keys(product.variants)[0];
            const firstOption = product.variants[firstKey][0];
            setSelectedVariant({ [firstKey]: firstOption.value });
            if (firstOption.imageUrl) setCurrentImageUrl(firstOption.imageUrl);
        } else {
            setSelectedVariant(null);
            setCurrentImageUrl(product.imageUrl);
        }
    }, [product]);

    const handleToneChange = (type: string, option: any) => {
        setSelectedVariant({ [type]: option.value });
        if (option.imageUrl) {
            setCurrentImageUrl(option.imageUrl);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-16 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                {/* Visual Area */}
                <div className="flex justify-center items-center bg-gray-50 rounded-3xl p-10 min-h-[400px]">
                    <img 
                        src={currentImageUrl} 
                        alt={product.name} 
                        className="max-h-[500px] object-contain transition-all duration-500 ease-in-out transform hover:scale-105" 
                    />
                </div>

                {/* Info Area */}
                <div className="flex flex-col">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px] font-black mb-4">{product.brand}</span>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">{product.name}</h1>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <p className="text-3xl font-bold text-black">{formatCurrency(product.price, currency)}</p>
                        {product.regularPrice && (
                            <p className="text-xl text-gray-400 line-through">{formatCurrency(product.regularPrice, currency)}</p>
                        )}
                    </div>
                    
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">{product.description}</p>

                    {/* Tones Selection */}
                    {product.variants && Object.entries(product.variants).map(([type, options]) => (
                        <div key={type} className="mb-10">
                            <h3 className="text-[11px] font-black uppercase tracking-widest mb-4">Elige tu {type}: <span className="text-gray-400 font-bold">{selectedVariant?.[type]}</span></h3>
                            <div className="flex flex-wrap gap-4">
                                {(options as any[]).map(option => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleToneChange(type, option)}
                                        className={`group relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${selectedVariant?.[type] === option.value ? 'border-black scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                                        style={{ backgroundColor: option.colorCode }}
                                        title={option.value}
                                    >
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold uppercase tracking-widest pointer-events-none">
                                            {option.value}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={() => onAddToCart(product, null, selectedVariant)}
                        className="w-full bg-black text-white font-black py-6 rounded-full hover:bg-gray-800 transition-all uppercase tracking-[0.2em] text-xs shadow-2xl transform hover:-translate-y-1 active:scale-95"
                    >
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;