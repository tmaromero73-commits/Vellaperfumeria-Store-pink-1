
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types.ts';

const slides = [
    {
        bgImageUrl: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=26e2e50c-e27f-4444-9b5f-55734208940d&name=Promo_Hero_Pants_Red&inputFormat=jpg',
        productImageUrl: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38534%2F38534_1.png',
        title: 'LUJO EN CADA DETALLE',
        subtitle: 'DESCUBRE EL ARTE DE REGALAR CON CARIÑO • CAMPAÑA 1 - 2026',
        buttonText: 'VER NOVEDADES',
        view: 'products' as View,
        bgPos: 'center 5%'
    },
    {
        bgImageUrl: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=5e76d99b-d7b4-498c-843e-c68e7c10d321&name=yoga-sunset&inputFormat=jpg',
        productImageUrl: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46060%2F46060_1.png',
        title: 'ALL OR NOTHING AMPLIFIED',
        subtitle: 'SIENTE EL PODER DE LA FRAGANCIA FLORAL AMBARINA • AHORA 62,99€',
        buttonText: 'COMPRAR AHORA',
        view: 'products' as View,
        bgPos: 'center center'
    }
];

const HeroCarousel: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, [nextSlide]);
    
    return (
        <div className="w-full relative h-[90vh] md:h-screen overflow-hidden bg-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ${index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
                >
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat transition-transform duration-[12000ms]"
                        style={{ 
                            backgroundImage: `url(${slide.bgImageUrl})`,
                            backgroundPosition: slide.bgPos, 
                            transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)'
                        }}
                    >
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10">
                        <div className="relative w-full max-w-[700px] bg-[#004851] border-[1px] border-[#d7b552] p-10 md:p-16 text-center shadow-[0_50px_100px_rgba(0,0,0,0.6)] animate-hero-card">
                            
                            <div className="relative mx-auto mb-8 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
                                <img 
                                    src={slide.productImageUrl} 
                                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] scale-110" 
                                    alt="Featured Product" 
                                />
                                <div className="absolute bottom-2 right-0 bg-[#d7b552] px-4 py-1.5 text-[8px] font-black text-black uppercase tracking-[0.2em] shadow-2xl border border-black/10">
                                    CALIDAD SUECA
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="text-[9px] md:text-[11px] font-bold text-[#d7b552] uppercase tracking-[0.6em] italic">
                                    ORIFLAME • LUXURY SELECTION
                                </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white uppercase tracking-tighter mb-8 leading-tight italic drop-shadow-2xl">
                                {slide.title}
                            </h2>
                            
                            <p className="text-white/80 text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] mb-10 max-w-sm mx-auto leading-relaxed border-t border-white/10 pt-8">
                                {slide.subtitle}
                            </p>
                            
                            <button
                                onClick={() => onNavigate(slide.view)}
                                className="bg-[#d7b552] text-black py-4 px-12 md:px-20 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all transform hover:scale-105 shadow-2xl"
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-4">
                {slides.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setCurrentIndex(i)}
                        className={`w-10 h-0.5 transition-all duration-500 ${i === currentIndex ? 'bg-[#d7b552]' : 'bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
