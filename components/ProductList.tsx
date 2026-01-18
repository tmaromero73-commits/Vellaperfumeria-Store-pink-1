
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
    
    // Mostramos la totalidad de los productos solicitados sin restricciones de número
    const products = allProducts;

    return (
        <div className="space-y-40 pb-40 bg-white">
            
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN NARRATIVA: LA HISTORIA DE REGALAR CON CARIÑO (JAN & VALENTINA) */}
            <div className="container mx-auto px-8 py-20 bg-white">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12 order-2 md:order-1">
                        <div className="space-y-6">
                            <span className="text-[#fbc5fa] font-black uppercase text-[12px] tracking-[0.6em] block italic">Campaña 1 - Momentos Compartidos</span>
                            <h2 className="text-5xl md:text-[8rem] font-serif font-black uppercase tracking-tighter leading-[0.85] text-black italic">La Historia <br/>de Regalar <br/>con Cariño</h2>
                        </div>
                        <div className="prose prose-lg text-gray-600 space-y-8 font-medium leading-relaxed max-w-xl">
                            <p>
                                Jan y Valentina protagonizan una historia de gratitud y afecto que inspira cada rincón de nuestra Boutique. Sus actos de amor cotidianos se transforman en rituales de belleza compartidos que trascienden el tiempo y celebran la conexión humana.
                            </p>
                            <p>
                                En Vella Perfumería Boutique, entendemos que un regalo es un capítulo de vuestra propia historia. Por eso, hemos seleccionado lo más excelso de la cosmética sueca para que cada detalle transmita el cuidado y la sofisticación que Jan y Valentina representan.
                            </p>
                            <p className="italic text-black font-black text-2xl border-l-8 border-[#fbc5fa] pl-10 py-6 bg-gray-50 rounded-r-xl">
                                "La verdadera belleza reside en el <br/>gesto de dar con el corazón".
                            </p>
                        </div>
                        <button 
                            onClick={() => onNavigate('catalog')}
                            className="bg-black text-white font-black py-8 px-24 rounded-none hover:bg-[#fbc5fa] hover:text-black transition-all uppercase tracking-[0.5em] text-[13px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] transform hover:-translate-y-1"
                        >
                            Ver Selección de Jan & Valentina
                        </button>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative group overflow-hidden rounded-[5rem] shadow-2xl border border-gray-100">
                            <img 
                                src="https://media-cdn.oriflame.com/contentImage?externalMediaId=86cb5734-1101-4601-8161-e170f0cfbdd0&name=Promo_split_single_3&inputFormat=jpg" 
                                className="w-full brightness-95 group-hover:brightness-100 transition-all duration-[2.5s] transform group-hover:scale-110" 
                                alt="Jan & Valentina - El Arte de Regalar"
                            />
                            <div className="absolute bottom-16 left-16 bg-white/95 backdrop-blur-md p-14 rounded-[2.5rem] border border-gray-100 hidden lg:block animate-fade-in shadow-2xl">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-500 mb-5 italic">Oferta Sugarspray Exclusive</h4>
                                <p className="text-4xl font-black text-black leading-tight">Solo 10.99€</p>
                                <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-[0.3em] font-bold">Por cada 20€ de compra en Boutique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* THE GALLERY - CATÁLOGO MAESTRO COMPLETO SIN LÍMITES */}
            <div className="bg-white py-48 border-y border-gray-100">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-36 border-b-4 border-gray-50 pb-20 gap-16">
                        <div className="space-y-4">
                            <span className="text-[13px] font-black text-gray-400 uppercase tracking-[1em] mb-4 block italic">Colección Campaña 1 - 2026</span>
                            <h2 className="text-7xl md:text-[10rem] font-serif font-black text-black uppercase tracking-tighter leading-none italic">The Gallery</h2>
                        </div>
                        <button onClick={() => onNavigate('products', 'all')} className="text-black font-black uppercase text-[18px] tracking-[0.6em] hover:text-[#fbc5fa] transition-all border-b-[10px] border-black pb-6">Explorar Todo el Catálogo →</button>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-24">
                        {products.map(product => (
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
