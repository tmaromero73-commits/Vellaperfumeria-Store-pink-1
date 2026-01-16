
import React, { useEffect, useMemo } from 'react';
import type { CartItem, View } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';

interface CheckoutPageProps {
    cartItems: CartItem[];
    currency: Currency;
    onClearCart: () => void;
    onNavigate: (view: View, payload?: any) => void;
}

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, currency, onNavigate }) => {
    const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const total = subtotal; // Envío gratis incluido

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleWhatsAppOrder = () => {
        let message = "Confirmación de Pedido Vella Premium:\n\n";
        cartItems.forEach(item => {
            message += `• ${item.product.name} x${item.quantity}`;
            if (item.selectedVariant) {
                message += ` [${Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')}]`;
            }
            message += ` - ${formatCurrency(item.product.price * item.quantity, currency)}\n`;
        });
        message += `\n*TOTAL A PAGAR: ${formatCurrency(total, currency)}*\n\nDeseo proceder con el envío premium de cortesía gratuito.`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/34661202616?text=${encodedMessage}`, '_blank');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center bg-white">
                <h2 className="text-3xl font-serif mb-8">No hay artículos en la cesta</h2>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="bg-black text-white px-12 py-5 rounded-none font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-gray-800 transition-colors"
                >
                    Explorar Colección
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-20 max-w-6xl">
            <div className="grid md:grid-cols-12 gap-16">
                
                {/* Product List */}
                <div className="md:col-span-7 space-y-12">
                    <h1 className="text-4xl font-serif font-light mb-12 border-b border-gray-100 pb-8">Resumen de Compra</h1>
                    
                    <div className="space-y-8">
                         {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-8 pb-8 border-b border-gray-50 last:border-0">
                                <img src={item.product.imageUrl} alt={item.product.name} className="w-24 h-32 object-cover bg-gray-50 border border-gray-100" />
                                <div className="flex-grow flex flex-col justify-between py-2">
                                    <div>
                                        <h3 className="font-bold text-black text-[13px] uppercase tracking-tight">{item.product.name}</h3>
                                        {item.selectedVariant && (
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">
                                                {Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(' | ')}
                                            </p>
                                        )}
                                        <p className="text-[11px] text-gray-500 mt-2">Cantidad: {item.quantity}</p>
                                    </div>
                                    <div className="font-bold text-black text-sm">
                                        {formatCurrency(item.product.price * item.quantity, currency)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Payment & Summary */}
                <div className="md:col-span-5">
                    <div className="bg-gray-50 p-10 sticky top-32">
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] mb-10 text-black border-b border-gray-200 pb-4">Detalle Final</h2>
                        
                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                <span>Subtotal</span>
                                <span className="text-black">{formatCurrency(subtotal, currency)}</span>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                <span>Envío Premium</span>
                                <span className="text-green-600 font-black">Cortesía Gratis</span>
                            </div>
                            <div className="flex justify-between text-2xl font-black uppercase tracking-tighter text-black pt-8 border-t border-gray-200 mt-6">
                                <span>Total</span>
                                <span>{formatCurrency(total, currency)}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={handleWhatsAppOrder}
                                className="w-full bg-[#25D366] text-white font-bold py-6 rounded-none text-[11px] shadow-xl hover:bg-[#128C7E] transition-all flex justify-center items-center gap-3 uppercase tracking-[0.3em]"
                            >
                                <WhatsAppIcon />
                                <span>Finalizar por WhatsApp</span>
                            </button>

                            <button 
                                onClick={() => alert("Será redirigido a nuestra pasarela segura de tarjeta.")}
                                className="w-full bg-black text-white font-bold py-6 rounded-none text-[11px] shadow-xl hover:bg-gray-800 transition-all uppercase tracking-[0.3em]"
                            >
                               Pagar con Tarjeta
                            </button>
                            
                            <div className="text-center mt-10">
                                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                                    Seguridad garantizada. Su pedido se enviará con embalaje premium y seguro incluido.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
