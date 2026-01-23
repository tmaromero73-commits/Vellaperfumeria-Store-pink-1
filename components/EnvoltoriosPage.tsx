
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
            {/* HERO BANNER - SIN CAPAS OSCURAS PARA MANTENER VISIBILIDAD DE MODELO */}
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
                    <div className="max-w-4xl w-full bg-[#004851] border-[1px] border-[#d7b552] p-10 md:p-20 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-fade-in-up">
                        
                        <div className="mx-auto mb-10 w-24 md:w-32">
                            <img src={logoUrl} className="w-full h-auto brightness-0 invert" alt="VP Logo" />
                        </div>

                        <span className="text-[10px] md:text-[12px] font-bold text-[#d7b552] uppercase tracking-[0.5em] mb-6 block italic">
                            EXPERIENCIA DE REGALO FESTIVE
                        </span>
                        
                        <h1 className="text-5xl md:text-[8rem] font-serif font-black text-white uppercase tracking-tighter mb-8 italic leading-[0.8] select-none">
                            PRESENTACIÓN <br/> <span className="text-[#d7b552]">MAGISTRAL</span>
                        </h1>
                        
                        <p className="text-white/70 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed mb-12 border-t border-white/10 pt-10">
                            Bolsas y cajas de terciopelo diseñadas para la eternidad. El regalo comienza con la mirada.
                        </p>

                        <button className="bg-[#d7b552] text-black py-5 px-16 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all transform hover:scale-105">
                            VER SELECCIÓN
                        </button>
                    </div>
                </div>
            </section>

            {/* SELECTION AREA */}
            <section className="container mx-auto px-10 py-32 bg-white">
                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#d7b552] mb-4 block">Colección 2026</span>
                    <h2 className="text-5xl md:text-8xl font-serif font-black uppercase italic tracking-tighter text-black leading-none">
                        El Arte de Dar
                    </h2>
                    <div className="w-24 h-2 bg-[#004851] mt-10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28 max-w-7xl mx-auto">
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
            
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default EnvoltoriosPage;
