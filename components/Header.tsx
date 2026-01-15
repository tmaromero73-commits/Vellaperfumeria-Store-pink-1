
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

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const MenuLink: React.FC<{ onClick?: () => void, children: React.ReactNode, className?: string }> = ({ onClick, children, className = "" }) => (
    <button onClick={onClick} className={`text-[11px] font-bold text-white hover:text-[#fbc5fa] transition-colors duration-200 uppercase tracking-[0.2em] h-full px-6 flex items-center gap-1.5 ${className}`}>
        {children}
    </button>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currency, onCurrencyChange, cartCount, onCartClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex flex-col w-full shadow-lg">
            {/* Promo Bar - Light Orchid Pink (#fbc5fa) */}
            <div className="bg-[#fbc5fa] py-2 text-black text-[9px] font-bold text-center uppercase tracking-[0.35em] w-full border-b border-white/20">
                OBSEQUIO DE LA CASA EN PEDIDOS WHATSAPP | ENVÍO GRATIS +35€
            </div>

            {/* Main Branding - White */}
            <div className="bg-white py-4 border-b border-gray-100">
                <div className="container mx-auto px-4 flex justify-between items-center relative">
                    <div className="flex-1 md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-black"><MenuIcon /></button>
                    </div>
                    
                    <div className="flex-shrink-0 mx-auto">
                        <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
                            <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vellaperfumeria" className="h-16 md:h-20" />
                        </button>
                    </div>

                    <div className="flex-1 flex justify-end items-center gap-4">
                        <button onClick={onCartClick} className="relative p-2 text-black hover:text-[#fbc5fa] transition-colors">
                            <CartIcon />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Black Nav Bar - SLIM & FULL WIDTH */}
            <div className="hidden md:block bg-black w-full relative">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-center items-center h-11">
                        <MenuLink onClick={() => onNavigate('home')}>Inicio</MenuLink>
                        
                        <div className="group h-full">
                            <MenuLink className="cursor-default">Tienda <ChevronDownIcon /></MenuLink>
                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-0 w-full bg-black text-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-12 grid grid-cols-4 gap-12 border-t border-gray-800 z-50">
                                <div className="space-y-6">
                                    <h4 className="font-bold text-[12px] uppercase tracking-widest text-[#fbc5fa] border-b border-gray-800 pb-3">Perfumería Luxe</h4>
                                    <ul className="text-[10px] space-y-3 text-gray-400">
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-colors">Fragancias Europeas</button></li>
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-colors">Cofres de Regalo</button></li>
                                        <li><button onClick={() => onNavigate('products', 'personal-care')} className="hover:text-white transition-colors">Cremas Perfumadas</button></li>
                                        <li><button onClick={() => onNavigate('products', 'personal-care')} className="hover:text-white transition-colors">Desodorantes de Marca</button></li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="font-bold text-[12px] uppercase tracking-widest text-[#fbc5fa] border-b border-gray-800 pb-3">Campaña 1 - 2026</h4>
                                    <ul className="text-[10px] space-y-3 text-gray-400">
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-white transition-colors">Novedades Maquillaje</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Novage+ Pro-Beauty</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Cremas Universales</button></li>
                                    </ul>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 gap-8">
                                    <div className="relative overflow-hidden rounded-xl group/img cursor-pointer bg-gray-900 border border-gray-800" onClick={() => onNavigate('catalog')}>
                                        <img src="https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg" className="w-full h-44 object-cover opacity-60 group-hover/img:scale-105 transition-transform" alt="Catálogo" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] border border-white/40 px-5 py-2 bg-black/50">Catálogo Digital 2026</span>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl flex flex-col justify-center border border-gray-800 relative overflow-hidden">
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#fbc5fa]/10 rounded-full blur-2xl"></div>
                                        <h5 className="font-bold text-[11px] uppercase text-[#fbc5fa] mb-3 tracking-widest leading-tight">Virtual Studio IA</h5>
                                        <p className="text-[10px] text-gray-500 leading-relaxed mb-4">Pruébate los tonos 2026 en tiempo real con nuestra cámara.</p>
                                        <button onClick={() => onNavigate('ia')} className="text-[11px] font-black underline text-white hover:text-[#fbc5fa] transition-colors">PROBAR APLICACIÓN</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MenuLink onClick={() => onNavigate('catalog')}>Catálogo</MenuLink>
                        <MenuLink onClick={() => onNavigate('ofertas')}>Ofertas</MenuLink>
                        <MenuLink onClick={() => onNavigate('ia')} className="bg-[#00a45d] text-white px-6 !h-8 py-0 my-auto rounded-full hover:bg-white hover:text-black">Cámara IA</MenuLink>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black w-full border-t border-gray-800 p-8 flex flex-col gap-8 animate-fade-in text-white z-50">
                    <button onClick={() => {onNavigate('home'); setIsMobileMenuOpen(false)}} className="text-[12px] font-bold uppercase tracking-[0.2em] text-left">Inicio</button>
                    <button onClick={() => {onNavigate('catalog'); setIsMobileMenuOpen(false)}} className="text-[12px] font-bold uppercase tracking-[0.2em] text-left">Catálogo 2026</button>
                    <button onClick={() => {onNavigate('ofertas'); setIsMobileMenuOpen(false)}} className="text-[12px] font-bold uppercase tracking-[0.2em] text-left text-[#fbc5fa]">Ofertas Especiales</button>
                    <button onClick={() => {onNavigate('ia'); setIsMobileMenuOpen(false)}} className="text-[12px] font-bold uppercase tracking-[0.2em] text-left text-[#00a45d]">Probador IA</button>
                </div>
            )}
        </header>
    );
};

export default Header;
