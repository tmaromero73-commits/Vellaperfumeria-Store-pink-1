
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
    <button onClick={onClick} className={`text-[10px] font-black text-white hover:text-[#fbc5fa] transition-all duration-300 uppercase tracking-[0.25em] h-full px-8 flex items-center gap-2 ${className}`}>
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
        <header className="sticky top-0 z-[100] w-full flex flex-col bg-[#050505] shadow-2xl">
            {/* Promo Bar - Full Width Orchid Pink */}
            <div className="bg-[#fbc5fa] py-2 text-black text-[8px] font-black text-center uppercase tracking-[0.4em] w-full border-b border-black/5">
                INSTAGRAM: @VELLAPERFUMERIA | WHATSAPP: 661 202 616 | ENVÍO GRATIS +35€ | REGALO DE CORTESÍA INCLUIDO
            </div>

            {/* Logo Area - Full Width Cinema Black */}
            <div className="py-6 h-28 relative flex items-center border-b border-white/5 w-full bg-[#050505]">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <button onClick={handleHomeClick} className="hover:opacity-90 transition-opacity">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Vella Perfumería Boutique" 
                            className="h-16 md:h-24 w-auto object-contain brightness-110" 
                        />
                    </button>
                </div>

                <div className="w-full px-8 flex justify-between items-center h-full">
                    <div className="flex-1 md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                            <MenuIcon />
                        </button>
                    </div>
                    
                    <div className="flex-1 md:block hidden"></div>

                    <div className="flex-1 flex justify-end items-center gap-6">
                        <button onClick={onCartClick} className="relative p-3 bg-white text-black rounded-full hover:bg-[#fbc5fa] transition-all shadow-xl group">
                            <CartIcon />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#fbc5fa] text-black text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-black">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Nav Bar - Cinema Black Full Width Stretch */}
            <div className="hidden md:block w-full bg-black h-12 border-b border-white/10 shadow-inner overflow-x-auto no-scrollbar">
                <div className="w-full h-full flex justify-center">
                    <nav className="flex justify-center items-center h-full whitespace-nowrap">
                        <MenuLink onClick={handleHomeClick}>Inicio Boutique</MenuLink>
                        
                        <div className="group h-full relative">
                            <MenuLink className="cursor-default">Selección Luxe <ChevronDownIcon /></MenuLink>
                            {/* Full width dropdown stretch across the screen */}
                            <div className="fixed top-[152px] left-0 w-full bg-[#0a0a0a] text-white shadow-[0_50px_100px_rgba(0,0,0,0.95)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-16 grid grid-cols-4 gap-12 border-t border-white/10 z-[150]">
                                <div className="space-y-8">
                                    <h4 className="font-black text-[11px] uppercase tracking-widest text-[#fbc5fa] border-b border-white/10 pb-4 italic">Alta Perfumería</h4>
                                    <ul className="text-[10px] space-y-4 text-gray-400 font-bold uppercase tracking-widest">
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-colors">Para Ella: Fragancias</button></li>
                                        <li><button onClick={() => onNavigate('products', 'men')} className="hover:text-white transition-colors">Para Él: Selección VIP</button></li>
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-colors">Brumas de Autor</button></li>
                                    </ul>
                                </div>
                                <div className="space-y-8">
                                    <h4 className="font-black text-[11px] uppercase tracking-widest text-[#fbc5fa] border-b border-white/10 pb-4 italic">Skincare Pro</h4>
                                    <ul className="text-[10px] space-y-4 text-gray-400 font-bold uppercase tracking-widest">
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">NovAge+ Science</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Diamond Cellular</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Royal Velvet</button></li>
                                    </ul>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 gap-10">
                                    <div className="relative overflow-hidden rounded-2xl group/img cursor-pointer bg-[#050505] border border-white/10" onClick={() => onNavigate('catalog')}>
                                        <img src="https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg" className="w-full h-48 object-cover opacity-50 group-hover/img:scale-110 transition-transform duration-1000" alt="Catálogo" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
                                            <span className="text-[9px] font-black uppercase tracking-[0.5em] border-2 border-[#fbc5fa] px-6 py-3 bg-black/60 text-[#fbc5fa]">Catálogo Interactivo 2026</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#050505] p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center">
                                        <h5 className="font-black text-[11px] uppercase text-[#fbc5fa] mb-4 tracking-widest italic">Concierge VIP</h5>
                                        <p className="text-[10px] text-gray-500 leading-relaxed mb-6 font-bold uppercase tracking-tighter">Asesoramiento avanzado con nuestra IA de Belleza.</p>
                                        <button onClick={() => onNavigate('ia')} className="text-[10px] font-black underline text-white hover:text-[#fbc5fa] transition-colors uppercase tracking-[0.3em]">IA BEAUTY ASSIST</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MenuLink onClick={() => onNavigate('catalog')}>Journal Digital</MenuLink>
                        <MenuLink onClick={() => onNavigate('ofertas')}>Ofertas VIP</MenuLink>
                        <MenuLink onClick={() => onNavigate('ia')} className="bg-[#00a45d] text-white px-8 !h-7 py-0 my-auto rounded-full hover:bg-white hover:text-black transition-all ml-6">AI Concierge</MenuLink>
                    </nav>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-[200] p-10 flex flex-col gap-8 animate-fade-in overflow-y-auto">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="self-end text-white p-2">
                         <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button onClick={handleHomeClick} className="text-white text-3xl font-black uppercase tracking-widest text-left border-b border-white/10 pb-6">Inicio Boutique</button>
                    <button onClick={() => {onNavigate('catalog'); setIsMobileMenuOpen(false)}} className="text-white text-3xl font-black uppercase tracking-widest text-left border-b border-white/10 pb-6">Catálogo 2026</button>
                    <button onClick={() => {onNavigate('products', 'all'); setIsMobileMenuOpen(false)}} className="text-white text-3xl font-black uppercase tracking-widest text-left border-b border-white/10 pb-6">Tienda Luxe</button>
                    <button onClick={() => {onNavigate('ia'); setIsMobileMenuOpen(false)}} className="text-[#00a45d] text-3xl font-black uppercase tracking-widest text-left">IA Concierge</button>
                </div>
            )}
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
