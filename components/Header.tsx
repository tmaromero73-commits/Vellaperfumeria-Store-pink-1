
import React from 'react';
import type { View } from './types.ts';

const Header: React.FC<{ onNavigate: (v: View, p?: any) => void; cartCount: number; onCartClick: () => void; }> = ({ onNavigate, cartCount, onCartClick }) => {
    // Logotipo del emblema circular unificado
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png"; 

    const navItems = [
        { label: 'INICIO BOUTIQUE', view: 'home' as View },
        { label: 'PERFUMERÍA VIP', view: 'products' as View, payload: 'perfume' },
        { label: 'TRATAMIENTO FACIAL', view: 'products' as View, payload: 'skincare' },
        { label: 'MAQUILLAJE PRO', view: 'products' as View, payload: 'makeup' },
        { label: 'CATÁLOGO DIGITAL', view: 'catalog' as View },
        { label: 'OFERTAS', view: 'ofertas' as View },
        { label: 'CONCIERGE IA', view: 'ia' as View }
    ];

    return (
        <header className="sticky top-0 z-[100] w-full flex flex-col bg-white">
            {/* TOP BAR ROSA PASTEL - ANUNCIO */}
            <div className="bg-[#fbc5fa] py-2 px-4 md:px-20 w-full flex items-center justify-center text-black font-black uppercase text-[7px] md:text-[9px] tracking-[0.4em] border-b border-white/10">
                <span className="animate-pulse">INSTAGRAM: @VELLAPERFUMERIA | WHATSAPP: 661 202 616 | ENVÍO DE CORTESÍA INCLUIDO</span>
            </div>

            {/* AREA DE LOGO - ESPACIOSA Y BLANCA */}
            <div className="w-full h-24 md:h-36 flex items-center px-4 md:px-20 justify-between bg-white relative">
                <div className="w-1/4"></div>
                
                <div className="flex flex-col items-center">
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src={logoUrl} 
                            className="h-16 md:h-28 w-auto object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-xl" 
                            alt="Vella Perfumería Boutique" 
                        />
                    </button>
                </div>

                <div className="w-1/4 flex justify-end">
                    <button onClick={onCartClick} className="relative p-2.5 bg-black rounded-full text-white shadow-2xl hover:bg-[#fbc5fa] hover:text-black transition-all transform active:scale-95">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#fbc5fa] text-black text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* BARRA DE NAVEGACIÓN NEGRA - FULL WIDTH */}
            <nav className="w-full bg-[#0a0a0a] flex justify-center h-12 md:h-16 relative shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="flex items-center h-full w-full justify-center overflow-x-auto no-scrollbar max-w-full gap-2 md:gap-10 px-6">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="group h-full flex items-center">
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className="px-3 md:px-6 text-[7px] md:text-[11px] font-black uppercase tracking-[0.35em] text-white/70 hover:text-white transition-all whitespace-nowrap h-full relative"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#fbc5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
                            </button>

                            {/* MEGA MENÚ DESPLEGABLE - FONDO NEGRO FULL WIDTH */}
                            <div className="mega-menu p-10 md:p-24 z-[110] border-t border-white/5 shadow-[0_100px_150px_rgba(0,0,0,0.95)] bg-[#0a0a0a]">
                                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                                    <div className="md:col-span-6 border-r border-white/10 pr-16 hidden md:block text-left">
                                        <h3 className="text-[#fbc5fa] text-5xl md:text-8xl font-serif font-black italic uppercase tracking-tighter mb-6 leading-none">
                                            {item.label}
                                        </h3>
                                        <p className="text-white/30 text-[11px] uppercase tracking-[0.5em] font-bold leading-relaxed max-w-md">
                                            Edición Boutique Campaña 1. Curaduría europea exclusiva para Vella Boutique. Alta cosmética y perfumería de autor.
                                        </p>
                                    </div>
                                    <div className="md:col-span-6 grid grid-cols-2 gap-y-12 gap-x-16 text-left">
                                        <div className="space-y-4">
                                            <span className="text-[#fbc5fa] text-[10px] font-black tracking-widest uppercase block mb-4 border-b border-white/10 pb-2">Explorar</span>
                                            <button className="text-[13px] font-black uppercase tracking-[0.4em] text-white hover:text-[#fbc5fa] block transition-colors">Novedades 2026</button>
                                            <button className="text-[13px] font-black uppercase tracking-[0.4em] text-white hover:text-[#fbc5fa] block transition-colors">Sets Premium</button>
                                        </div>
                                        <div className="space-y-4">
                                            <span className="text-[#fbc5fa] text-[10px] font-black tracking-widest uppercase block mb-4 border-b border-white/10 pb-2">Servicios</span>
                                            <button className="text-[13px] font-black uppercase tracking-[0.4em] text-white hover:text-[#fbc5fa] block transition-colors">WhatsApp VIP</button>
                                            <button className="text-[13px] font-black uppercase tracking-[0.4em] text-white hover:text-[#fbc5fa] block transition-colors">Asesoría IA</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
