
import React from 'react';
import { ProductCard } from './ProductCard.tsx';
import type { Product } from './types.ts';
import type { Currency } from './currency.ts';
import { allProducts } from './products.ts';

interface EnvoltoriosPageProps {
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const EnvoltoriosPage: React.FC<EnvoltoriosPageProps> = ({ currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    const wrappingProducts = allProducts.filter(p => p.category === 'envoltorios');
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";

    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[85vh] flex items-center justify-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://media-cdn.oriflame.com/contentImage?externalMediaId=26e2e50c-e27f-4444-9b5f-55734208940d&name=Promo_Hero_Pants_Red&inputFormat=jpg" 
                        alt="Boutique Background" 
                        className="w-full h-full object-cover"
                        style={{ backgroundPosition: 'center 5%' }}
                    />
                </div>

                <div className="relative z-10 p-4 w-full flex justify-center">
                    <div className="max-w-3xl w-full bg-[#004851] border-[1px] border-[#d7b552] p-10 md:p-16 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-fade-in-up">
                        
                        <div className="mx-auto mb-8 w-20 md:w-24">
                            <img src={logoUrl} className="w-full h-auto brightness-0 invert" alt="VP Logo" />
                        </div>

                        <span className="text-[9px] md:text-[11px] font-bold text-[#d7b552] uppercase tracking-[0.5em] mb-6 block italic">
                            EXPERIENCIA DE REGALO FESTIVE
                        </span>
                        
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-tighter mb-8 italic leading-tight select-none">
                            PRESENTACIÓN <br/> <span className="text-[#d7b552]">MAGISTRAL</span>
                        </h1>
                        
                        <p className="text-white/70 text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] max-w-lg mx-auto leading-relaxed mb-10 border-t border-white/10 pt-8">
                            Bolsas y cajas de terciopelo diseñadas para la eternidad. El regalo comienza con la mirada.
                        </p>

                        <button className="bg-[#d7b552] text-black py-4 px-12 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all transform hover:scale-105">
                            VER SELECCIÓN
                        </button>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-10 py-24 bg-white">
                <div className="flex flex-col items-center mb-20 text-center">
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#d7b552] mb-3 block">Colección 2026</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-black uppercase italic tracking-tighter text-black leading-tight">
                        El Arte de Dar
                    </h2>
                    <div className="w-20 h-1 bg-[#004851] mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 max-w-6xl mx-auto">
                    {wrappingProducts.length > 0 ? (
                        wrappingProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                currency={currency}
                                onAddToCart={onAddToCart}
                                onQuickAddToCart={onQuickAddToCart}
                                onProductSelect={onProductSelect}
                                onQuickView={onQuickView}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-black font-black uppercase tracking-widest text-xs">
                            Cargando selección premium...
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EnvoltoriosPage;
