
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    // Logotipo del emblema circular unificado
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";

    return (
        <footer className="bg-black text-white py-24 border-t border-white/5 w-full">
            <div className="container mx-auto px-6 flex flex-col items-center">
                
                <div className="flex flex-col items-center mb-16 w-full">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="transition-all hover:scale-110 duration-500 flex items-center justify-center"
                    >
                        <img 
                            src={logoUrl} 
                            alt="Vella Perfumería Boutique" 
                            className="h-24 md:h-32 w-auto object-contain brightness-0 invert"
                        />
                    </button>
                    <div className="w-24 h-1 bg-[#fbc5fa] mt-10 opacity-30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl text-center pt-10">
                    <div>
                        <h3 className="text-[13px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8 italic">Boutique</h3>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Inicio</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Catálogo Interactivo</button></li>
                            <li><button onClick={() => onNavigate('ofertas')} className="hover:text-white transition-colors">Ofertas VIP</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[13px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8 italic">Servicio VIP</h3>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold">
                            <li><a href="https://wa.me/34661202616" target="_blank" className="hover:text-white transition-colors">Atención Concierge</a></li>
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">Asistente IA</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[13px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8 italic">Social</h3>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold">
                            <li><a href="https://instagram.com/vellaperfumeria" target="_blank" className="hover:text-white transition-colors">@VELLAPERFUMERIA</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/10 w-full text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30">
                        &copy; 2026 VELLA PERFUMERIA • LUXURY BEAUTY BOUTIQUE • TODOS LOS DERECHOS RESERVADOS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
