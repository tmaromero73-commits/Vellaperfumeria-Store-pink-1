
import React, { useState } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CartIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const MenuLink: React.FC<{ onClick?: () => void, children: React.ReactNode, className?: string }> = ({ onClick, children, className = "" }) => (
    <button 
        onClick={onClick} 
        className={`text-[10px] md:text-[11px] font-black text-white hover:text-[#fbc5fa] transition-all duration-300 uppercase tracking-[0.25em] h-full px-6 md:px-8 flex items-center whitespace-nowrap ${className}`}
    >
        {children}
    </button>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleHomeClick = () => {
        window.location.href = 'https://vellaperfumeria.com';
    };

    return (
        <header className="sticky top-0 z-[100] w-full flex flex-col shadow-md bg-white">
            {/* Promo Bar */}
            <div className="bg-[#fbc5fa] py-2 text-black text-[8px] font-black text-center uppercase tracking-[0.4em] w-full">
                INSTAGRAM: @VELLAPERFUMERIA | WHATSAPP: 661 202 616 | REGALO DE CORTESÍA INCLUIDO
            </div>

            {/* Logo Section - Fondo Blanco para Respetar Colores Originales */}
            <div className="w-full bg-white h-24 md:h-36 flex items-center justify-between px-6 md:px-12 relative border-b border-gray-50">
                <div className="flex-1 md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black p-2">
                        <MenuIcon />
                    </button>
                </div>

                {/* Logo Centrado */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button 
                        onClick={handleHomeClick} 
                        className="pointer-events-auto hover:opacity-80 transition-opacity h-[70%] md:h-[80%]"
                    >
                        <img 
                            src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                            alt="Vella Perfumería Boutique" 
                            className="h-full w-auto object-contain"
                        />
                    </button>
                </div>

                <div className="flex-1 flex justify-end items-center gap-4">
                     <button onClick={onCartClick} className="relative p-3 bg-black text-white rounded-full hover:bg-[#fbc5fa] hover:text-black transition-all shadow-xl group">
                        <CartIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#fbc5fa] text-black text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Menu Bar - Fondo Negro, Ancho Completo */}
            <div className="w-full bg-black h-12 md:h-14 overflow-x-auto no-scrollbar border-b border-white/10">
                <div className="flex justify-center min-w-max h-full mx-auto">
                    <nav className="flex items-center h-full">
                        <MenuLink onClick={handleHomeClick}>Inicio Boutique</MenuLink>
                        <MenuLink onClick={() => onNavigate('products', 'perfume')}>Perfumería</MenuLink>
                        <MenuLink onClick={() => onNavigate('products', 'skincare')}>Tratamiento Facial</MenuLink>
                        <MenuLink onClick={() => onNavigate('products', 'makeup')}>Maquillaje Pro</MenuLink>
                        <MenuLink onClick={() => onNavigate('catalog')}>Catálogo Digital</MenuLink>
                        <MenuLink onClick={() => onNavigate('ofertas')}>Ofertas VIP</MenuLink>
                        <MenuLink onClick={() => onNavigate('ia')} className="text-[#fbc5fa]">Beauty Concierge IA</MenuLink>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-[200] p-10 flex flex-col gap-8 animate-fade-in overflow-y-auto">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="self-end text-white p-2">
                         <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button onClick={handleHomeClick} className="text-white text-3xl font-black uppercase tracking-widest text-left border-b border-white/10 pb-6">Inicio</button>
                    <button onClick={() => {onNavigate('catalog'); setIsMobileMenuOpen(false)}} className="text-white text-3xl font-black uppercase tracking-widest text-left border-b border-white/10 pb-6">Catálogo 2026</button>
                    <button onClick={() => {onNavigate('products', 'all'); setIsMobileMenuOpen(false)}} className="text-white text-3xl font-black uppercase tracking-widest text-left border-b border-white/10 pb-6">Tienda Luxe</button>
                    <button onClick={() => {onNavigate('ia'); setIsMobileMenuOpen(false)}} className="text-[#fbc5fa] text-3xl font-black uppercase tracking-widest text-left">Asesor IA</button>
                </div>
            )}
        </header>
    );
};

export default Header;
