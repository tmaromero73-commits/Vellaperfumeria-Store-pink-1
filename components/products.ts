
import type { Product } from './types';

const createVellaperfumeriaCatalog = (): Product[] => {
    const products: Product[] = [];

    // 1. PRODUCTOS ESPECÍFICOS SOLICITADOS (CAMPAÑA 1 - 2026)
    const specificItems: Partial<Product>[] = [
        // FRAGANCIAS PREMIUM
        {
            id: 38497,
            name: "Eau de Parfum Divine",
            price: 19.99,
            regularPrice: 38.40,
            category: 'perfume',
            brand: 'Oriflame',
            description: "Magnífico ramo de flores blancas que te elevará a la estrella. Pruébalo y disfruta de su aroma celestial. 50ml.",
            tag: 'OFERTA'
        },
        { 
            id: 40683, 
            name: "Perfume Giordani Gold Essenza Supreme", 
            price: 49.12, 
            category: 'perfume', 
            brand: 'Giordani Gold',
            description: "Máxima sofisticación y concentración. Evolución del icono con mayor profundidad. El máximo lujo sueco.",
            tag: 'PREMIUM'
        },

        // LÍNEA THE ONE - MAQUILLAJE
        {
            id: 41989,
            name: "Corrector Everlasting THE ONE",
            price: 8.99,
            category: 'makeup',
            brand: 'THE ONE',
            description: "Acabado fresco y mate. Larga duración de 30 horas. Resistente al agua.",
            variants: {
                "Tono": [
                    { value: "41989 Porcelain Cool", variationId: 41989 },
                    { value: "41990 Light Beige Natural", variationId: 41990 },
                    { value: "41991 Warm Sand", variationId: 41991 }
                ]
            }
        },
        {
            id: 34647,
            name: "Polvos Compactos Everlasting THE ONE",
            price: 13.99,
            category: 'makeup',
            brand: 'THE ONE',
            description: "Acabado mate de larga duración hasta 10 horas. Refina líneas finas e imperfecciones.",
            variants: {
                "Tono": [
                    { value: "34647 Light Plus", variationId: 34647 },
                    { value: "34648 Medium", variationId: 34648 }
                ]
            }
        },
        {
            id: 45361,
            name: "Sombra de Ojos Líquida Metálica THE ONE",
            price: 8.49,
            regularPrice: 12.99,
            category: 'makeup',
            brand: 'THE ONE',
            description: "Acabados metálicos y brillantes de larga duración con manteca de karité nutritiva.",
            variants: {
                "Tono": [
                    { value: "45361 Soft Pink", variationId: 45361 },
                    { value: "45362 Rosy Peach", variationId: 45362 },
                    { value: "45364 Beige", variationId: 45364 }
                ]
            },
            tag: 'OFERTA'
        },
        {
            id: 37750,
            name: "Delineador de Ojos Waterproof THE ONE",
            price: 7.49,
            category: 'makeup',
            brand: 'THE ONE',
            description: "Delineador resistente al agua de aplicación suave. No se corre ni crea grumos.",
            variants: {
                "Tono": [
                    { value: "37750 Black Ink", variationId: 37750 },
                    { value: "47704 Black", variationId: 47704 },
                    { value: "47705 Grey", variationId: 47705 },
                    { value: "47706 Blue", variationId: 47706 },
                    { value: "47707 Brown", variationId: 47707 },
                    { value: "47708 Emerald Green", variationId: 47708 }
                ]
            }
        },
        {
            id: 47189,
            name: "Labial Larga Duración Love It THE ONE",
            price: 8.49,
            category: 'makeup',
            brand: 'THE ONE',
            description: "Color intenso que dura todo el día. Enriquecido con manteca de karité.",
            variants: {
                "Tono": [
                    { value: "47189 Starlet Kiss", variationId: 47189 },
                    { value: "47190 Timeless Magic", variationId: 47190 },
                    { value: "47191 Midnight Light", variationId: 47191 },
                    { value: "47192 Shimmering Snow", variationId: 47192 }
                ]
            }
        },
        {
            id: 10390,
            name: "Máscara de Pestañas Lash Transformer 5-en-1 THE ONE",
            price: 10.39,
            regularPrice: 12.99,
            category: 'makeup',
            brand: 'THE ONE',
            description: "Transforma tus pestañas: volumen, longitud, curvatura, cuidado y definición en un solo paso.",
            tag: 'OFERTA'
        },

        // GIORDANI GOLD - MAQUILLAJE DE LUJO
        {
            id: 43243,
            name: "Maquillaje Eternal Glow SPF 25 Giordani Gold",
            price: 32.00,
            category: 'makeup',
            brand: 'Giordani Gold',
            description: "Piel libre de estrés. Base hidratante con SPF 25 que proporciona un resplandor eterno.",
            variants: {
                "Tono": [
                    { value: "43243 Vanilla Neutral", variationId: 43243 },
                    { value: "43244 Porcelain One", variationId: 43244 },
                    { value: "43245 Light Beige Nude", variationId: 43245 },
                    { value: "43247 Ivory Neutral", variationId: 43247 },
                    { value: "43248 Natural Base", variationId: 43248 }
                ]
            }
        },

        // ACCESORIOS & RELOJES
        { 
            id: 48030, 
            name: "Reloj Willwood para Él", 
            price: 48.03, 
            category: 'accessories', 
            brand: 'Willwood',
            description: "Elegancia atemporal en tu muñeca. Un accesorio de lujo indispensable.",
            tag: 'PREMIUM'
        },
        { 
            id: 42490, 
            name: "Eau de Toilette Ascend", 
            price: 42.49, 
            category: 'perfume', 
            brand: 'Ascend',
            description: "La fuerza que hay en ti. Fragancia energizante para el hombre moderno.",
            tag: 'NOVEDAD'
        }
    ];

    specificItems.forEach(item => {
        products.push({
            id: item.id!,
            name: item.name!,
            brand: item.brand || 'Oriflame Sweden',
            price: item.price!,
            regularPrice: item.regularPrice || item.price! * 1.5,
            imageUrl: item.imageUrl || `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${item.id}%2F${item.id}_1.png`,
            description: item.description || "Excelencia sueca con estándares de calidad europeos.",
            category: item.category as any,
            tag: item.tag as any,
            stock: 100,
            rating: 4.9,
            variants: item.variants,
            reviewCount: 45
        });
    });

    // Relleno catálogo (optimizado)
    const fillerCats: ('skincare' | 'makeup' | 'perfume' | 'wellness' | 'personal-care' | 'accessories')[] = ['skincare', 'makeup', 'perfume', 'wellness', 'personal-care', 'accessories'];
    for (let i = products.length; i < 40; i++) {
        const cat = fillerCats[i % fillerCats.length];
        const id = 71000 + i;
        products.push({
            id,
            name: `Luxury ${cat.charAt(0).toUpperCase() + cat.slice(1)} Essence`,
            brand: "Vella Perfumería",
            price: 25 + Math.random() * 75,
            imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44098%2F44098_1.png",
            description: "Eficacia probada y elegancia en cada gota.",
            stock: 50,
            category: cat as any,
            rating: 4.5
        });
    }

    return products;
};

export const allProducts: Product[] = createVellaperfumeriaCatalog();
