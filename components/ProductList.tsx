
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
    
    // Filtros para la Home basados en el catálogo de 800+
    const topPerfumes = allProducts.filter(p => p.category === 'perfume').slice(0, 8);
    const skincareFeatured = allProducts.filter(p => p.category === 'skincare').slice(0, 8);
    const makeupTrending = allProducts.filter(p => p.category === 'makeup').slice(0, 4);

    return (
        <div className="space-y-40 pb-40 bg-white">
            
            {/* Main Hero Slider */}
            <HeroBanner onNavigate={onNavigate} />

            {/* BRAND VALUE SECTION */}
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto border-y border-black/5 py-16">
                    <span className="text-[#fbc5fa] text-[12px] font-black uppercase tracking-[0.5em] mb-8 block">Nuestra Promesa</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter mb-10 text-black">BELLEZA SUECA DESDE 1967</h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed italic">
                        "En Vellaperfumeria, creemos en la sinergia entre la pureza de los ingredientes naturales y la potencia de la biotecnología europea. Cada fragancia y tratamiento es un tributo a la excelencia."
                    </p>
                </div>
            </div>

            {/* SECTION: PERFUMERÍA DE LUJO */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <span className="text-[11px] text-[#fbc5fa] font-black uppercase tracking-[0.4em]">Haute Parfumerie</span>
                        <h3 className="text-5xl lg:text-7xl font-serif font-black text-black uppercase tracking-tighter leading-none">FRAGANCIAS <br/> ICÓNICAS</h3>
                    </div>
                    <button 
                        onClick={() => onNavigate('products', 'perfume')} 
                        className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-all border-b-2 border-black pb-2 tracking-[0.4em] w-fit"
                    >
                        Descubrir Todas
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
                    {topPerfumes.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>

            {/* EXCLUSIVE BANNER: NOVAGE+ */}
            <div className="w-full bg-black py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative group overflow-hidden border border-white/10">
                            <img 
                                src="https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110" 
                                alt="Novage+ Innovation" 
                            />
                        </div>
                        <div className="text-white space-y-12">
                            <span className="text-[#fbc5fa] text-[11px] font-black uppercase tracking-[0.6em]">Innovación Molecular</span>
                            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-[0.9] uppercase">NOVAGE+ <br/> REVOLUTION</h2>
                            <p className="text-xl text-white/60 font-medium leading-relaxed">
                                Descubre el poder de la tecnología bio-activadora. 4 pasos diseñados para transformar tu piel en solo 2 semanas con resultados clínicamente probados.
                            </p>
                            <button 
                                onClick={() => onNavigate('products', 'skincare')} 
                                className="bg-white text-black font-black py-6 px-16 rounded-none hover:bg-[#fbc5fa] transition-all tracking-[0.4em] text-[11px] shadow-2xl"
                            >
                                Ver Sistemas de Cuidado
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: SKINCARE */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <span className="text-[11px] text-[#fbc5fa] font-black uppercase tracking-[0.4em]">Expert Treatment</span>
                        <h3 className="text-5xl lg:text-7xl font-serif font-black text-black uppercase tracking-tighter leading-none">CUIDADO <br/> AVANZADO</h3>
                    </div>
                    <button onClick={() => onNavigate('products', 'skincare')} className="text-[11px] font-black uppercase text-black hover:text-[#fbc5fa] transition-all border-b-2 border-black pb-2 tracking-[0.4em] w-fit">Ver Catálogo Facial</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
                    {skincareFeatured.map(product => (
                        <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                    ))}
                </div>
            </section>

             {/* MAKEUP HIGHLIGHT */}
             <section className="bg-gray-50 py-40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <span className="text-[#fbc5fa] text-[11px] font-black uppercase tracking-[0.6em] mb-6 block">The Art of Color</span>
                        <h3 className="text-6xl lg:text-8xl font-serif font-black text-black uppercase tracking-tighter mb-10 leading-none">GIORDANI GOLD</h3>
                        <p className="text-xl text-gray-500 font-medium italic">"Lujo italiano con ingredientes antiedad para un acabado radiante y profesional."</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {makeupTrending.map(product => (
                            <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onQuickAddToCart={onQuickAddToCart} onProductSelect={onProductSelect} onQuickView={onQuickView} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
