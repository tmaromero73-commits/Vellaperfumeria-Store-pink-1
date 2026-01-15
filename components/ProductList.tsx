
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
    
    const perfumesLuxe = allProducts.filter(p => p.category === 'perfume').slice(0, 4);
    const setsRegalo = allProducts.filter(p => p.tag === 'SET').slice(0, 4);

    return (
        <div className="space-y-20 pb-24 bg-white">
            
            {/* HERO PRINCIPAL */}
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN OBSEQUIO DE LA CASA - WHATSAPP EXCLUSIVE */}
            <div className="container mx-auto px-4">
                <div className="bg-[#fbc5fa]/20 border-2 border-dashed border-[#fbc5fa] rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fbc5fa]/30 rounded-full blur-3xl"></div>
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-white blur-3xl opacity-40 animate-pulse"></div>
                            <img src="https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48649%2F48649_1.png" className="w-48 relative z-10 drop-shadow-2xl hover:scale-105 transition-transform" alt="Obsequio de la Casa" />
                        </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <span className="bg-black text-white text-[10px] font-black px-5 py-2 rounded-full mb-6 inline-block uppercase tracking-[0.2em]">Obsequio de la Casa</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-gray-900 leading-[0.9]">Regalo Exclusivo por tu Pedido</h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl font-light leading-relaxed">
                            Queremos premiar tu confianza. Por cada pedido realizado vía <span className="font-bold text-[#00a45d]">WhatsApp</span> superior a <span className="font-black text-black">35€</span>, incluiremos un obsequio sorpresa totalmente gratis y disfrutarás de <span className="font-bold">ENVÍO GRATUITO</span>.
                        </p>
                        <a 
                            href="https://wa.me/34661202616?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20realizar%20mi%20pedido%20para%20conseguir%20mi%20obsequio%20de%20la%20casa." 
                            target="_blank"
                            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black py-4 px-12 rounded-full shadow-2xl hover:bg-black transition-all transform hover:scale-105 uppercase tracking-[0.2em] text-[11px]"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z"/></svg>
                            PEDIR AHORA POR WHATSAPP
                        </a>
                    </div>
                </div>
            </div>

            {/* PERFUMERÍA LUXE - SECCIÓN PREMIUM */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-8 gap-4">
                    <div>
                        <h3 className="text-3xl font-black text-black uppercase tracking-tighter leading-none">Perfumería Luxe 2026</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mt-3">Fragancias europeas con esencias exclusivas</p>
                    </div>
                    <button onClick={() => onNavigate('products', 'perfume')} className="text-[#fbc5fa] bg-black px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#fbc5fa] hover:text-black transition-all">Ver Toda la Colección</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {perfumesLuxe.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            currency={currency}
                            onAddToCart={onAddToCart}
                            onQuickAddToCart={onQuickAddToCart}
                            onProductSelect={onProductSelect}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>
            </div>

            {/* BANNER VIRTUAL STUDIO IA */}
            <div className="container mx-auto px-4">
                <div className="bg-black rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-900">
                    <div className="md:w-1/2 relative h-[450px] md:h-auto overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&w=1000&q=80" 
                            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[1.5s] scale-105 hover:scale-100" 
                            alt="Virtual Studio IA"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                    </div>
                    <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" className="w-48 invert" alt="" />
                        </div>
                        <span className="text-[#fbc5fa] font-black uppercase text-[11px] tracking-[0.5em] mb-6">Innovación Beauty</span>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">Virtual Makeup Studio</h2>
                        <p className="text-base text-gray-500 mb-12 font-light leading-relaxed max-w-md">
                            No te arriesgues con el tono equivocado. Nuestra tecnología de realidad aumentada te permite probarte labiales, sombras y bases de la nueva colección 2026 directamente en tu rostro.
                        </p>
                        <button 
                            onClick={() => onNavigate('ia')}
                            className="bg-white text-black font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 uppercase tracking-[0.3em] text-[11px] w-fit shadow-2xl shadow-white/10"
                        >
                            ABRIR CÁMARA AHORA
                        </button>
                    </div>
                </div>
            </div>

            {/* COFRES Y SETS DE REGALO */}
            <div className="bg-gray-50 py-24 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-[11px] font-bold text-[#00a45d] uppercase tracking-[0.5em] mb-4">Selección Especial</h3>
                        <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Cofres de Regalo C1-2026</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14">
                        {setsRegalo.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                currency={currency}
                                onAddToCart={onAddToCart}
                                onQuickAddToCart={onQuickAddToCart}
                                onProductSelect={onProductSelect}
                                onQuickView={onQuickView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
