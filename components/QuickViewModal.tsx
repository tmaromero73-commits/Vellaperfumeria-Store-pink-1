import React, { useEffect, useRef, useState } from 'react';
import type { Product } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';

const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface QuickViewModalProps {
    product: Product;
    currency: Currency;
    onClose: () => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, currency, onClose, onAddToCart, onProductSelect }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const variantKey = product.variants ? Object.keys(product.variants)[0] : null;
    const variantOptions = variantKey ? product.variants![variantKey] : [];
    const [selectedVariant, setSelectedVariant] = useState<string | null>(variantOptions.length > 0 ? variantOptions[0].value : null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!product) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[250] p-4 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-[3rem] shadow-2xl w-full max-w-5xl mx-auto flex flex-col md:flex-row p-8 md:p-12 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-10 right-10 text-gray-300 hover:text-black p-3 z-10 bg-white/80 rounded-full transition-all">
                    <CloseIcon />
                </button>
                
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 rounded-[2rem] p-6">
                    <img src={product.imageUrl} alt={product.name} className="max-h-[350px] md:max-h-[500px] object-contain transition-transform duration-1000 hover:scale-110" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col pl-0 md:pl-16 mt-10 md:mt-0">
                    <span className="text-[10px] text-[#fbc5fa] font-black uppercase tracking-[0.5em] mb-4">{product.brand}</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 leading-none uppercase tracking-tighter text-black italic">{product.name}</h2>
                    <p className="text-2xl md:text-3xl font-black text-black mb-8">{formatCurrency(product.price, currency)}</p>
                    <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">{product.description}</p>
                    
                    {variantKey && (
                        <div className="mb-10">
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">Seleccionar {variantKey}:</h4>
                            <div className="flex flex-wrap gap-3">
                                {variantOptions.map(opt => (
                                    <button 
                                        key={opt.value}
                                        onClick={() => setSelectedVariant(opt.value)}
                                        className={`px-6 py-3 text-[9px] font-black uppercase tracking-widest border transition-all ${selectedVariant === opt.value ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-400 hover:border-black'}`}
                                    >
                                        {opt.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto space-y-4">
                        <button
                            onClick={() => onAddToCart(product, null, selectedVariant ? { [variantKey!]: selectedVariant } : null)}
                            className="w-full bg-black text-white font-black py-6 rounded-full hover:bg-[#fbc5fa] hover:text-black transition-all shadow-2xl uppercase tracking-[0.4em] text-[10px]"
                        >
                            Añadir a mi Cesta
                        </button>
                        <button 
                            onClick={() => onProductSelect(product)}
                            className="w-full border-2 border-black text-black font-black py-6 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-[0.4em] text-[10px]"
                        >
                            Ver Experiencia Completa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;