
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-black text-white py-24 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <button onClick={() => onNavigate('home')} className="flex flex-col items-center mb-16 group">
                    <img 
                        src="https://raw.githubusercontent.com/vella-perfumeria/assets/main/logo_vp_v1.png" 
                        alt="Logo Footer VP" 
                        className="h-24 object-contain mb-6 brightness-[2.0] grayscale contrast-[1.2] transition-all group-hover:brightness-[2.5]"
                        onError={(e) => {
                            e.currentTarget.src = "https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png";
                        }}
                    />
                    <h2 className="text-3xl font-serif font-black tracking-tighter text-white uppercase">VELLA PERFUMERIA</h2>
                    <div className="w-16 h-px bg-[#fbc5fa] mt-4 opacity-50"></div>
                </button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-5xl text-left border-t border-white/5 pt-16">
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Navegación</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Tratamientos</button></li>
                            <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-colors">Perfumes</button></li>
                            <li><button onClick={() => onNavigate('products', 'wellness')} className="hover:text-white transition-colors">Wellness</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Asistencia</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">Concierge IA</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Catálogo Digital</button></li>
                            <li><button className="hover:text-white transition-colors">Preguntas Frecuentes</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Contacto</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            <li><span className="text-white/60">+34 661 202 616</span></li>
                            <li><a href="https://instagram.com/bellaperfumeria" target="_blank" className="hover:text-white transition-colors">Instagram Oficial</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Boutique</h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 leading-loose">
                            Sede Central Europea<br/>Excelencia Sueca en Belleza
                        </p>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 w-full text-center">
                    <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black">
                        &copy; {new Date().getFullYear()} VELLA PERFUMERIA • LUXURY SWEDISH EXCELLENCE • ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
