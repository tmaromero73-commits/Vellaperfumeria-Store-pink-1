
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { View, Product, CartItem } from './components/types';
import type { Currency } from './currency';
import { blogPosts } from './components/blogData';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ShopPage from './components/ShopPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartSidebar from './components/CartSidebar';
import OfertasPage from './components/OfertasPage';
import AsistenteIAPage from './components/AsistenteIAPage';
import CatalogPage from './components/CatalogPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import QuickViewModal from './components/QuickViewModal';
import CheckoutPage from './components/CheckoutPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BottomNavBar from './components/BottomNavBar';

type AppView = {
    current: View;
    payload?: any;
};

const App: React.FC = () => {
    const [view, setView] = useState<AppView>({ current: 'home' });
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [currency, setCurrency] = useState<Currency>('EUR');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('vellapremium_cart_v1');
            if (storedCart) {
                const parsed = JSON.parse(storedCart);
                if (Array.isArray(parsed)) setCartItems(parsed);
            }
        } catch (e) { console.error("Error loading cart", e); }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('vellapremium_cart_v1', JSON.stringify(cartItems));
        } catch (e) { console.error("Error saving cart", e); }
    }, [cartItems]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view.current]);

    const handleNavigate = useCallback((newView: View, payload?: any) => {
        setView({ current: newView, payload });
    }, []);

    const handleProductSelect = useCallback((product: Product) => {
        handleNavigate('productDetail', product);
    }, [handleNavigate]);

    const handleAddToCart = useCallback((product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => {
        const cartItemId = selectedVariant 
            ? `${product.id}-${Object.values(selectedVariant).join('-')}`
            : `${product.id}`;
            
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === cartItemId);
            if (existingItem) {
                return prev.map(item =>
                    item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { id: cartItemId, product, quantity: 1, selectedVariant }];
        });
        setIsCartOpen(true);
    }, []);
    
    const handleQuickAddToCart = useCallback((product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => {
        handleAddToCart(product, buttonElement, selectedVariant);
    }, [handleAddToCart]);

    const handleUpdateQuantity = useCallback((cartItemId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems(prev => prev.filter(item => item.id !== cartItemId));
        } else {
            setCartItems(prev => prev.map(item =>
                item.id === cartItemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    }, []);

    const handleRemoveItem = useCallback((cartItemId: string) => {
        setCartItems(prev => prev.filter(item => item.id !== cartItemId));
    }, []);

    const content = useMemo(() => {
        try {
            switch (view.current) {
                case 'home': return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
                case 'products': return <ShopPage initialCategory={view.payload || 'all'} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
                case 'productDetail': return <ProductDetailPage product={view.payload} currency={currency} onAddToCart={handleAddToCart} onProductSelect={handleProductSelect} />;
                case 'ofertas': return <OfertasPage currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
                case 'ia': return <AsistenteIAPage />;
                case 'catalog': return <CatalogPage onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} currency={currency} />;
                case 'blog': return <BlogPage posts={blogPosts} onSelectPost={(p) => handleNavigate('blogPost', p)} />;
                case 'blogPost': return <BlogPostPage post={view.payload} allPosts={blogPosts} onSelectPost={(p) => handleNavigate('blogPost', p)} onBack={() => handleNavigate('blog')} />;
                case 'checkout': return <CheckoutPage cartItems={cartItems} currency={currency} onClearCart={() => setCartItems([])} onNavigate={handleNavigate} />;
                default: return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleQuickAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
            }
        } catch (e) {
            return <div className="p-20 text-center bg-white text-black font-bold">Error al cargar el contenido. Por favor, recarga.</div>;
        }
    }, [view, handleNavigate, handleProductSelect, handleAddToCart, handleQuickAddToCart, currency, cartItems]);

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-black antialiased">
            <Header
                onNavigate={handleNavigate}
                currency={currency}
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />
            
            <main className="flex-grow bg-white w-full relative">
                {content}
            </main>

            <Footer onNavigate={handleNavigate} />
            <FloatingWhatsApp />
            <BottomNavBar onNavigate={handleNavigate} currentView={view.current} currentCategory={view.payload || 'all'} />

            {isCartOpen && (
                <CartSidebar
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    cartItems={cartItems}
                    currency={currency}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => { setIsCartOpen(false); handleNavigate('checkout'); }}
                    isCheckingOut={false}
                    checkoutError={null}
                    onNavigate={handleNavigate}
                />
            )}

            {quickViewProduct && (
                <QuickViewModal
                    product={quickViewProduct}
                    currency={currency}
                    onClose={() => setQuickViewProduct(null)}
                    onAddToCart={handleAddToCart}
                    onProductSelect={(p) => {
                        setQuickViewProduct(null);
                        handleProductSelect(p);
                    }}
                />
            )}
            
            <style>{`
                :root { --color-accent: #fbc5fa; }
                body { background-color: #ffffff !important; color: #000; }
                .bg-accent { background-color: #fbc5fa !important; }
                .text-accent { color: #fbc5fa !important; }
            `}</style>
        </div>
    );
};

export default App;
