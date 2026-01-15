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
    
    // Feature sections based on 690 product catalog
    const facialFeatured = allProducts.filter(p => p.category === 'skincare').slice(0, 8);
    const perfumesFeatured = allProducts.filter(p => p.category === 'perfume').slice(0, 8);
    const bodyFeatured = allProducts.filter(p => p.category === 'personal-care').slice(0, 8);

    return (
        <div className="space-y-24 pb-32 bg-white">
            
            {/* Main Hero */}
            <HeroBanner onNavigate={onNavigate} />

            {/* FREE SHIPPING PROMO SECTION */}
            <div className="container mx-auto px-6">
                <div className="relative bg-[#001a33] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: 'radial-gradient(circle, #fbc5fa 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>

                    <div className="md:w-1/2 relative min-h-[400px] flex items-center justify-center p-12">
                        <img 
                            src="https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg" 
                            alt="Envío Gratis" 
                            className="w-full h-full object-cover rounded-3xl shadow-2xl z-10" 
                        />
                    </div>

                    <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative z-10 text-white">
                        <span className="text-[#fbc5fa] text-[11px] font-black uppercase tracking-[0.5em] mb-6">Promoción Exclusiva</span>
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Tus favoritos <br/> sin esperas <br/> ni envíos
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-md">
                            Eleva tu rutina. Recibe tus pedidos en casa de forma gratuita a partir de 35€. Un lujo al alcance de tu mano.
                        </p>
                        <div>
                            <button 
                                onClick={() => onNavigate('products', 'all')}
                                className="bg-[#fbc5fa] text-black font-black py-5 px-12 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase tracking-widest text-[11px] shadow-xl"
                            >
                                Descubrir Catálogo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: FACIAL */}
            <section className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
                    <div>
                        <h3 className="text-4xl font-black text-black uppercase tracking-tighter">Rituales Faciales</h3>
                        <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-2 font-bold">150 productos de alta eficacia</p>
                    </div>
                    <button onClick={() => onNavigate('products', 'skincare')} className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-colors border-b-2 border-black pb-1 tracking-widest">Ver todo</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {facialFeatured.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>

            {/* SECTION: PERFUMES */}
            <section className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
                    <div>
                        <h3 className="text-4xl font-black text-black uppercase tracking-tighter">Perfumería de Lujo</h3>
                        <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-2 font-bold">Fragancias europeas icónicas</p>
                    </div>
                    <button onClick={() => onNavigate('products', 'perfume')} className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-colors border-b-2 border-black pb-1 tracking-widest">Explorar esencias</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {perfumesFeatured.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>

             {/* SECTION: BODY CARE */}
             <section className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
                    <div>
                        <h3 className="text-4xl font-black text-black uppercase tracking-tighter">Bienestar Corporal</h3>
                        <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-2 font-bold">Cuidado total para tu cuerpo</p>
                    </div>
                    <button onClick={() => onNavigate('products', 'personal-care')} className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-colors border-b-2 border-black pb-1 tracking-widest">Ver gama completa</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {bodyFeatured.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductList;
