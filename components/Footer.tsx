
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-[#000000] text-white py-20 md:py-32 border-t border-white/5 w-full">
            <div className="container mx-auto px-6 flex flex-col items-center">
                
                {/* Logo Section - Colores Originales sobre Fondo Negro */}
                <div className="flex flex-col items-center mb-20 w-full">
                    <button 
                        onClick={() => window.location.href = 'https://vellaperfumeria.com'} 
                        className="transition-transform hover:scale-105 flex justify-center w-full"
                    >
                        {/* Contenedor blanco sutil para asegurar que el logo sea visible con sus colores originales */}
                        <div className="bg-white/95 p-6 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(251,197,250,0.2)]">
                            <img 
                                src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                                alt="Vella Perfumería Boutique" 
                                className="h-20 md:h-32 w-auto object-contain block"
                                style={{ display: 'block' }}
                            />
                        </div>
                    </button>
                    <div className="w-24 h-[2px] bg-[#fbc5fa] mt-12 opacity-50"></div>
                </div>

                {/* Footer Navigation Menu */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-5xl text-center md:text-left border-t border-white/5 pt-16">
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic">Explorar Boutique</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><button onClick={() => window.location.href = 'https://vellaperfumeria.com'} className="hover:text-white transition-colors">VellaPerfumeria.com</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Catálogo Digital</button></li>
                            <li><button onClick={() => onNavigate('products', 'all')} className="hover:text-white transition-colors">Tienda Online</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic">Atención VIP</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">Beauty Concierge IA</button></li>
                            <li><button onClick={() => onNavigate('ofertas')} className="hover:text-white transition-colors">Ofertas Premium</button></li>
                            <li><a href="https://wa.me/34661202616" target="_blank" className="hover:text-white transition-colors">WhatsApp 661 202 616</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic">Legal e Info</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><a href="https://instagram.com/vellaperfumeria" target="_blank" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Nuestro Blog</button></li>
                            <li>Política de Privacidad</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 w-full text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.8em] text-white/20">
                        &copy; 2026 VELLA PERFUMERIA • LUXURY ORIFLAME BOUTIQUE
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
