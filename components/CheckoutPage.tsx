
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

    const isAddressComplete = address.name && address.street && address.city && address.phone;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleWhatsAppOrder = () => {
        // Pedido directo vía WhatsApp sin requerir dirección previa en el formulario
        let message = "Confirmación de Pedido - Vella Perfumería Boutique:\n\n";
        if (address.name) message += `*CLIENTE:* ${address.name}\n`;
        
        message += "*SELECCIÓN:* \n";
        cartItems.forEach(item => {
            message += `• ${item.product.name} (Ref: ${item.product.id}) x${item.quantity}`;
            if (item.selectedVariant) {
                message += ` [${Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')}]`;
            }
            message += ` - ${formatCurrency(item.product.price * item.quantity, currency)}\n`;
        });

        message += `\n*SOLICITUD:* Incluir Servicio Premium de Guantes Blancos y Detalles de Cortesía.\n`;
        message += `\n*TOTAL ESTIMADO: ${formatCurrency(total, currency)}*\n\nPor favor, contactad conmigo para ultimar los detalles del envío y pago.`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/34661202616?text=${encodedMessage}`, '_blank');
    };

    const handleProceedToPayment = () => {
        if (!isAddressComplete) {
            alert("Para proceder al pago automático necesitamos tu dirección. Si prefieres atención personalizada, usa el botón de WhatsApp.");
            return;
        }
        alert("Redirigiendo a pasarela de pago segura de Vella Perfumería...");
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-40 text-center bg-white">
                <h2 className="text-4xl font-serif mb-8 uppercase tracking-tighter">Tu cesta está vacía</h2>
                <button onClick={() => onNavigate('products', 'all')} className="bg-black text-white px-16 py-6 font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl">Volver a la Tienda</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-20 max-w-7xl">
            <div className="grid md:grid-cols-12 gap-16">
                
                {/* Detalle y Formulario Opcional */}
                <div className="md:col-span-7">
                    <h1 className="text-5xl font-serif font-black mb-12 border-b border-gray-100 pb-10 uppercase tracking-tighter">Finalizar Pedido</h1>
                    
                    <form className="space-y-8 mb-20">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Datos de Envío Boutique</h2>
                            <span className="text-[8px] uppercase tracking-widest text-[#fbc5fa] font-black italic">(Opcional para pedidos WhatsApp)</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input type="text" placeholder="Nombre completo" className="w-full border-b border-gray-100 py-3 text-sm outline-none focus:border-black transition-all" value={address.name} onChange={e => setAddress({...address, name: e.target.value})} />
                            <input type="tel" placeholder="Teléfono" className="w-full border-b border-gray-100 py-3 text-sm outline-none focus:border-black transition-all" value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})} />
                        </div>
                        <input type="text" placeholder="Dirección de entrega" className="w-full border-b border-gray-100 py-3 text-sm outline-none focus:border-black transition-all" value={address.street} onChange={e => setAddress({...address, street: e.target.value})} />
                    </form>

                    <div className="space-y-10">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 text-gray-400 border-b pb-4">Artículos en mi Selección</h2>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-8 pb-8 border-b border-gray-50 group">
                                <div className="w-24 h-32 overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-black text-black text-[13px] uppercase tracking-tight mb-1">{item.product.name}</h3>
                                            <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">Cód: {item.product.id} • Cant: {item.quantity}</p>
                                        </div>
                                        <p className="font-black text-black text-sm">{formatCurrency(item.product.price * item.quantity, currency)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Resumen de Inversión en Belleza */}
                <div className="md:col-span-5">
                    <div className="bg-black text-white p-12 sticky top-32 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                        <h2 className="text-[12px] font-black uppercase tracking-[0.5em] mb-12 text-[#fbc5fa] text-center border-b border-white/10 pb-6">Concierge Boutique</h2>
                        
                        <div className="space-y-5 mb-12 border-b border-white/10 pb-10">
                            <div className="flex justify-between text-[11px] font-bold uppercase text-white/40 tracking-widest">
                                <span>Subtotal</span>
                                <span className="text-white">{formatCurrency(subtotal, currency)}</span>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold uppercase text-white/40 tracking-widest">
                                <span>Envío con Guantes Blancos</span>
                                <span className="text-[#fbc5fa]">Gratuito Boutique</span>
                            </div>
                            <div className="flex justify-between text-3xl font-black text-white pt-10 mt-6 tracking-tighter">
                                <span className="uppercase">Total</span>
                                <span>{formatCurrency(total, currency)}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Ruta Directa WhatsApp */}
                            <button 
                                onClick={handleWhatsAppOrder} 
                                className="w-full bg-[#25D366] text-white font-black py-7 text-[11px] hover:bg-[#128C7E] flex justify-center items-center gap-4 uppercase tracking-[0.4em] shadow-lg transform transition-all active:scale-95"
                            >
                                <WhatsAppIcon />
                                <span>Pedir por WhatsApp Directo</span>
                            </button>
                            
                            {/* Ruta Pago Estándar */}
                            <button 
                                onClick={handleProceedToPayment} 
                                className={`w-full py-7 text-[11px] font-black uppercase tracking-[0.4em] transition-all transform ${isAddressComplete ? 'bg-white text-black hover:bg-[#fbc5fa] shadow-xl active:scale-95' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'}`}
                            >
                                Proceder al Pago Seguro
                            </button>

                            <div className="pt-8 text-center space-y-6">
                                <p className="text-[9px] text-white/40 uppercase tracking-[0.4em] leading-relaxed font-bold">
                                    Garantía Vella Perfumería:<br/>
                                    <span className="text-[#fbc5fa]">Entrega cuidada y detalles de cortesía incluidos</span>
                                </p>
                                <img 
                                    src="https://raw.githubusercontent.com/vella-perfumeria/assets/main/logo_vp_v1.png" 
                                    className="h-16 mx-auto opacity-30 brightness-200 grayscale contrast-200"
                                    alt="VP Concierge Signature"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
