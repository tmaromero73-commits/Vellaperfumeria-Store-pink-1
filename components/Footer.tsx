
import React from 'react';
import type { View } from './types';

// Footer component providing global site navigation, category quick links, and brand legal info
const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-black text-white py-24 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <button onClick={() => onNavigate('home')} className="flex flex-col items-center mb-16 group">
                    <img 
                        src="https://raw.githubusercontent.com/vella-perfumeria/assets/main/logo_vp_v1.png" 
                        alt="Logo Footer VP" 
                        className="h-24 object-contain mb-6 brightness-[2.0] grayscale contrast-[1.2] transition-all group-hover:brightness-[2.5]"
                        style={{ filter: 'grayscale(1) invert(1) brightness(2)', background: 'transparent' }}
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
                            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Inicio</button></li>
                            <li><button onClick={() => onNavigate('products', 'all')} className="hover:text-white transition-colors">Tienda</button></li>
                            <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Catálogo Digital</button></li>
                            <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Blog de Belleza</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Categorías</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-colors">Fragancias</button></li>
                            <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Cuidado Facial</button></li>
                            <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-white transition-colors">Maquillaje</button></li>
                            <li><button onClick={() => onNavigate('products', 'wellness')} className="hover:text-white transition-colors">Bienestar</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Asistencia</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-colors">Beauty Concierge IA</button></li>
                            <li><button onClick={() => onNavigate('ofertas')} className="hover:text-white transition-colors">Ofertas VIP</button></li>
                            <li><a href="https://wa.me/34661202616" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Atención al Cliente</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa] mb-8">Legal</h3>
                        <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            <li className="hover:text-white transition-colors cursor-pointer">Aviso Legal</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Gestión de Cookies</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-16 border-t border-white/5 w-full text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.6em] text-white/20">
                        &copy; 2026 VELLA PERFUMERIA • EXCELENCIA SUECA DESDE 1967
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
