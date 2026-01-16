
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroSlide {
    imageUrl: string;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    view?: View;
    showBanner: boolean;
    bannerType?: 'standard' | 'colonial' | 'transparent';
}

const slides: HeroSlide[] = [
    {
        // Diapositiva 1: Modelo Pelirroja + Banner Blue Colonial (SIN ROJO)
        imageUrl: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=2000&q=90',
        title: 'LUJO EN CADA DETALLE',
        subtitle: 'DESCUBRE EL RELOJ WILLWOOD Y LOS NUEVOS ENVOLTORIOS PREMIUM • CAMPAÑA 1 - 2026',
        buttonText: 'VER NOVEDADES',
        view: 'catalog',
        showBanner: true,
        bannerType: 'colonial'
    },
    {
        // Diapositiva 2: Novage+ Innovation
        imageUrl: 'https://images.unsplash.com/photo-1556228852-6d45a7d8a341?auto=format&fit=crop&w=2000&q=90',
        showBanner: false,
    },
    {
        // Diapositiva 3: All or Nothing Amplified Focus
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=90',
        title: 'ALL OR NOTHING AMPLIFIED',
        subtitle: 'SIENTE EL PODER DE LA FRAGANCIA FLORAL AMBARINA • AHORA 62.99€',
        buttonText: 'COMPRAR AHORA',
        view: 'products',
        showBanner: true,
        bannerType: 'transparent'
    },
];

const HeroCarousel: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 8000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="w-full relative h-[85vh] overflow-hidden bg-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2000ms] ease-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                    {slide.showBanner && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                            
                            {/* BLUE COLONIAL BANNER - NO RED, GOLD ACCENTS */}
                            <div className={`relative px-10 py-16 max-w-4xl w-full mx-6 transition-all duration-1000 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${
                                slide.bannerType === 'colonial' 
                                ? 'bg-gradient-to-br from-[#002d40]/90 to-[#005c7a]/90 border-4 border-[#d4af37] shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-md' 
                                : 'bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl'
                            }`}>
                                
                                {/* Golden Sparkles / Accents (CSS) */}
                                {slide.bannerType === 'colonial' && (
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <div className="absolute top-4 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
                                        <div className="absolute bottom-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.4)_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* Imagen de los Envoltorios de Regalo - Sin rastro de rojo */}
                                    <div className="mb-8 relative">
                                        <img 
                                            src="https://media-cdn.oriflame.com/contentImage?externalMediaId=86cb5734-1101-4601-8161-e170f0cfbdd0&name=Promo_split_single_3&inputFormat=jpg" 
                                            alt="Envoltorios Premium Vella"
                                            className="h-36 md:h-52 object-contain rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/20"
                                        />
                                        <div className="absolute -bottom-4 -right-4 bg-[#d4af37] text-black text-[9px] font-black px-4 py-2 uppercase tracking-widest shadow-lg">
                                            CALIDAD SUECA
                                        </div>
                                    </div>

                                    <span className="text-[10px] font-black tracking-[0.7em] uppercase mb-4 block text-[#fbc5fa]">
                                        ORIFLAME • SWEDEN
                                    </span>
                                    
                                    <h2 className="text-3xl md:text-6xl font-serif font-black mb-6 leading-none tracking-tighter uppercase text-center text-white">
                                        {slide.title}
                                    </h2>
                                    
                                    <p className="text-[9px] md:text-xs tracking-[0.45em] font-bold mb-10 uppercase text-center max-w-2xl leading-relaxed text-white/80">
                                        {slide.subtitle}
                                    </p>
                                    
                                    <button
                                        onClick={() => slide.view && onNavigate(slide.view)}
                                        className="py-5 px-16 transition-all duration-700 transform hover:scale-105 tracking-[0.5em] text-[10px] font-black shadow-2xl bg-[#d4af37] text-black hover:bg-white"
                                    >
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            
            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Pagination Lines */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-12 h-[2px] transition-all duration-1000 ${index === currentIndex ? 'bg-white' : 'bg-white/10'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
