
import React, { useState, useRef } from 'react';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';

// URL del Catálogo interactivo Campaña 1 - 2026
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
            setStatusMessage(`¡${product.name} añadido!`);
            setQuickAddCode('');
            setTimeout(() => setStatusMessage(''), 3000);
        } else {
            setStatusMessage('Código no encontrado. Revisa el catálogo.');
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            {/* Header Catálogo */}
            <div className="bg-white border-b border-gray-200 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008c8c] mb-2 block">Campaña 1 - 2026</span>
                        <h1 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">Catálogo Interactivo</h1>
                    </div>
                    
                    {/* Quick Order Form */}
                    <form onSubmit={handleQuickAdd} className="flex gap-2 w-full md:w-auto">
                        <input
                            type="number"
                            placeholder="Código de producto..."
                            className="flex-grow md:w-48 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            value={quickAddCode}
                            onChange={(e) => setQuickAddCode(e.target.value)}
                        />
                        <button
                            ref={buttonRef}
                            type="submit"
                            className="bg-black text-white font-bold px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors uppercase tracking-widest"
                        >
                            Añadir
                        </button>
                    </form>
                </div>
                {statusMessage && <p className="text-center text-xs font-bold mt-2 text-[#008c8c] animate-fade-in">{statusMessage}</p>}
            </div>

            {/* Iframe Visor */}
            <div className="flex-grow relative bg-black">
                <iframe
                    src={INTERACTIVE_CATALOG_URL}
                    title="Catálogo 2026 Oriflame"
                    className="w-full h-[85vh] border-none"
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* Featured Section below catalog */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 text-center">Favoritos del Catálogo 1</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {allProducts.slice(0, 8).map(product => (
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
