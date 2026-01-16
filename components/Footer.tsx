
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-black border-t border-white/5 text-white py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center space-y-16">
                    {/* Logo Area */}
                    <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
                        <img 
                            src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                            alt="Vella Perfumería Logo Footer" 
                            className="h-20 object-contain mb-6 grayscale brightness-200 group-hover:grayscale-0 transition-all duration-700"
                        />
                        <h2 className="text-3xl font-serif font-black tracking-tighter text-white uppercase">VELLA PERFUMERIA</h2>
                        <div className="w-16 h-px bg-[#fbc5fa] mt-4"></div>
                    </button>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl">
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa]">Catálogo</h3>
                            <ul className="space-y-3 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                <li><button onClick={() => onNavigate('products', 'perfume')} className="hover:text-white transition-all">Perfumería</button></li>
                                <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-white transition-all">Maquillaje</button></li>
                                <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-all">Cuidado Facial</button></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa]">Servicio VIP</h3>
                            <ul className="space-y-3 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                <li><button onClick={() => onNavigate('ia')} className="hover:text-white transition-all">Concierge AI</button></li>
                                <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-all">E-Catalog</button></li>
                                <li><button className="hover:text-white transition-all">Seguimiento</button></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa]">Legado</h3>
                            <ul className="space-y-3 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                <li><button className="hover:text-white transition-all">Boutique</button></li>
                                <li><button className="hover:text-white transition-all">Nuestra Ciencia</button></li>
                                <li><button className="hover:text-white transition-all">Sostenibilidad</button></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#fbc5fa]">Social</h3>
                            <ul className="space-y-3 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                <li><a href="https://instagram.com/bellaperfumeria" target="_blank" className="hover:text-white transition-all">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-all">Facebook</a></li>
                                <li><a href="#" className="hover:text-white transition-all">TikTok</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Line */}
                    <div className="pt-12 border-t border-white/5 w-full text-center">
                        <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black">
                            &copy; {new Date().getFullYear()} VELLA PERFUMERIA • SWEDISH BEAUTY EXCELLENCE • ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
