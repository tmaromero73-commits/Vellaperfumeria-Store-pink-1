
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    // Logotipo oficial vellaperfumeria.com
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";

    return (
        <footer className="bg-[#0a0a0a] text-white py-24 border-t border-white/5 w-full">
            <div className="container mx-auto px-6 flex flex-col items-center">
                
                <div className="flex flex-col items-center mb-16 w-full">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="transition-all hover:scale-110 duration-500 flex flex-col items-center justify-center group"
                    >
                        <img 
                            src={logoUrl} 
                            alt="Vella Perfumería Boutique" 
                            className="h-28 md:h-36 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <h2 className="text-white text-[12px] font-black uppercase tracking-[0.5em] mt-6 font-serif italic">Vella Perfumería</h2>
                        <p className="text-[#fbc5fa] text-[8px] font-bold uppercase tracking-[0.3em] mt-2">vellaperfumeria.com</p>
                    </button>
                    <div className="w-24 h-[1px] bg-[#fbc5fa] mt-12 opacity-30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl text-center pt-10">
                    <div>
                        <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8 italic">Explorar</h3>
                        <ul className="space-y-4 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Boutique</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Catálogo Digital</button></li>
                            <li><button onClick={() => onNavigate('ofertas')} className="hover:text-white transition-colors">Privé Ofertas</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8 italic">Atención</h3>
                        <ul className="space-y-4 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><a href="https://wa.me/34661202616" target="_blank" className="hover:text-white transition-colors">WhatsApp VIP</a></li>
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">Beauty Concierge IA</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8 italic">Comunidad</h3>
                        <ul className="space-y-4 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li>
                                <a href="https://instagram.com/beautieshopvella" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                    Instagram
                                </a>
                            </li>
                            <li><a href="https://vellaperfumeria.com" target="_blank" className="hover:text-white transition-colors">Sitio Oficial</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/5 w-full text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.6em] text-white/10">
                        &copy; 2026 VELLA PERFUMERIA • LUXURY BEAUTY BOUTIQUE • vellaperfumeria.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
