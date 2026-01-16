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
    const [selectedVariant, setSelectedVariant] = useState<Record<string, string> | null>(null);

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
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[250] p-4"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl mx-auto flex flex-col md:flex-row p-6 md:p-8 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-black p-2 z-10 bg-white/50 rounded-full">
                    <CloseIcon />
                </button>
                
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-4">
                    <img src={product.imageUrl} alt={product.name} className="max-h-[300px] md:max-h-[400px] object-contain" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col pl-0 md:pl-10 mt-6 md:mt-0">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">{product.brand}</span>
                    <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight uppercase tracking-tighter text-black">{product.name}</h2>
                    <p className="text-xl md:text-2xl font-black text-black mb-6">{formatCurrency(product.price, currency)}</p>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-4 md:line-clamp-none">{product.description}</p>
                    
                    <div className="mt-auto space-y-4">
                        <button
                            onClick={() => onAddToCart(product, null, selectedVariant)}
                            className="w-full bg-black text-white font-black py-5 rounded-full hover:bg-[#fbc5fa] hover:text-black transition-all shadow-xl uppercase tracking-widest text-[10px]"
                        >
                            Añadir al carrito
                        </button>
                        <button 
                            onClick={() => onProductSelect(product)}
                            className="w-full border-2 border-black text-black font-black py-5 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest text-[10px]"
                        >
                            Ver detalles
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;