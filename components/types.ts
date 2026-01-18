
export interface VariantOption {
    value: string;
    colorCode?: string;
    imageUrl?: string;
    variationId?: number;
}

export interface ProductVariants {
    [key: string]: VariantOption[];
}

export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    regularPrice?: number;
    imageUrl: string;
    description: string;
    howToUse?: string;
    stock: number;
    category: 'skincare' | 'makeup' | 'perfume' | 'wellness' | 'personal-care' | 'hair' | 'accessories' | 'men' | 'women' | 'gifts';
    subCategory?: string;
    tag?: 'NOVEDAD' | 'SET' | 'OFERTA' | 'ULTIMAS UNIDADES' | 'PREMIUM' | 'CONCIERGE';
    rating?: number;
    reviewCount?: number;
    variants?: ProductVariants;
}

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    selectedVariant: Record<string, string> | null;
}

export type View = 'home' | 'products' | 'productDetail' | 'ofertas' | 'ia' | 'catalog' | 'blog' | 'blogPost' | 'checkout';
