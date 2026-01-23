
import React, { useState } from 'react';
import { allProducts } from './products.ts';
import { ProductCard } from './ProductCard.tsx';
import type { Product, View } from './types.ts';
import type { Currency } from './currency.ts';

const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2026001-brp?HideStandardUI=true&Page=1';

const CatalogPage: React.FC<{
    onAddToCart: (p: Product, b: any, s: any) => void;
    onQuickAddToCart: (p: Product, b: any, s: any) => void;
    onProductSelect: (p: Product) => void;
    onQuickView: (p: Product) => void;
    currency: Currency;
    onNavigate: (v: View) => void;
}> = ({ onAddToCart, onQuickAddToCart, onProductSelect, onQuickView, currency, onNavigate }) => {
    // Logotipo unificado (Emblema dorado)
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">
            {/* Header del Catálogo con Logotipo */}
            <div className="container mx-auto px-6 py-12 text-center bg-white flex flex-col items-center">
                <button onClick={() => onNavigate('home')} className="mb-10 hover:scale-110 transition-transform duration-500">
                    <img 
                        src={logoUrl} 
                        alt="Logo Vella" 
                        className="h-20 md:h-28 w-auto object-contain drop-shadow-xl" 
                        referrerPolicy="no-referrer"
                    />
                </button>
                <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter text-black mb-4 italic leading-tight">Catálogo Interactivo</h1>
                <div className="w-24 h-1 bg-[#fbc5fa] mb-4"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Campaña 1 • Boutique 2026 • Colección Exclusiva</p>
            </div>

            {/* Visualizador */}
            <div className="flex-grow bg-white py-6 px-4 md:px-12 mb-20">
                <div className="w-full h-[85vh] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100 rounded-3xl overflow-hidden bg-gray-50">
                    <iframe src={INTERACTIVE_CATALOG_URL} title="Catálogo Vella" className="w-full h-full border-none" allowFullScreen loading="lazy" />
                </div>
            </div>
            
            <section className="container mx-auto px-6 pb-24">
                 <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-4">Selección Rápida</span>
                    <h2 className="text-4xl font-serif font-black uppercase italic tracking-tighter text-black">Destacados de esta Edición</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {allProducts.slice(0, 4).map(product => (
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
            </section>
        </div>
    );
};

export default CatalogPage;
