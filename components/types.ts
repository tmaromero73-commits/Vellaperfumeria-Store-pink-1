
export interface VariantOption {
    value: string;
    colorCode?: string;
    imageUrl?: string;
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
    ingredients?: string;
    usage?: string;
    stock: number;
    category: 'skincare' | 'makeup' | 'perfume' | 'bodycare' | 'accessories' | 'envoltorios';
    // Added 'FESTIVE' to the tag union type to fix assignment errors in products.ts
    tag?: 'NOVEDAD' | 'SET' | 'OFERTA' | 'PREMIUM' | 'REGALO' | 'FESTIVE';
    variants?: ProductVariants;
}

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    selectedVariant: Record<string, string> | null;
}

export type View = 'home' | 'products' | 'productDetail' | 'ofertas' | 'ia' | 'catalog' | 'blog' | 'blogPost' | 'checkout' | 'envoltorios';
