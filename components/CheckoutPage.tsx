
import React, { useEffect, useState } from 'react';
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
    const [address, setAddress] = useState({ name: '', street: '', city: '', postalCode: '', phone: '' });
    
    const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const total = subtotal;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleWhatsAppOrder = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!address.name || !address.street || !address.city || !address.phone) {
            alert("Por favor, completa los datos de envío para procesar tu pedido por WhatsApp.");
            return;
        }

        let message = "Confirmación de Pedido Vella Perfumería:\n\n";
        message += `*CLIENTE:* ${address.name}\n`;
        message += `*DIRECCIÓN:* ${address.street}, ${address.city} (${address.postalCode})\n`;
        message += `*TELÉFONO:* ${address.phone}\n\n`;
        
        message += "*PRODUCTOS:*\n";
        cartItems.forEach(item => {
            message += `• ${item.product.name} x${item.quantity}`;
            if (item.selectedVariant) {
                message += ` [${Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')}]`;
            }
            message += ` - ${formatCurrency(item.product.price * item.quantity, currency)}\n`;
        });
        
        message += `\n*TOTAL A PAGAR: ${formatCurrency(total, currency)}*\n\nSolicito instrucciones para el pago y mi envío de cortesía gratuito.`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/34661202616?text=${encodedMessage}`, '_blank');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center bg-white">
                <h2 className="text-3xl font-serif mb-8 uppercase tracking-tighter">Tu cesta está vacía</h2>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="bg-black text-white px-12 py-5 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-gray-800 transition-colors"
                >
                    Explorar Colección
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-20 max-w-6xl">
            <div className="grid md:grid-cols-12 gap-16">
                
                {/* Shipping Details Form */}
                <div className="md:col-span-7">
                    <h1 className="text-4xl font-serif font-black mb-12 border-b border-gray-100 pb-8 uppercase tracking-tighter">Finalizar Pedido</h1>
                    
                    <form id="shipping-form" className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-gray-400">Datos de Envío</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-black">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full border-b border-gray-200 py-3 focus:border-black focus:outline-none text-sm font-medium transition-all"
                                    placeholder="Tu nombre..."
                                    value={address.name}
                                    onChange={e => setAddress({...address, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-black">Teléfono de Contacto</label>
                                <input 
                                    type="tel" 
                                    required
                                    className="w-full border-b border-gray-200 py-3 focus:border-black focus:outline-none text-sm font-medium transition-all"
                                    placeholder="600 000 000"
                                    value={address.phone}
                                    onChange={e => setAddress({...address, phone: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-widest text-black">Calle y Número</label>
                            <input 
                                type="text" 
                                required
                                className="w-full border-b border-gray-200 py-3 focus:border-black focus:outline-none text-sm font-medium transition-all"
                                placeholder="Dirección completa..."
                                value={address.street}
                                onChange={e => setAddress({...address, street: e.target.value})}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-black">Ciudad</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full border-b border-gray-200 py-3 focus:border-black focus:outline-none text-sm font-medium transition-all"
                                    placeholder="Tu ciudad..."
                                    value={address.city}
                                    onChange={e => setAddress({...address, city: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-black">Código Postal</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full border-b border-gray-200 py-3 focus:border-black focus:outline-none text-sm font-medium transition-all"
                                    placeholder="28001"
                                    value={address.postalCode}
                                    onChange={e => setAddress({...address, postalCode: e.target.value})}
                                />
                            </div>
                        </div>
                    </form>

                    <div className="mt-20">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-gray-400">Resumen de Cesta</h2>
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6 pb-6 border-b border-gray-50 last:border-0">
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-20 object-cover bg-gray-50 border border-gray-100" />
                                    <div className="flex-grow flex flex-col justify-center">
                                        <h3 className="font-bold text-black text-[11px] uppercase tracking-tight">{item.product.name}</h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <p className="text-[10px] text-gray-500">Cant: {item.quantity}</p>
                                            <p className="font-black text-black text-xs">{formatCurrency(item.product.price * item.quantity, currency)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Summary & WhatsApp Button */}
                <div className="md:col-span-5">
                    <div className="bg-black text-white p-10 sticky top-32">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-[#fbc5fa]">Cerrar Pedido</h2>
                        
                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50">
                                <span>Subtotal</span>
                                <span className="text-white">{formatCurrency(subtotal, currency)}</span>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50">
                                <span>Envío Premium</span>
                                <span className="text-[#fbc5fa] font-black">Gratis</span>
                            </div>
                            <div className="flex justify-between text-2xl font-black uppercase tracking-tighter text-white pt-8 border-t border-white/20 mt-6">
                                <span>Total</span>
                                <span>{formatCurrency(total, currency)}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={handleWhatsAppOrder}
                                className="w-full bg-[#25D366] text-white font-black py-6 rounded-none text-[10px] shadow-2xl hover:bg-[#128C7E] transition-all flex justify-center items-center gap-3 uppercase tracking-[0.3em]"
                            >
                                <WhatsAppIcon />
                                <span>Enviar pedido vía WhatsApp</span>
                            </button>
                            
                            <div className="text-center mt-10">
                                <p className="text-[8px] text-white/30 font-bold uppercase tracking-[0.2em] leading-relaxed">
                                    Al hacer clic, serás redirigido a WhatsApp para completar el pago y confirmar la dirección de envío con nuestro concierge.
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
