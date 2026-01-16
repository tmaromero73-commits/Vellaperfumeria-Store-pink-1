
import React from 'react';
import type { View } from './types';

const Footer: React.FC<{ onNavigate: (view: View, payload?: any) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-white border-t border-gray-100 text-black py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <h2 className="text-2xl font-serif font-black tracking-tighter">VELLA</h2>
                        <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                            Boutique exclusiva dedicada a la moda atemporal y la excelencia sartorial.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Colecciones</h3>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            <li><button onClick={() => onNavigate('products', 'men')} className="hover:text-black">Hombre</button></li>
                            <li><button onClick={() => onNavigate('products', 'women')} className="hover:text-black">Mujer</button></li>
                            <li><button onClick={() => onNavigate('products', 'tailoring')} className="hover:text-black">Sastrería</button></li>
                            <li><button onClick={() => onNavigate('products', 'accessories')} className="hover:text-black">Accesorios</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Información</h3>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            <li><button onClick={() => onNavigate('contact')} className="hover:text-black">Contacto</button></li>
                            <li><button className="hover:text-black">Sobre Vella</button></li>
                            <li><button className="hover:text-black">Guía de Tallas</button></li>
                            <li><button className="hover:text-black">Envíos</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Síguenos</h3>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            <li><a href="#" className="hover:text-black">Instagram</a></li>
                            <li><a href="#" className="hover:text-black">Pinterest</a></li>
                            <li><a href="#" className="hover:text-black">Journal</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-24 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-gray-300 uppercase tracking-[0.4em] font-bold">
                    <p>&copy; {new Date().getFullYear()} VELLA PREMIUM CLOTHING. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <button className="hover:text-black">Privacy Policy</button>
                        <button className="hover:text-black">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
