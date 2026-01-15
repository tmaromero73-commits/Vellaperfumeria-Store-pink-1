import React from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A19 19 0 013 4a1 1 0 011-1h3.43a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1.1z" />
    </svg>
);

const Header: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    cartCount: number;
    onCartClick: () => void;
}> = ({ onNavigate, cartCount, onCartClick }) => {
    return (
        <header className="w-full z-[100] flex flex-col relative bg-white">
            {/* 1. Barra superior informativa (Rosa) */}
            <div className="bg-[#fbc5fa] py-1.5 text-black w-full border-b border-black/5 z-[110]">
                <div className="container mx-auto px-4 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.15em]">
                    <a href="https://instagram.com/vellaperfumeria" target="_blank" className="flex items-center gap-2">
                        <InstagramIcon />
                        <span className="hidden xs:inline">@vellaperfumeria</span>
                    </a>
                    <span className="text-center px-2">Envío Gratis +35€ • 690 Productos</span>
                    <a href="tel:+34661202616" className="flex items-center gap-2">
                        <PhoneIcon />
                        <span className="hidden xs:inline">+34 661 202 616</span>
                    </a>
                </div>
            </div>

            {/* 2. Fila del Logo (Blanco) */}
            <div className="py-4 md:py-6 w-full bg-white relative z-[105]">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-all active:scale-95">
                        <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vellaperfumeria" className="h-12 md:h-16 lg:h-20" />
                    </button>
                    
                    <div className="flex items-center gap-4 md:gap-8">
                        <button 
                            onClick={() => onNavigate('ia')} 
                            className="hidden sm:flex bg-black text-white px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#fbc5fa] hover:text-black transition-all"
                        >
                             IA Beauty
                        </button>
                        <button onClick={onCartClick} className="relative p-2 text-black hover:text-[#fbc5fa] transition-colors">
                            <svg className="h-7 w-7 md:h-9 md:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-black w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. MENÚ NEGRO ANCHO DE ANCHURA COMPLETA (Escritorio y Móvil) */}
            <nav className="bg-black w-full h-12 md:h-14 flex items-center justify-center relative z-[100] shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                <div className="w-full h-full container mx-auto px-4 md:px-6 overflow-x-auto no-scrollbar scroll-smooth">
                    <div className="flex items-center justify-start md:justify-center gap-6 md:gap-14 h-full whitespace-nowrap min-w-max md:min-w-0">
                        
                        {/* CATEGORÍAS */}
                        <button onClick={() => onNavigate('products', 'skincare')} className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#fbc5fa] h-full transition-colors flex items-center border-b-2 border-transparent hover:border-[#fbc5fa]">
                            Cuidado Facial
                        </button>
                        
                        <button onClick={() => onNavigate('products', 'perfume')} className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#fbc5fa] h-full transition-colors flex items-center border-b-2 border-transparent hover:border-[#fbc5fa]">
                            Fragancias
                        </button>
                        
                        <button onClick={() => onNavigate('products', 'makeup')} className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#fbc5fa] h-full transition-colors flex items-center border-b-2 border-transparent hover:border-[#fbc5fa]">
                            Maquillaje
                        </button>
                        
                        <button onClick={() => onNavigate('products', 'hair')} className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#fbc5fa] h-full transition-colors flex items-center border-b-2 border-transparent hover:border-[#fbc5fa]">
                            Cabello
                        </button>
                        
                        <button onClick={() => onNavigate('products', 'personal-care')} className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#fbc5fa] h-full transition-colors flex items-center border-b-2 border-transparent hover:border-[#fbc5fa]">
                            Cuerpo
                        </button>
                        
                        <button onClick={() => onNavigate('catalog')} className="text-[#fbc5fa] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] hover:text-white h-full transition-colors flex items-center border-b-2 border-transparent hover:border-[#fbc5fa]">
                            Catálogo
                        </button>
                    </div>
                </div>
                
                {/* Estilo para ocultar scrollbar */}
                <style>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
            </nav>
        </header>
    );
};

export default Header;