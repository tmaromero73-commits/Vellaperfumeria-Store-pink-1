
import React from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import HeroBanner from './HeroCarousel';
import type { Currency } from './currency';

const ProductList: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}> = ({ onNavigate, onProductSelect, onAddToCart, onQuickAddToCart, currency, onQuickView }) => {
    
    // Feature sections based on 600+ catalog
    const facialFeatured = allProducts.filter(p => p.category === 'skincare').slice(0, 8);
    const perfumesFeatured = allProducts.filter(p => p.category === 'perfume').slice(0, 8);
    const makeupFeatured = allProducts.filter(p => p.category === 'makeup').slice(0, 8);
    const wellnessFeatured = allProducts.filter(p => p.category === 'wellness').slice(0, 4);

    return (
        <div className="space-y-32 pb-40 bg-white">
            
            {/* Main Hero */}
            <HeroBanner onNavigate={onNavigate} />

            {/* EXCLUSIVE SWEDISH PROMO */}
            <div className="container mx-auto px-6">
                <div className="relative bg-[#001a33] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] flex flex-col md:flex-row border border-white/5 group">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover:opacity-[0.08] transition-opacity" style={{
                        backgroundImage: 'radial-gradient(circle, #fbc5fa 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>

                    <div className="md:w-1/2 relative min-h-[500px] flex items-center justify-center p-16 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1556228852-6d45a7d8a341?auto=format&fit=crop&w=1000&q=80" 
                            alt="Oriflame Premium" 
                            className="w-full h-full object-cover rounded-[3rem] shadow-2xl z-10 transition-transform duration-[4000ms] group-hover:scale-110" 
                        />
                    </div>

                    <div className="md:w-1/2 p-16 md:p-24 flex flex-col justify-center relative z-10 text-white">
                        <span className="text-[#fbc5fa] text-[11px] font-black uppercase tracking-[0.5em] mb-8">Swedish Excellence</span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9] text-white">
                            ENVÍO PREMIUM <br/> <span className="text-[#fbc5fa]">CORTESÍA</span> <br/> DESDE 35€
                        </h2>
                        <p className="text-lg lg:text-xl text-white/70 mb-14 font-medium leading-relaxed max-w-lg">
                            Descubre la calidad europea en cada frasco. Ingredientes naturales recolectados de forma sostenible en Suecia.
                        </p>
                        <div>
                            <button 
                                onClick={() => onNavigate('products', 'skincare')}
                                className="bg-white text-black font-black py-6 px-16 rounded-full hover:bg-[#fbc5fa] transition-all transform hover:scale-105 uppercase tracking-[0.3em] text-[11px] shadow-2xl"
                            >
                                Ver Tratamientos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: FACIAL */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-50 pb-10 gap-6">
                    <div>
                        <h3 className="text-4xl lg:text-5xl font-black text-black uppercase tracking-tighter leading-none">TRATAMIENTOS FACIALES</h3>
                        <p className="text-[11px] text-gray-400 uppercase tracking-[0.5em] mt-5 font-bold">Tecnología Antiedad de Vanguardia</p>
                    </div>
                    <button onClick={() => onNavigate('products', 'skincare')} className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-all border-b-2 border-black pb-2 tracking-[0.3em] w-fit">Ver todo el catálogo</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-14">
                    {facialFeatured.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>

            {/* SUMMER MAKEUP VIBES */}
            <div className="container mx-auto px-6">
                <div className="relative bg-gradient-to-br from-[#FF512F] via-[#DD2476] to-[#654ea3] rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 group">
                    <div className="absolute inset-0 opacity-[0.1] pointer-events-none group-hover:opacity-[0.15] transition-opacity" style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
                        backgroundSize: '50px 50px'
                    }}></div>

                    <div className="md:w-1/2 p-16 md:p-24 flex flex-col justify-center relative z-10 text-white order-2 md:order-1">
                        <span className="text-white/80 text-[11px] font-black uppercase tracking-[0.6em] mb-6">Summer 2025 Collection</span>
                        <h2 className="text-6xl md:text-7xl lg:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.8] text-white">
                            NUEVOS <br/> <span className="text-[#fbc5fa] drop-shadow-2xl">TONOS</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-white/90 mb-14 font-bold leading-relaxed max-w-md italic">
                            Experimenta la explosión de color con pigmentos puros que resisten todo el día bajo el sol sueco.
                        </p>
                        <div>
                            <button 
                                onClick={() => onNavigate('products', 'makeup')}
                                className="bg-black text-white font-black py-6 px-20 rounded-full hover:bg-white hover:text-[#DD2476] transition-all transform hover:scale-110 uppercase tracking-[0.4em] text-[12px] shadow-2xl"
                            >
                                ¡Comprar Ahora!
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative min-h-[500px] flex items-center justify-center p-0 overflow-hidden order-1 md:order-2">
                        <img 
                            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" 
                            alt="Summer Vibes" 
                            className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-125" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FF512F]/30 md:to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* SECTION: PERFUMES */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-50 pb-10 gap-6">
                    <div>
                        <h3 className="text-4xl lg:text-5xl font-black text-black uppercase tracking-tighter leading-none">ESENCIAS EXCLUSIVAS</h3>
                        <p className="text-[11px] text-gray-400 uppercase tracking-[0.5em] mt-5 font-bold">Perfumería Parisina by Oriflame</p>
                    </div>
                    <button onClick={() => onNavigate('products', 'perfume')} className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-all border-b-2 border-black pb-2 tracking-[0.3em] w-fit">Explorar Fragancias</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-14">
                    {perfumesFeatured.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>

            {/* WELLNESS HIGHLIGHT */}
            <section className="bg-gray-50 py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[#fbc5fa] text-[11px] font-black uppercase tracking-[0.6em] mb-6 block">Interior Beauty</span>
                        <h3 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-8 leading-none">WELLOSOPHY</h3>
                        <p className="text-lg text-gray-500 font-medium">Suplementos de alta pureza para apoyar tu bienestar diario y salud de la piel.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
                        {wellnessFeatured.map(product => (
                            <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
