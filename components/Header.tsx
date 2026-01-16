
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const InstagramIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A19 19 0 013 4a1 1 0 011-1h3.43a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1.1z" />
    </svg>
);

const Header: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    cartCount: number;
    onCartClick: () => void;
}> = ({ onNavigate, cartCount, onCartClick }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <header className="w-full z-[100] relative bg-white">
            {/* Top Bar - Swedish Beauty Accent */}
            <div className="bg-[#fbc5fa] py-2 text-black w-full">
                <div className="container mx-auto px-4 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.25em]">
                    <div className="flex items-center gap-4">
                        <a href="https://instagram.com/vellapremium" target="_blank" className="flex items-center gap-1.5 hover:opacity-60 transition-opacity">
                            <InstagramIcon /> <span className="hidden sm:inline">INSTAGRAM</span>
                        </a>
                    </div>
                    <span className="text-center font-bold">Swedish Beauty Inspired: Envío Gratis desde 35€</span>
                    <div className="flex items-center gap-4">
                        <a href="tel:+34661202616" className="flex items-center gap-1.5 hover:opacity-60 transition-opacity">
                            <PhoneIcon /> <span className="hidden sm:inline">661 202 616</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header Area - Centered Logo */}
            <div className="py-6 md:py-8 w-full bg-white border-b border-gray-50">
                <div className="container mx-auto px-6 relative flex items-center">
                    
                    {/* Left - AI Concierge */}
                    <div className="flex-1 hidden md:block">
                        <button 
                            onClick={() => onNavigate('ia')} 
                            className="bg-black text-white px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all"
                        >
                            Beauty AI
                        </button>
                    </div>

                    {/* Center - Branding */}
                    <div className="flex-none">
                        <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                            <span className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500 text-black uppercase">VELLA</span>
                            <span className="text-[9px] font-light tracking-[0.6em] mt-2 opacity-60 text-black uppercase">By Oriflame • Sweden</span>
                        </button>
                    </div>
                    
                    {/* Right - View Web (Higher Contrast Grey) and Cart */}
                    <div className="flex-1 flex items-center justify-end gap-6">
                        <button 
                            onClick={() => onNavigate('home')} 
                            className="hidden lg:block text-[#666666] text-[10px] font-black uppercase tracking-[0.3em] hover:text-black transition-colors"
                        >
                            Ver web
                        </button>
                        <button onClick={onCartClick} className="relative p-1 group">
                            <svg className="h-7 w-7 text-black group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                  </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* FULL WIDTH BLACK MENU */}
            <nav className="bg-black w-full relative h-14">
                <div className="container mx-auto h-full">
                    <div className="flex items-center justify-center h-full">
                        {[
                            { key: 'skincare', label: 'Facial' },
                            { key: 'makeup', label: 'Maquillaje' },
                            { key: 'perfume', label: 'Fragancias' },
                            { key: 'wellness', label: 'Wellness' },
                            { key: 'personal-care', label: 'Cuidado Personal' }
                        ].map((cat) => (
                            <button
                                key={cat.key}
                                onMouseEnter={() => setActiveMenu(cat.key)}
                                onMouseLeave={() => setActiveMenu(null)}
                                onClick={() => onNavigate('products', cat.key)}
                                className={`px-4 md:px-10 text-white text-[10px] font-black uppercase tracking-[0.25em] h-full flex items-center transition-all relative group`}
                            >
                                <span className="relative z-10">{cat.label}</span>
                                <span className={`absolute bottom-0 left-0 w-full h-1 bg-[#fbc5fa] transform origin-left transition-transform duration-300 ${activeMenu === cat.key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* DROPDOWN AREA */}
                {activeMenu && (
                    <div 
                        className="absolute top-full left-0 w-full bg-black z-[150] shadow-[0_30px_60px_rgba(0,0,0,0.7)] border-t border-white/5"
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <div className="container mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
                            <div className="space-y-6">
                                <h4 className="text-[#fbc5fa] text-[10px] font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2">Destacados</h4>
                                <ul className="space-y-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', activeMenu)}>Novedades de Campaña</li>
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', activeMenu)}>Súper Ofertas</li>
                                    <li className="hover:text-[#fbc5fa] cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Catálogo Actual</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-[#fbc5fa] text-[10px] font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2">Expertos</h4>
                                <ul className="space-y-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">
                                    <li className="hover:text-white cursor-pointer transition-colors">Test de Piel</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Rutinas de Belleza</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Ingredientes Suecos</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2 rounded-none overflow-hidden relative group h-56 border border-white/5 bg-[#111]">
                                <img src="https://images.unsplash.com/photo-1556228852-6d45a7d8a341?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000" alt="Swedish Beauty" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    <span className="text-white text-[16px] font-serif italic tracking-[0.2em] mb-4">The Beauty of Sweden</span>
                                    <button onClick={() => onNavigate('products', 'skincare')} className="bg-white text-black text-[9px] font-black uppercase tracking-widest px-10 py-4 rounded-none hover:bg-[#fbc5fa] transition-all transform group-hover:scale-105">
                                        Explorar Tratamientos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
