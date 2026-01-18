
import React from 'react';
import type { View } from './types';

const HomeIcon = ({ isActive }: { isActive: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill={isActive ? "black" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

interface BottomNavBarProps {
    onNavigate: (view: View, payload?: any) => void;
    currentView: View;
    currentCategory: string;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, currentView }) => {
    
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] z-[200] h-24">
            <nav className="flex justify-around items-center h-full px-8">
                {/* Botón Inicio Boutique */}
                <button
                    onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                    className={`flex flex-col items-center justify-center h-full transition-all duration-300 text-white`}
                >
                    <HomeIcon isActive={true} />
                    <span className="text-[10px] font-black uppercase tracking-widest mt-1">Inicio</span>
                </button>

                {/* Botón Vella Perfumería (Central) */}
                <button
                    onClick={() => window.location.href = 'https://vellaperfumeria.com'}
                    className="flex flex-col items-center justify-center h-full group"
                >
                    <div className="bg-white p-3 rounded-full -mt-16 shadow-2xl border-4 border-black group-active:scale-95 transition-transform">
                        <img 
                            src="https://vellaperfumeria.com/wp-content/uploads/2024/06/vellaperfumeralogo.png" 
                            className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all" 
                            alt="Vella Perfumería"
                        />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest mt-2 text-[#fbc5fa]">Vella Perfumería</span>
                </button>

                {/* Tienda Link */}
                <button
                    onClick={() => onNavigate('products', 'all')}
                    className={`flex flex-col items-center justify-center h-full transition-all duration-300 ${
                        currentView === 'products' ? 'text-white' : 'text-gray-500'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-widest mt-1">Tienda Luxe</span>
                </button>
            </nav>
        </div>
    );
};

export default BottomNavBar;
