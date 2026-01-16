
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
            <div className="bg-white border-b border-gray-200 py-6">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008c8c] mb-2 block">CATÁLOGO VIGENTE 2026</span>
                        <h1 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">Campaña 1 - 2026</h1>
                    </div>
                    
                    <form onSubmit={handleQuickAdd} className="flex gap-3 w-full md:w-auto">
                        <input
                            type="number"
                            placeholder="Código de catálogo..."
                            className="flex-grow md:w-56 border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
                            value={quickAddCode}
                            onChange={(e) => setQuickAddCode(e.target.value)}
                        />
                        <button
                            ref={buttonRef}
                            type="submit"
                            className="bg-black text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-[#fbc5fa] hover:text-black transition-all uppercase tracking-widest shadow-lg"
                        >
                            Añadir
                        </button>
                    </form>
                </div>
                {statusMessage && <p className="text-center text-xs font-bold mt-3 text-[#008c8c] animate-fade-in">{statusMessage}</p>}
            </div>

            <div className="flex-grow relative bg-black">
                <iframe
                    src={INTERACTIVE_CATALOG_URL}
                    title="Catálogo 2026 Campaña 1 Oriflame"
                    className="w-full h-[85vh] border-none"
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Favoritos de Campaña 1</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Selección exclusiva de los productos más vendidos para empezar el año con lo mejor de la cosmética sueca.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {allProducts.filter(p => p.category === 'skincare').slice(0, 4).map(product => (
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
                    {allProducts.filter(p => p.category === 'perfume').slice(0, 4).map(product => (
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
