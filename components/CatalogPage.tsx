
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
            {/* Catalog Header */}
            <div className="container mx-auto px-6 py-12 text-center bg-white">
                <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter text-black mb-4 italic">Catálogo Interactivo</h1>
                <div className="w-24 h-1 bg-[#fbc5fa] mx-auto mb-4"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Campaña 1 • Oriflame 2026</p>
            </div>

            {/* Full Width Visualizer */}
            <div className="w-full bg-white flex-grow flex justify-center py-6">
                <div className="w-full max-w-[1920px] aspect-[3/4] md:aspect-[16/9] shadow-2xl border border-gray-100 overflow-hidden bg-gray-50">
                    <iframe
                        src={INTERACTIVE_CATALOG_URL}
                        title="Catálogo Vella Perfumería 2026"
                        className="w-full h-full border-none"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Collection Selection */}
            <div className="container mx-auto px-6 py-24 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black italic underline decoration-[#fbc5fa] decoration-8 underline-offset-8">Lo más exclusivo de este Catálogo</h2>
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
                <div className="mt-20 text-center">
                    <button 
                        onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                        className="bg-black text-white px-16 py-6 font-black uppercase tracking-[0.5em] text-[10px] hover:bg-[#fbc5fa] hover:text-black transition-all shadow-2xl"
                    >
                        Volver a Inicio VellaPerfumeria
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
