
import React from 'react';
import type { View } from './types';

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

interface BottomNavBarProps {
    onNavigate: (view: View, payload?: any) => void;
    currentView: View;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, currentView }) => {
    // Logotipo unificado (Emblema dorado)
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-[200] h-16">
            <nav className="flex justify-around items-center h-full px-4">
                {/* Botón Inicio Externo */}
                <button
                    onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                    className="flex flex-col items-center justify-center h-full text-white/50 hover:text-[#fbc5fa] transition-colors"
                >
                    <HomeIcon />
                    <span className="text-[7px] font-black uppercase tracking-widest mt-0.5">Inicio</span>
                </button>

                {/* Logo Central Boutique - Siempre Visible */}
                <button
                    onClick={() => onNavigate('home')}
                    className="flex flex-col items-center justify-center -mt-6"
                >
                    <div className="bg-white p-1 rounded-full shadow-2xl border-4 border-black ring-2 ring-white/10">
                        <img 
                            src={logoUrl} 
                            className="h-10 w-10 object-contain" 
                            alt="Logo Vella"
                        />
                    </div>
                </button>

                {/* Botón Catálogo */}
                <button
                    onClick={() => onNavigate('catalog')}
                    className={`flex flex-col items-center justify-center h-full transition-colors ${currentView === 'catalog' ? 'text-[#fbc5fa]' : 'text-white/50'}`}
                >
                    <BookIcon />
                    <span className="text-[7px] font-black uppercase tracking-widest mt-0.5">Catálogo</span>
                </button>
            </nav>
        </div>
    );
};

export default BottomNavBar;
