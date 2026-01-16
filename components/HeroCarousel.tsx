
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View) => void;
}

const slides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&w=1600&q=80',
        title: 'Ciencia Sueca',
        subtitle: 'NOVAGE+: TRATAMIENTO FACIAL DE ALTA PRECISIÓN',
        buttonText: 'DESCUBRIR NOVAGE',
        view: 'products' as View,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
        title: 'Color de Temporada',
        subtitle: 'GIORDANI GOLD & THE ONE: ELEGANCIA EUROPEA',
        buttonText: 'VER MAQUILLAJE',
        view: 'products' as View,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
        title: 'Equilibrio Vital',
        subtitle: 'WELLOSOPHY: BELLEZA DESDE EL INTERIOR',
        buttonText: 'SABER MÁS',
        view: 'wellness' as View,
    },
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
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
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="text-center text-white px-6 max-w-5xl">
                            <span className="text-[11px] font-bold tracking-[0.6em] uppercase mb-8 block animate-fade-up">ORIFLAME • SWEDEN</span>
                            <h2 className="text-6xl md:text-[100px] font-serif font-black mb-10 animate-fade-up [animation-delay:200ms] leading-[0.9] tracking-tighter uppercase">{slide.title}</h2>
                            <p className="text-sm md:text-xl tracking-[0.3em] font-medium mb-16 uppercase animate-fade-up [animation-delay:400ms] opacity-90 drop-shadow-md">{slide.subtitle}</p>
                            <button
                                onClick={() => onNavigate(slide.view)}
                                className="bg-white text-black font-black py-6 px-16 rounded-none hover:bg-[#fbc5fa] hover:text-black transition-all duration-700 transform hover:scale-105 animate-fade-up [animation-delay:600ms] tracking-[0.4em] text-[11px] shadow-2xl"
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-20">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-20">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Pagination Lines */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-16 h-[2px] transition-all duration-1000 ${index === currentIndex ? 'bg-white' : 'bg-white/20'}`}
                    />
                ))}
            </div>
            
            <style>{`
                @keyframes fade-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up { animation: fade-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
