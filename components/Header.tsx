
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
);

const Header: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    cartCount: number;
    onCartClick: () => void;
}> = ({ onNavigate, cartCount, onCartClick }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const categories = [
        { key: 'perfume', label: 'Fragancias', sub: 'Giordani Gold' },
        { key: 'makeup', label: 'Maquillaje', sub: 'The One' },
        { key: 'skincare', label: 'Cuidado Facial', sub: 'Novage+' },
        { key: 'wellness', label: 'Bienestar', sub: 'Wellosophy' },
        { key: 'personal-care', label: 'Corporal', sub: 'Esencia' },
        { key: 'accessories', label: 'Accesorios', sub: 'Servicio VIP' }
    ];

    return (
        <header className="w-full z-[100] relative bg-white">
            {/* Promo Bar - Rosa Orquídea Claro */}
            <div className="bg-[#fbc5fa] py-3 text-black w-full text-[10px] font-black uppercase tracking-[0.2em] flex flex-wrap justify-center items-center gap-6 sm:gap-12 shadow-sm border-b border-black/5">
                <div className="flex items-center gap-2">
                    <InstagramIcon />
                    <span className="tracking-widest">@vellaperfumeria</span>
                </div>
                <span className="hidden md:inline text-[9px] font-black opacity-70 italic tracking-widest">Regalo de Cortesía + Envío Gratis desde 35€</span>
                <div className="flex items-center gap-2">
                    <PhoneIcon />
                    <span className="tracking-widest">+34 661 202 616</span>
                </div>
            </div>

            {/* Logo Section - Logo Maestro VP Centrado */}
            <div className="py-10 md:py-14 bg-white flex flex-col items-center relative">
                <button onClick={() => onNavigate('home')} className="flex flex-col items-center group transition-all duration-700">
                    <img 
                        src="https://raw.githubusercontent.com/vella-perfumeria/assets/main/logo_vp_v1.png" 
                        alt="Logo Vella Perfumería VP" 
                        className="h-32 md:h-44 object-contain mb-4 transition-all duration-1000 group-hover:scale-105"
                        style={{ background: 'transparent' }}
                        onError={(e) => {
                            e.currentTarget.src = "https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png";
                        }}
                    />
                    <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tighter text-black uppercase group-hover:tracking-widest transition-all duration-1000">
                        VELLA PERFUMERIA
                    </h1>
                </button>
                
                {/* Carrito Flotante Boutique */}
                <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2">
                    <button onClick={onCartClick} className="relative group p-4 bg-black rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
                        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#fbc5fa] text-black text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center ring-2 ring-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* BARRA DE MENÚ NEGRO - ANCHURA COMPLETA */}
            <nav className="bg-black w-full relative h-16 shadow-2xl flex justify-center border-b border-white/10 overflow-visible">
                <div className="container mx-auto h-full flex justify-center">
                    <div className="flex items-center justify-center h-full overflow-x-auto no-scrollbar whitespace-nowrap px-4 w-full">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onMouseEnter={() => setActiveMenu(cat.key)}
                                onMouseLeave={() => setActiveMenu(null)}
                                onClick={() => onNavigate('products', cat.key)}
                                className={`px-6 md:px-10 text-white text-[11px] font-black uppercase tracking-[0.2em] h-full flex flex-col items-center justify-center transition-all relative group hover:bg-white/5`}
                            >
                                <span className="relative z-10 group-hover:text-[#fbc5fa] transition-colors">{cat.label}</span>
                                <span className="text-[7px] text-white/40 tracking-[0.2em] mt-1 block uppercase font-bold">{cat.sub}</span>
                                <span className={`absolute bottom-0 left-0 w-full h-1 bg-[#fbc5fa] transform origin-left transition-transform duration-500 ${activeMenu === cat.key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* DROPDOWN NEGRO - VISIBLE AL HOVER */}
                {activeMenu && (
                    <div 
                        className="absolute top-full left-0 w-full bg-black z-[150] shadow-[0_40px_80px_rgba(0,0,0,0.8)] border-t border-white/5 animate-dropdown-fade py-12"
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-white">
                            <div className="space-y-6">
                                <h4 className="text-[#fbc5fa] text-[12px] font-black uppercase tracking-[0.4em] mb-4">Descubrir {activeMenu}</h4>
                                <ul className="space-y-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', activeMenu)}>Novedades Campaña 2026</li>
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Sets de Regalo Boutique</li>
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ia')}>Asesoramiento Experto IA</li>
                                </ul>
                            </div>
                            
                            <div className="hidden md:flex flex-col items-center justify-center border-x border-white/5 px-12 text-center">
                                <p className="text-[11px] italic text-white/40 leading-relaxed font-medium max-w-xs">
                                    "Cada detalle cuenta. Desde la formulación europea hasta el servicio de guantes blancos en tu entrega."
                                </p>
                            </div>

                            <div className="flex flex-col items-center md:items-end justify-center">
                                <button 
                                    onClick={() => onNavigate('catalog')} 
                                    className="bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] px-12 py-5 hover:bg-[#fbc5fa] transition-all shadow-xl"
                                >
                                    Ver Catálogo Digital
                                </button>
                                <p className="text-[8px] text-white/20 uppercase tracking-[0.4em] mt-5 font-bold">Vella Signature Experience</p>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <style>{`
                @keyframes dropdown-fade { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                .animate-dropdown-fade { animation: dropdown-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
