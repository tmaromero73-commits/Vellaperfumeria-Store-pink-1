
import React, { useState, useRef } from 'react';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';

const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';

const CatalogPage: React.FC<{
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
    currency: Currency;
}> = ({ onAddToCart, onQuickAddToCart, onProductSelect, onQuickView, currency }) => {
    const [quickAddCode, setQuickAddCode] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleQuickAdd = (e: React.FormEvent) => {
        e.preventDefault();
        const code = parseInt(quickAddCode.trim());
        const product = allProducts.find(p => p.id === code);

        if (product) {
            onAddToCart(product, buttonRef.current, null);
            setStatusMessage(`¡${product.name} añadido a tu colección!`);
            setQuickAddCode('');
            setTimeout(() => setStatusMessage(''), 4000);
        } else {
            setStatusMessage('Código no identificado en Campaña 1. Revisa el catálogo.');
            setTimeout(() => setStatusMessage(''), 4000);
        }
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">
            {/* Catalog VIP Header */}
            <div className="bg-gray-50 border-b border-gray-200 py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#008c8c] mb-3 block">Experiencia Digital Exclusiva</span>
                        <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">Catálogo Campaña 1 - 2026</h1>
                    </div>
                    
                    {/* Pedido por Código VIP */}
                    <form onSubmit={handleQuickAdd} className="flex gap-3 w-full md:w-auto">
                        <input
                            type="number"
                            placeholder="Introduce código de 5 dígitos..."
                            className="flex-grow md:w-64 border border-gray-300 rounded-none px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all bg-white font-bold"
                            value={quickAddCode}
                            onChange={(e) => setQuickAddCode(e.target.value)}
                        />
                        <button
                            ref={buttonRef}
                            type="submit"
                            className="bg-black text-white font-black px-10 py-4 rounded-none text-[10px] hover:bg-[#fbc5fa] hover:text-black transition-all uppercase tracking-[0.3em] shadow-2xl"
                        >
                            PEDIR
                        </button>
                    </form>
                </div>
                {statusMessage && <p className="text-center text-xs font-black mt-4 text-[#008c8c] animate-fade-in tracking-widest">{statusMessage}</p>}
            </div>

            {/* Iframe Interactivo Full Frame */}
            <div className="flex-grow relative bg-black shadow-inner border-y border-gray-200">
                <iframe
                    src={INTERACTIVE_CATALOG_URL}
                    title="Catálogo Vella Perfumería 2026"
                    className="w-full h-[85vh] border-none"
                    allowFullScreen
                    loading="lazy"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-[9px] text-white/60 font-black uppercase tracking-[0.4em]">
                    Navegación Interactiva Habilitada
                </div>
            </div>

            {/* Featured Selection below catalog */}
            <div className="container mx-auto px-6 py-24 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-black italic">Selección del Concierge - C1</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm">Los productos con mayor demanda del catálogo actual, disponibles para entrega inmediata con servicio premium.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {allProducts.slice(0, 12).map(product => (
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
            </div>
        </div>
    );
};

export default CatalogPage;
