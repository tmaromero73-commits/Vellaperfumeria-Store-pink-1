
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types.ts';

const slides = [
    {
        // Imagen icónica: Modelo con pantalón rojo en entorno de sastrería
        bgImageUrl: 'https://media-cdn.oriflame.com/contentImage?externalMediaId=26e2e50c-e27f-4444-9b5f-55734208940d&name=Promo_Hero_Pants_Red&inputFormat=jpg',
        productImageUrl: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38534%2F38534_1.png',
        title: 'EL ARTE DE LA PRECISIÓN',
        subtitle: 'PERFUMERÍA HECHA A MEDIDA • CALIDAD SARTORIAL PARA SU PIEL',
        buttonText: 'DESCUBRIR SELECCIÓN',
        view: 'products' as View,
        bgPos: 'center 5%'
    },
    {
        // Otra variante de alta costura / sastrería boutique
        bgImageUrl: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        productImageUrl: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46060%2F46060_1.png',
        title: 'LUJO SIN CONCESIONES',
        subtitle: 'ALL OR NOTHING AMPLIFIED • LA ESENCIA DEL PODER ARTESANAL',
        buttonText: 'COMPRAR AHORA',
        view: 'products' as View,
        bgPos: 'center center'
    }
];

const HeroCarousel: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";

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
                    {/* FONDO DE IMAGEN */}
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat transition-transform duration-[12000ms]"
                        style={{ 
                            backgroundImage: `url(${slide.bgImageUrl})`,
                            backgroundPosition: slide.bgPos, 
                            transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)'
                        }}
                    >
                        {/* Overlay muy suave para profundidad sin oscurecer demasiado */}
                        <div className="absolute inset-0 bg-white/5"></div>
                    </div>

                    {/* CONTENIDO CENTRAL */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10">
                        {/* TARJETA VERDE TURQUESA (Mantenida por petición previa) */}
                        <div className="relative w-full max-w-[750px] bg-[#004851] border-[1px] border-[#d7b552] p-10 md:p-16 text-center shadow-[0_50px_100px_rgba(0,0,0,0.3)] animate-hero-card backdrop-blur-sm">
                            
                            {/* Producto Flotante */}
                            <div className="relative mx-auto mb-10 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                                <img 
                                    src={slide.productImageUrl} 
                                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] scale-125 z-20" 
                                    alt="Producto Destacado" 
                                />
                                <img 
                                    src={logoUrl} 
                                    className="absolute inset-0 w-full h-full object-contain opacity-10 brightness-0 invert blur-sm scale-150"
                                    alt="Logo Fondo"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-[#d7b552] px-5 py-2 text-[8px] font-black text-black uppercase tracking-[0.3em] shadow-2xl border border-black/10 z-30">
                                    VELLA BOUTIQUE
                                </div>
                            </div>

                            {/* Cabecera de la Tarjeta */}
                            <div className="mb-8">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <div className="h-[1px] w-12 bg-[#d7b552]/40"></div>
                                    <img src={logoUrl} className="h-6 brightness-0 invert" alt="Vella Logo" />
                                    <div className="h-[1px] w-12 bg-[#d7b552]/40"></div>
                                </div>
                                <span className="text-[9px] md:text-[11px] font-bold text-[#d7b552] uppercase tracking-[0.6em] italic drop-shadow-lg">
                                    ESTILO SARTORIAL • ALTA PERFUMERÍA
                                </span>
                            </div>
                            
                            {/* Título y Subtítulo */}
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white uppercase tracking-tighter mb-10 leading-tight italic drop-shadow-2xl">
                                {slide.title}
                            </h2>
                            
                            <p className="text-white/80 text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] mb-12 max-w-md mx-auto leading-relaxed border-t border-white/10 pt-10">
                                {slide.subtitle}
                            </p>
                            
                            {/* Botón de Acción Estilo Oro */}
                            <button
                                onClick={() => onNavigate(slide.view)}
                                className="bg-[#d7b552] text-black py-5 px-16 md:px-24 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all transform hover:scale-105 shadow-2xl border-none"
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Indicadores de Carrusel */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-4">
                {slides.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setCurrentIndex(i)}
                        className={`w-12 h-0.5 transition-all duration-500 ${i === currentIndex ? 'bg-[#d7b552]' : 'bg-black/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
