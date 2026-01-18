
import React from 'react';
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
    return (
        <div className="w-full min-h-screen bg-white flex flex-col">
            {/* Header del Catálogo */}
            <div className="container mx-auto px-6 py-12 text-center bg-white">
                <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter text-black mb-4 italic leading-tight">Catálogo Interactivo</h1>
                <div className="w-24 h-1 bg-[#fbc5fa] mx-auto mb-4"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Campaña 1 • Oriflame 2026 • Colección Exclusiva</p>
            </div>

            {/* Visualizador Full Frame */}
            <div className="flex-grow bg-white py-6 px-4 md:px-12">
                <div className="w-full h-[85vh] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100 rounded-3xl overflow-hidden bg-gray-50 relative">
                    <iframe
                        src={INTERACTIVE_CATALOG_URL}
                        title="Catálogo Vella Perfumería 2026"
                        className="w-full h-full border-none"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Selección Destacada */}
            <div className="container mx-auto px-6 py-32 bg-white border-t border-gray-50">
                <div className="text-center mb-20">
                    <span className="text-[#fbc5fa] font-black uppercase text-[10px] tracking-[0.6em] block mb-4 italic">The Selection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tighter text-black italic">Lo más deseado de Campaña 1</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
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
                <div className="mt-24 text-center">
                    <button 
                        onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                        className="bg-black text-white px-16 py-7 font-black uppercase tracking-[0.5em] text-[11px] hover:bg-[#fbc5fa] hover:text-black transition-all shadow-2xl rounded-full"
                    >
                        Volver a VellaPerfumeria.com
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
