
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-[#050505] text-white py-24 border-t border-white/10 w-full">
            <div className="container mx-auto px-6 flex flex-col items-center">
                {/* Botón Logo Boutique - Original Colors - Visible */}
                <button 
                    onClick={() => window.open('https://vellaperfumeria.com', '_blank')} 
                    className="flex flex-col items-center mb-16 group"
                >
                    <img 
                        src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                        alt="Logo Vella Perfumería Boutique" 
                        className="h-28 w-auto object-contain transition-transform group-hover:scale-105 brightness-110"
                    />
                    <div className="w-20 h-px bg-[#fbc5fa] mt-6 opacity-50"></div>
                </button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-5xl text-left border-t border-white/5 pt-16">
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic underline">Navegación Luxe</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><button onClick={() => window.location.href = 'https://vellaperfumeria.com'} className="hover:text-white transition-colors">VellaPerfumeria.com</button></li>
                            <li><button onClick={() => onNavigate('products', 'all')} className="hover:text-white transition-colors">Catálogo Maestro</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Journal Interactivo</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic underline">Boutique VIP</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">IA Beauty Concierge</button></li>
                            <li><button onClick={() => onNavigate('ofertas')} className="hover:text-white transition-colors">Ofertas Premium</button></li>
                            <li><a href="https://wa.me/34661202616" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Concierge</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic underline">Información</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li>Aviso Legal Boutique</li>
                            <li>Privacidad de Datos</li>
                            <li>Protocolo de Envío Premium</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#fbc5fa] mb-8 italic underline">Mundo Vella</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                            <li><a href="https://instagram.com/vellaperfumeria" className="hover:text-white transition-colors">Instagram Oficial</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Comunidad VIP</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-16 border-t border-white/5 w-full text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.8em] text-white/20">
                        &copy; 2026 VELLA PERFUMERIA • LUXURY ORIFLAME BOUTIQUE
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
