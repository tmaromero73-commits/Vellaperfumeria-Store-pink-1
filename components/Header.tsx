
import React from 'react';
import type { View } from './types.ts';

const Header: React.FC<{ onNavigate: (v: View, p?: any) => void; cartCount: number; onCartClick: () => void; }> = ({ onNavigate, cartCount, onCartClick }) => {
    // Logotipo oficial de vellaperfumeria.com
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png"; 

    const navItems = [
        { 
            label: 'BOUTIQUE', 
            view: 'home' as View,
            subCategories: [
                { title: 'Colecciones', items: ['Milk & Honey Gold', 'Giordani Gold', 'Novage+', 'Wellness by Oriflame'] },
                { title: 'Novedades', items: ['Lanzamientos Campaña 1', 'Ediciones Limitadas', 'Sets de Regalo'] },
                { title: 'Exclusivos', items: ['Fragancias de Autor', 'Tratamientos Premium', 'Accesorios de Lujo'] }
            ]
        },
        { 
            label: 'PERFUMERÍA', 
            view: 'products' as View, 
            payload: 'perfume',
            subCategories: [
                { title: 'Para Ella', items: ['Perfumes', 'Eau de Parfum', 'Brumas Corporales'] },
                { title: 'Para Él', items: ['Fragancias Intensas', 'Cuidado Post-Afeitado'] },
                { title: 'Notas', items: ['Florales', 'Amaderadas', 'Cítricas', 'Orientales'] }
            ]
        },
        { 
            label: 'FACIAL', 
            view: 'products' as View, 
            payload: 'skincare',
            subCategories: [
                { title: 'Por Necesidad', items: ['Antienvejecimiento', 'Hidratación Extrema', 'Luminosidad', 'Limpieza'] },
                { title: 'Sistemas Novage+', items: ['Lift & Firm', 'Wrinkle Smooth', 'Bright Intense', 'Renew'] },
                { title: 'Cuidado Específico', items: ['Contorno de Ojos', 'Serums Potenciadores', 'Mascarillas de Noche'] }
            ]
        },
        { 
            label: 'OFERTAS', 
            view: 'ofertas' as View,
            subCategories: [
                { title: 'Destacados', items: ['Promociones del Mes', 'Outlet Boutique', 'Últimas Unidades'] },
                { title: 'Servicios', items: ['Envío de Cortesia', 'Envoltorio Premium', 'Asesoría VIP'] }
            ]
        }
    ];

    return (
        <header className="sticky top-0 z-[150] w-full flex flex-col">
            {/* TOP BAR PROMOCIONAL - ROSA ORQUÍDEA CLARO */}
            <div className="bg-[#fbc5fa] py-1.5 px-4 w-full flex items-center justify-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-black">
                <span className="animate-pulse">ENVÍO DE CORTESÍA • WHATSAPP VIP: 661 202 616 • ATENCIÓN PERSONALIZADA</span>
            </div>

            {/* BARRA DE NAVEGACIÓN NEGRA - FULL WIDTH */}
            <nav className="w-full bg-black h-20 md:h-24 px-6 md:px-16 flex items-center justify-between relative border-b border-white/5">
                
                {/* LOGOTIPO IZQUIERDA */}
                <div className="flex items-center h-full flex-1">
                    <button onClick={() => onNavigate('home')} className="group flex items-center gap-5 outline-none">
                        <img 
                            src={logoUrl} 
                            className="h-10 md:h-14 w-auto object-contain brightness-0 invert transition-all duration-700 group-hover:scale-105" 
                            alt="Vella Boutique" 
                        />
                        <div className="hidden lg:flex flex-col text-left border-l border-white/10 pl-5 py-1">
                            <h1 className="text-white text-[12px] font-black tracking-[0.5em] uppercase leading-none font-serif italic">Vella</h1>
                            <p className="text-[#fbc5fa] text-[7px] font-bold tracking-[0.3em] uppercase mt-1">Perfumería Boutique</p>
                        </div>
                    </button>
                </div>

                {/* LINKS CENTRALES */}
                <div className="hidden md:flex items-center h-full gap-4 lg:gap-10">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="group h-full flex items-center">
                            <button 
                                onClick={() => onNavigate(item.view, item.payload)}
                                className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 hover:text-[#fbc5fa] transition-all h-full relative"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#fbc5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                            </button>

                            {/* MEGA MENÚ DESPLEGABLE - FONDO NEGRO FULL WIDTH */}
                            <div className="mega-menu pt-10 pb-16 px-10 md:px-20 z-[160] bg-black border-t border-white/5 shadow-[0_60px_100px_rgba(0,0,0,0.8)]">
                                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
                                    {/* Info Panel */}
                                    <div className="hidden md:block border-r border-white/5 pr-12">
                                        <h3 className="text-[#fbc5fa] text-4xl font-serif font-black italic uppercase tracking-tighter mb-6 leading-none">
                                            {item.label}
                                        </h3>
                                        <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold leading-relaxed mb-8">
                                            Explora la excelencia en belleza. Selección exclusiva para clientes VIP de vellaperfumeria.com
                                        </p>
                                        <div className="h-[1px] w-full bg-[#fbc5fa]/20 mb-8"></div>
                                        <button className="text-[#fbc5fa] text-[9px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors">Ver Todo →</button>
                                    </div>

                                    {/* Dinamyc Subcategories from navItems */}
                                    {item.subCategories.map((sub, sIdx) => (
                                        <div key={sIdx} className="space-y-6">
                                            <span className="text-[#fbc5fa] text-[9px] font-black tracking-[0.4em] uppercase block mb-4 border-b border-[#fbc5fa]/10 pb-2">{sub.title}</span>
                                            <div className="flex flex-col gap-4">
                                                {sub.items.map((subItem, iIdx) => (
                                                    <button 
                                                        key={iIdx} 
                                                        onClick={() => onNavigate(item.view, subItem.toLowerCase())}
                                                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white hover:translate-x-2 transition-all block text-left"
                                                    >
                                                        {subItem}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTONES DERECHA */}
                <div className="flex items-center justify-end gap-6 md:gap-10 flex-1">
                    <button onClick={() => onNavigate('ia')} className="hidden sm:flex items-center gap-3 bg-white/5 hover:bg-[#fbc5fa] hover:text-black text-white px-6 py-2.5 border border-white/10 transition-all group">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">IA Concierge</span>
                    </button>
                    
                    <button onClick={onCartClick} className="relative p-3 bg-white text-black hover:bg-[#fbc5fa] transition-all transform active:scale-95 shadow-xl">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#fbc5fa] text-black text-[9px] font-black w-5 h-5 flex items-center justify-center border-2 border-black">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
