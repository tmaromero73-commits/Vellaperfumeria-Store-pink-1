
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
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
        { key: 'perfume', label: 'Perfumería', sub: 'Fragancias de Lujo' },
        { key: 'makeup', label: 'Maquillaje', sub: 'The One & Giordani' },
        { key: 'skincare', label: 'Cuidado Facial', sub: 'Novage+ & Optimals' },
        { key: 'wellness', label: 'Bienestar', sub: 'Wellosophy' },
        { key: 'personal-care', label: 'Higiene', sub: 'Cuidado Diario' },
        { key: 'accessories', label: 'Accesorios', sub: 'Moda y Joyas' }
    ];

    return (
        <header className="w-full z-[100] relative bg-white">
            {/* Promotion Bar - Orchid Pink (#fbc5fa) */}
            <div className="bg-[#fbc5fa] py-3 text-black w-full border-b border-black/5">
                <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-6">
                        <a href="https://instagram.com/bellaperfumeria" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-all">
                            <InstagramIcon /> <span className="hidden md:inline">@bellaperfumeria</span>
                        </a>
                    </div>
                    <span className="text-center font-bold tracking-[0.4em] hidden sm:block">Envío Gratis en pedidos +35€ • Regalo de Cortesía</span>
                    <div className="flex items-center gap-4">
                        <span className="hidden lg:inline">WhatsApp: +34 661 202 616</span>
                    </div>
                </div>
            </div>

            {/* Logo Section - Centered on White Background */}
            <div className="py-10 md:py-16 w-full bg-white flex flex-col items-center justify-center relative">
                <button onClick={() => onNavigate('home')} className="flex flex-col items-center group transition-all duration-700">
                    <img 
                        src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                        alt="Vella Perfumería Logo Centrado" 
                        className="h-28 md:h-36 object-contain mb-4 transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-none group-hover:tracking-widest transition-all duration-1000 text-black uppercase">
                        VELLA PERFUMERIA
                    </h1>
                </button>
                
                {/* Cart Icon */}
                <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex items-center">
                    <button onClick={onCartClick} className="relative group p-2">
                        <svg className="h-8 w-8 text-black group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-black text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* FULL WIDTH BLACK MENU */}
            <nav className="bg-black w-full relative h-16 shadow-2xl">
                <div className="container mx-auto h-full">
                    <div className="flex items-center justify-center h-full overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap px-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onMouseEnter={() => setActiveMenu(cat.key)}
                                onMouseLeave={() => setActiveMenu(null)}
                                onClick={() => onNavigate('products', cat.key)}
                                className={`flex-shrink-0 px-6 md:px-10 text-white text-[11px] font-black uppercase tracking-[0.3em] h-full flex flex-col items-center justify-center transition-all relative group`}
                            >
                                <span className="relative z-10 group-hover:text-[#fbc5fa] transition-colors">{cat.label}</span>
                                <span className="text-[7px] text-white/30 uppercase tracking-widest mt-1 block">{cat.sub}</span>
                                <span className={`absolute bottom-0 left-0 w-full h-1 bg-[#fbc5fa] transform origin-left transition-transform duration-300 ${activeMenu === cat.key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* BLACK DROPDOWN MENU */}
                {activeMenu && (
                    <div 
                        className="absolute top-full left-0 w-full bg-black z-[150] shadow-[0_40px_80px_rgba(0,0,0,0.8)] border-t border-white/5 animate-fade-in-menu py-12"
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
                            <div className="space-y-4">
                                <h4 className="text-[#fbc5fa] text-[12px] font-black uppercase tracking-[0.4em] mb-6">Novedades Campaña 1</h4>
                                <ul className="space-y-3 text-[10px] uppercase font-bold tracking-[0.3em] text-white/50">
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('products', activeMenu)}>Ver Colección Completa</li>
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ofertas')}>Mejores Ofertas</li>
                                    <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ia')}>Asistente IA VIP</li>
                                </ul>
                            </div>
                            
                            <div className="hidden md:flex flex-col items-center justify-center border-x border-white/5 px-8">
                                <p className="text-[11px] font-medium italic text-white/40 leading-relaxed mb-6">
                                    "La belleza sueca se encuentra con la elegancia italiana. Productos biotecnológicos de alta gama directamente en tu hogar."
                                </p>
                                <div className="w-10 h-px bg-[#fbc5fa]"></div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[#fbc5fa] text-[12px] font-black uppercase tracking-[0.4em] mb-6">Vella Premium</h4>
                                <button 
                                    onClick={() => onNavigate('catalog')} 
                                    className="bg-white text-black text-[9px] font-black uppercase tracking-[0.5em] px-8 py-4 hover:bg-[#fbc5fa] transition-all w-full max-w-xs mx-auto"
                                >
                                    Catálogo Interactivo
                                </button>
                                <p className="text-[8px] text-white/20 uppercase tracking-widest mt-4">Swedish Beauty Excellence Since 1967</p>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <style>{`
                @keyframes fade-in-menu {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-menu {
                    animation: fade-in-menu 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
