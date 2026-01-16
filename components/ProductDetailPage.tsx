
import React, { useState, useEffect } from 'react';
import type { Product } from './types';
import { type Currency, formatCurrency } from './currency';

interface ProductDetailPageProps {
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const sizes = ["S", "M", "L", "XL"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                {/* Visual Area */}
                <div className="md:col-span-7 flex flex-col gap-6">
                    <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    {/* Additional Images Placeholder */}
                    <div className="grid grid-cols-2 gap-6">
                         <div className="aspect-[3/4] bg-gray-50"></div>
                         <div className="aspect-[3/4] bg-gray-50"></div>
                    </div>
                </div>

                {/* Info Area */}
                <div className="md:col-span-5 flex flex-col sticky top-32 h-fit">
                    <nav className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
                        Home / {product.category} / {product.name}
                    </nav>

                    <span className="text-gray-400 uppercase tracking-[0.4em] text-[11px] font-bold mb-4">{product.brand}</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight tracking-tight">{product.name}</h1>
                    
                    <div className="flex items-center gap-6 mb-12">
                        <p className="text-3xl font-light text-black">{formatCurrency(product.price, currency)}</p>
                        {product.regularPrice && (
                            <p className="text-xl text-gray-300 line-through font-light">{formatCurrency(product.regularPrice, currency)}</p>
                        )}
                    </div>
                    
                    <div className="space-y-12 border-t border-gray-100 pt-12">
                        <div>
                            <p className="text-gray-600 text-sm leading-loose font-light">
                                {product.description || "Prenda confeccionada con materiales de la más alta calidad, siguiendo procesos artesanales europeos para garantizar un ajuste perfecto y una durabilidad excepcional."}
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[11px] font-bold uppercase tracking-widest">Talla: <span className="text-gray-400">{selectedSize || "Selecciona"}</span></h3>
                                <button className="text-[10px] underline tracking-widest uppercase text-gray-400 hover:text-black">Guía de tallas</button>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-4 text-xs font-bold border transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                if (!selectedSize) {
                                    alert("Por favor selecciona una talla");
                                    return;
                                }
                                onAddToCart(product, null, { "Talla": selectedSize });
                            }}
                            className="w-full bg-black text-white font-bold py-6 rounded-none hover:bg-gray-800 transition-all uppercase tracking-[0.3em] text-[11px] shadow-2xl active:scale-95"
                        >
                            Añadir a la Cesta
                        </button>

                        <div className="space-y-4 pt-6 border-t border-gray-100">
                             <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                                    <span className="text-[11px] font-bold uppercase tracking-widest">Composición y Cuidados</span>
                                    <span className="transition-transform group-open:rotate-180">+</span>
                                </summary>
                                <div className="text-[12px] leading-relaxed text-gray-500 py-4 font-light">
                                    Lana virgen 100%. Limpieza en seco recomendada. Planchado a baja temperatura.
                                </div>
                             </details>
                             <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer list-none py-2 border-t border-gray-50 pt-4">
                                    <span className="text-[11px] font-bold uppercase tracking-widest">Envío y Devoluciones</span>
                                    <span className="transition-transform group-open:rotate-180">+</span>
                                </summary>
                                <div className="text-[12px] leading-relaxed text-gray-500 py-4 font-light">
                                    Envío estándar gratuito. Devoluciones permitidas en un plazo de 30 días.
                                </div>
                             </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
