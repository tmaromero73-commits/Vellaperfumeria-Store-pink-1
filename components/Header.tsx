
import React, { useState } from 'react';
import type { View } from './types.ts';

const Header: React.FC<{ onNavigate: (v: View, p?: any) => void; cartCount: number; onCartClick: () => void; }> = ({ onNavigate, cartCount, onCartClick }) => {
    // Logotipo oficial de vellaperfumeria.com
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png"; 

    const navItems = [
        { label: 'BOUTIQUE', view: 'home' as View },
        { label: 'PERFUMERÍA', view: 'products' as View, payload: 'perfume' },
        { label: 'FACIAL', view: 'products' as View, payload: 'skincare' },
        { label: 'MAQUILLAJE', view: 'products' as View, payload: 'makeup' },
        { label: 'CATÁLOGO', view: 'catalog' as View },
        { label: 'OFERTAS', view: 'ofertas' as View }
    ];

    return (
        <header className="sticky top-0 z-[120] w-full flex flex-col shadow-2xl">
            {/* TOP BAR PROMOCIONAL */}
            <div className="bg-[#fbc5fa] py-1 px-4 w-full flex items-center justify-center text-[7px] md:text-[9px] font-black uppercase tracking-[0.5em] text-black border-b border-black/5">
                <span className="animate-pulse text-center">ENVÍO DE CORTESÍA • WHATSAPP VIP: 661 202 616 • ATENCIÓN 24/7</span>
            </div>

            {/* BARRA DE NAVEGACIÓN NEGRA - FULL WIDTH */}
            <nav className="w-full bg-[#0a0a0a] border-b border-white/10 h-16 md:h-24 px-6 md:px-12 flex items-center justify-between relative">
                
                {/* LOGOTIPO DE VELLAPERFUMERIA.COM */}
                <div className="flex items-center h-full">
                    <button onClick={() => onNavigate('home')} className="group flex items-center gap-4 outline-none">
                        <div className="relative">
                            <img 
                                src={logoUrl} 
                                className="h-12 md:h-16 w-auto object-contain brightness-0 invert transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(251,197,250,0.5)]" 
                                alt="Vella Perfumería Logotipo" 
                            />
                        </div>
                        <div className="hidden lg:flex flex-col text-left border-l border-white/20 pl-4 py-1">
                            <h1 className="text-white text-[11px] font-black tracking-[0.4em] uppercase leading-none font-serif italic">Vella</h1>
                            <p className="text-[#fbc5fa] text-[7px] font-bold tracking-[0.3em] uppercase mt-1">Perfumería Boutique</p>
                        </div>
                    </button>
                </div>

                {/* LINKS CENTRALES - FUENTE PEQUEÑA ELEGANTE */}
                <div className="hidden md:flex items-center h-full gap-1 lg:gap-4">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="group h-full flex items-center">
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className="px-3 text-[9px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all h-full relative"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#fbc5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                            </button>

                            {/* MEGA MENÚ DESPLEGABLE - FONDO NEGRO COMPLETO */}
                            <div className="mega-menu p-8 md:p-14 z-[130] bg-[#0a0a0a] left-0 right-0 top-full shadow-[0_40px_100px_rgba(0,0,0,0.9)] border-t border-white/5">
                                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 text-left">
                                    <div className="md:col-span-4 hidden md:block">
                                        <div className="mb-6 opacity-20">
                                            <img src={logoUrl} className="h-12 brightness-0 invert" alt="Emblema" />
                                        </div>
                                        <h3 className="text-[#fbc5fa] text-3xl font-serif font-black italic uppercase tracking-tighter mb-4 leading-none">
                                            {item.label}
                                        </h3>
                                        <p className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-bold leading-relaxed border-t border-white/5 pt-5 max-w-xs">
                                            Edición Premium Campaña 1. Garantía oficial vellaperfumeria.com
                                        </p>
                                    </div>
                                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                                        <div className="space-y-3">
                                            <span className="text-[#fbc5fa] text-[8px] font-black tracking-widest uppercase block mb-1 opacity-40">Explorar</span>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">Tendencias</button>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">Best Sellers</button>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">Sets Boutique</button>
                                        </div>
                                        <div className="space-y-3">
                                            <span className="text-[#fbc5fa] text-[8px] font-black tracking-widest uppercase block mb-1 opacity-40">Marcas</span>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">Giordani Gold</button>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">NovAge+</button>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">Duologí</button>
                                        </div>
                                        <div className="space-y-3">
                                            <span className="text-[#fbc5fa] text-[8px] font-black tracking-widest uppercase block mb-1 opacity-40">Privé</span>
                                            <button onClick={() => onNavigate('ia')} className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">Chat Concierge</button>
                                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-white block">WhatsApp VIP</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTONES DERECHA */}
                <div className="flex items-center gap-4">
                    <button onClick={() => onNavigate('ia')} className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-[#fbc5fa] hover:text-black text-[#fbc5fa] px-4 py-2 rounded-full transition-all border border-white/10 group">
                        <span className="text-[8px] font-black uppercase tracking-[0.3em]">IA Concierge</span>
                    </button>
                    
                    <button onClick={onCartClick} className="relative p-3 bg-white text-black rounded-full hover:bg-[#fbc5fa] transition-all transform active:scale-95 shadow-xl">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 bg-[#fbc5fa] text-black text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-[#0a0a0a]">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
