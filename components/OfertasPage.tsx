
import React from 'react';
import { ProductCard } from './ProductCard.tsx';
import type { Product } from './types.ts';
import type { Currency } from './currency.ts';
import { allProducts } from './products.ts';

interface BannerOffer {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
    actionText: string;
    linkProductIds?: number[];
    isExternal?: boolean;
    linkUrl?: string;
    colSpan?: string;
}

const banners: BannerOffer[] = [
    {
        id: 1,
        title: "Un viaje a la Riviera para ella",
        subtitle: "Lujo y cuidado premium con Novage+",
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg",
        actionText: "VER OFERTAS",
        linkProductIds: [41070, 44098],
        colSpan: "md:col-span-2"
    },
    {
        id: 4,
        title: "Nuevas Brumas Corporales",
        subtitle: "Amber, Possess y Giordani en formato bruma",
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46807%2F46807_1.png",
        actionText: "VER BRUMAS",
        linkProductIds: [46805, 46806, 46807],
    },
    {
        id: 5,
        title: "Esencia Blossom",
        subtitle: "El corazón de la naranja en flor",
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38534%2F38534_1.png",
        actionText: "COMPRAR",
        linkProductIds: [38534],
        colSpan: "md:col-span-1"
    }
];

const OfertasPage: React.FC<{
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {

    const scrollToProducts = (ids: number[]) => {
        const element = document.getElementById('promo-products');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const promoProducts = allProducts.filter(p => 
        p.tag === 'OFERTA' || p.tag === 'NOVEDAD' || (p.regularPrice && p.price < p.regularPrice)
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 py-10">
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-[#fbc5fa]/20 text-black text-[9px] font-bold tracking-wide mb-3 border border-[#fbc5fa]/30">
                    OFERTAS EXCLUSIVAS 2026
                </span>
                <h1 className="text-3xl font-serif font-black text-black tracking-tight uppercase italic">Boutique de Oportunidades</h1>
                <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
                    Selecciones de alta gama con precios preferenciales por tiempo limitado.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {banners.map((banner) => (
                    <div 
                        key={banner.id} 
                        className={`relative group overflow-hidden rounded-2xl shadow-md cursor-pointer ${banner.colSpan || ''}`}
                        onClick={() => banner.linkProductIds ? scrollToProducts(banner.linkProductIds) : null}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300"></div>
                        <img 
                            src={banner.imageUrl} 
                            alt={banner.title} 
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-1 leading-tight uppercase italic">{banner.title}</h3>
                            <p className="text-gray-200 text-[10px] mb-4 font-black uppercase tracking-widest opacity-90">{banner.subtitle}</p>
                            <button className="bg-[#fbc5fa] text-black text-[8px] font-black py-2 px-4 rounded-full uppercase tracking-wider hover:bg-white transition-colors">
                                {banner.actionText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div id="promo-products" className="scroll-mt-24">
                <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
                    <h2 className="text-xl font-black text-black uppercase tracking-tighter italic">Selección en Promoción</h2>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{promoProducts.length} Artículos</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {promoProducts.map(product => (
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
    );
};

export default OfertasPage;
