
import React, { useEffect, useMemo, useRef } from 'react';
import type { CartItem, View } from './types.ts';
import type { Currency } from './currency.ts';
import { formatCurrency } from './currency.ts';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    currency: Currency;
    onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
    onRemoveItem: (cartItemId: string) => void;
    onCheckout: () => void;
    isCheckingOut: boolean;
    checkoutError: string | null;
    onNavigate: (view: View, payload?: any) => void;
}

const FREE_SHIPPING_THRESHOLD = 0; // Envío gratis siempre por cortesía según petición
const SHIPPING_COST = 0;

const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, currency, onUpdateQuantity, onRemoveItem, onCheckout }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    
    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }, [cartItems]);

    const shippingCost = SHIPPING_COST;
    const total = subtotal + shippingCost;

    const handleWhatsAppOrder = () => {
        let message = "Hola Vella Premium, deseo realizar el siguiente pedido:\n\n";
        cartItems.forEach(item => {
            message += `• ${item.product.name} x${item.quantity}`;
            if (item.selectedVariant) {
                message += ` [${Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')}]`;
            }
            message += ` - ${formatCurrency(item.product.price * item.quantity, currency)}\n`;
        });
        message += `\n*TOTAL: ${formatCurrency(total, currency)}*\n\nPor favor, confirmad disponibilidad para mi envío de cortesía gratuito.`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/34661202616?text=${encodedMessage}`, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200]">
            <div className="absolute inset-0 bg-black/50 transition-opacity backdrop-blur-sm" onClick={onClose} />

            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div ref={sidebarRef} className="relative w-screen max-w-md pointer-events-auto">
                    <div className="h-full flex flex-col bg-white shadow-2xl animate-slide-in">
                        <div className="flex items-center justify-between p-8 border-b border-gray-100">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-black">Mi Cesta</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 space-y-8">
                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <div key={item.id} className="flex gap-6 items-start">
                                        <img src={item.product.imageUrl} alt={item.product.name} className="w-24 h-32 object-cover bg-gray-50 border border-gray-100" />
                                        <div className="flex-grow flex flex-col h-full justify-between">
                                            <div>
                                                <h3 className="font-bold text-[11px] uppercase tracking-tight text-black mb-1 leading-tight">{item.product.name}</h3>
                                                {item.selectedVariant && (
                                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                                                        {Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(' | ')}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center border border-gray-100">
                                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-black font-bold">-</button>
                                                    <span className="px-3 text-[10px] font-black">{item.quantity}</span>
                                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-black font-bold">+</button>
                                                </div>
                                                <button onClick={() => onRemoveItem(item.id)} className="text-gray-300 hover:text-black transition-colors">
                                                    <TrashIcon />
                                                </button>
                                            </div>
                                            <p className="font-black text-right mt-2 text-sm">{formatCurrency(item.product.price * item.quantity, currency)}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4">Tu cesta está vacía</p>
                                    <button onClick={onClose} className="text-black underline font-black uppercase text-[10px] tracking-widest">Empezar a comprar</button>
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="p-10 border-t border-gray-100 bg-white space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span>Subtotal</span>
                                        <span className="text-black">{formatCurrency(subtotal, currency)}</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span>Envío Premium</span>
                                        <span className="text-green-600">Cortesía Gratis</span>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between text-2xl font-black uppercase tracking-tighter pt-4 border-t border-gray-100">
                                    <span>Total</span>
                                    <span>{formatCurrency(total, currency)}</span>
                                </div>
                                
                                <div className="grid grid-cols-1 gap-4 pt-4">
                                    <button
                                        onClick={onCheckout}
                                        className="w-full bg-black text-white font-black py-5 rounded-none hover:bg-gray-800 transition-all uppercase tracking-[0.3em] text-[10px] shadow-xl"
                                    >
                                        Finalizar Compra
                                    </button>

                                    <button
                                        onClick={handleWhatsAppOrder}
                                        className="w-full bg-white border border-black text-black font-black py-5 rounded-none hover:bg-gray-50 transition-all uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-2"
                                    >
                                        <WhatsAppIcon />
                                        Asistencia Directa
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
                .animate-slide-in { animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

export default CartSidebar;
