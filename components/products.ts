
import type { Product } from './types';

const createVellaperfumeriaCatalog = (): Product[] => {
    const products: Product[] = [];

    const items: Partial<Product>[] = [
        // --- SERVICIO PREMIUM ---
        { id: 1000, name: "Servicio de Entrega Guantes Blancos", price: 0.00, category: 'accessories', brand: 'Vella VIP', description: "Experiencia de unboxing de lujo con presentación premium y entrega cuidadosa por especialistas.", tag: 'PREMIUM' },

        // --- MAQUILLAJE THE ONE: ROSTRO (EVERLASTING SYNC) ---
        { id: 46219, name: "Base Everlasting Sync - Vanilla Neutral", price: 11.99, category: 'makeup', brand: 'THE ONE', description: "Acabado mate fresco. 30 horas de duración. Resistente al agua y al sudor." },
        { id: 46220, name: "Base Everlasting Sync - Porcelain Cool", price: 11.99, category: 'makeup', brand: 'THE ONE' },
        { id: 46221, name: "Base Everlasting Sync - Ivory Neutral", price: 11.99, category: 'makeup', brand: 'THE ONE' },
        { id: 46222, name: "Base Everlasting Sync - Marble Neutral", price: 11.99, category: 'makeup', brand: 'THE ONE' },
        { id: 46223, name: "Base Everlasting Sync - Beige Warm", price: 11.99, category: 'makeup', brand: 'THE ONE' },
        { id: 46224, name: "Base Everlasting Sync - Cool Ivory", price: 11.99, category: 'makeup', brand: 'THE ONE' },
        { id: 46225, name: "Base Everlasting Sync - Sand Warm", price: 11.99, category: 'makeup', brand: 'THE ONE' },

        // --- CORRECTORES Y POLVOS ---
        { id: 41989, name: "Corrector Everlasting - Porcelain Cool", price: 8.99, category: 'makeup', brand: 'THE ONE' },
        { id: 41990, name: "Corrector Everlasting - Light Beige Natural", price: 8.99, category: 'makeup', brand: 'THE ONE' },
        { id: 41991, name: "Corrector Everlasting - Warm Sand", price: 8.99, category: 'makeup', brand: 'THE ONE' },
        { id: 34647, name: "Polvos Compactos Everlasting - Light Plus", price: 13.99, category: 'makeup', brand: 'THE ONE', description: "Acabado mate de hasta 10h. Refina la apariencia de imperfecciones." },
        { id: 34648, name: "Polvos Compactos Everlasting - Medium", price: 13.99, category: 'makeup', brand: 'THE ONE' },

        // --- OJOS: SOMBRAS Y DELINEADORES ---
        { id: 10390, name: "Sombra Líquida The One - Shimmering Finish", price: 10.39, category: 'makeup', brand: 'THE ONE', description: "Brillo metálico intenso de larga duración." },
        { id: 45361, name: "Sombra Líquida Metálica - Soft Pink", price: 8.49, category: 'makeup', brand: 'THE ONE' },
        { id: 45362, name: "Sombra Líquida Metálica - Rosy Peach", price: 8.49, category: 'makeup', brand: 'THE ONE' },
        { id: 45364, name: "Sombra Líquida Metálica - Beige", price: 8.49, category: 'makeup', brand: 'THE ONE' },
        { id: 37750, name: "Delineador Waterproof Black Ink", price: 7.49, category: 'makeup', brand: 'THE ONE' },
        { id: 47704, name: "Delineador Impact - Black", price: 7.49, category: 'makeup', brand: 'THE ONE' },
        { id: 47705, name: "Delineador Impact - Grey", price: 7.49, category: 'makeup', brand: 'THE ONE' },
        { id: 47706, name: "Delineador Impact - Blue", price: 7.49, category: 'makeup', brand: 'THE ONE' },
        { id: 47707, name: "Delineador Impact - Brown", price: 7.49, category: 'makeup', brand: 'THE ONE' },
        { id: 47708, name: "Delineador Impact - Emerald Green", price: 7.49, category: 'makeup', brand: 'THE ONE' },

        // --- LABIOS ---
        { id: 47189, name: "Labial Nutritivo Starlet Kiss", price: 9.99, category: 'makeup', brand: 'THE ONE', description: "Con manteca de karité para una hidratación profunda todo el día." },
        { id: 47190, name: "Labial Nutritivo Timeless Magic", price: 9.99, category: 'makeup', brand: 'THE ONE' },
        { id: 47191, name: "Labial Nutritivo Midnight Light", price: 9.99, category: 'makeup', brand: 'THE ONE' },
        { id: 47192, name: "Labial Nutritivo Shimmering Snow", price: 9.99, category: 'makeup', brand: 'THE ONE' },

        // --- GIORDANI GOLD: FRAGANCIAS Y MAQUILLAJE ---
        { id: 38527, name: "Giordani Gold Essenza Blossom", price: 49.99, category: 'perfume', brand: 'Giordani Gold', description: "Aroma concentrado Baccara Boccara Calabria, una joya de la perfumería floral madurada." },
        { id: 46045, name: "Perfume Mr. Jordani", price: 26.99, category: 'perfume', brand: 'Giordani Gold' },
        { id: 48028, name: "Eau de Parfum Jordani Gold White", price: 27.99, category: 'perfume', brand: 'Giordani Gold', description: "Chipre Floral. Elegancia natural en un frasco icónico." },
        { id: 42102, name: "Maquillaje Mineral SPF 20 Giordani Gold", price: 13.08, category: 'makeup', brand: 'Giordani Gold' },
        { id: 41107, name: "Corrector y Serum Potenciador Giordani Gold", price: 8.46, category: 'makeup', brand: 'Giordani Gold' },

        // --- OTROS ---
        { id: 35653, name: "Eau de Parfum Infinita", price: 26.99, category: 'perfume', brand: 'Infinita' },
        { id: 46217, name: "Eau de Toilette Eclat Mademoiselle", price: 27.99, category: 'perfume', brand: 'Eclat' },
        { id: 46792, name: "Eau de Toilette Eclat Femme Weekend", price: 27.99, category: 'perfume', brand: 'Eclat' }
    ];

    items.forEach(item => {
        products.push({
            id: item.id!,
            name: item.name!,
            brand: item.brand || 'Vella Boutique',
            price: item.price!,
            regularPrice: item.regularPrice || item.price! * 1.4,
            imageUrl: `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${item.id}%2F${item.id}_1.png`,
            description: item.description || "Producto premium de excelencia europea formulado para los más altos estándares.",
            category: item.category as any,
            tag: item.tag as any,
            stock: 100,
            rating: 5.0
        });
    });

    return products;
};

export const allProducts: Product[] = createVellaperfumeriaCatalog();
