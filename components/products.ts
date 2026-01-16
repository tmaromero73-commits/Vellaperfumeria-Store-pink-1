
import type { Product } from './types';

// Large scale Oriflame product generator
const ORIFLAME_BRANDS = ["Novage+", "Giordani Gold", "THE ONE", "Love Nature", "Wellosophy", "Optimals", "Beautanicals", "Eclat", "Possess"];

const CATEGORY_DATA = {
    skincare: {
        names: ["Serum Renovador", "Crema de Día SPF 30", "Contorno de Ojos Lift", "Limpiadora Oleosa", "Mascarilla de Noche", "Tratamiento Anti-imperfecciones", "Protector Solar 50+", "Peeling AHA 6%", "Bruma Hidratante", "Crema de Noche Restauradora"],
        images: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41035%2F41035_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44098%2F44098_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41070%2F41070_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41032%2F41032_1.png"
        ]
    },
    makeup: {
        names: ["Barra de Labios Iconic", "Máscara de Pestañas 5 en 1", "Base de Maquillaje Everlasting", "Perlas Bronceadoras", "Corrector con Serum", "Paleta de Sombras Nude", "Delineador Líquido Precision", "Iluminador en Stick", "Polvos Traslúcidos", "Esmalte de Uñas Gloss"],
        images: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46901%2F46901_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47188%2F47188_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46134%2F46134_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42121%2F42121_1.png"
        ]
    },
    perfume: {
        names: ["Eau de Parfum Eclat Nuit", "Possess Absolute", "Mister Giordani Aqua", "Miss Giordani Floral", "Amber Elixir", "Infini", "Venture Beyond", "Nordic Waters", "Signature", "Divine Exclusive"],
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
        ]
    },
    wellness: {
        names: ["WellnessPack Mujer", "Batido Natural Balance Vainilla", "Astaxantina & Extracto de Arándano", "Omega 3 Calidad Sueca", "Calcio Marino & Vitamina D", "Proteína en Polvo", "WellnessPack Hombre", "Sustitutivo de Comidas Chocolate"],
        images: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47847%2F47847_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47785%2F47785_1.png"
        ]
    },
    'personal-care': {
        names: ["Crema Universal Original", "Gel de Ducha Love Nature Coco", "Crema de Manos Hidratante", "Loción Corporal Energizante", "Champú Anticaspa de Bardana", "Jabón en Barra Refrescante", "Pasta de Dientes Optifresh"],
        images: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48649%2F48649_1.png",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47439%2F47439_1.png"
        ]
    }
};

const createOriflameCatalog = (): Product[] => {
    const products: Product[] = [];
    let idCounter = 40000;

    // Generate ~650 products
    const categories: (keyof typeof CATEGORY_DATA)[] = ['skincare', 'makeup', 'perfume', 'wellness', 'personal-care'];
    
    categories.forEach(cat => {
        const data = CATEGORY_DATA[cat];
        // Distribute items across categories
        const itemsPerCategory = cat === 'skincare' ? 200 : cat === 'makeup' ? 150 : 100;

        for (let i = 0; i < itemsPerCategory; i++) {
            const id = idCounter++;
            const brand = ORIFLAME_BRANDS[Math.floor(Math.random() * ORIFLAME_BRANDS.length)];
            const baseName = data.names[i % data.names.length];
            const name = `${baseName} ${brand} #${i + 1}`;
            const price = 10 + Math.random() * 80;
            const isOffer = Math.random() > 0.8;

            // EXCLUSION LOGIC: Skip hair removal related terms
            const forbiddenTerms = ["depilación", "cera", "máquina de afeitar", "vello", "epilator", "razor", "depilatorio"];
            if (forbiddenTerms.some(term => name.toLowerCase().includes(term) || baseName.toLowerCase().includes(term))) {
                continue;
            }

            products.push({
                id,
                name,
                brand,
                price,
                regularPrice: isOffer ? price * 1.4 : undefined,
                imageUrl: data.images[i % data.images.length],
                description: `Producto premium de la línea ${brand} diseñado con tecnología sueca. Fórmula de alta eficacia probada dermatológicamente.`,
                stock: Math.floor(Math.random() * 200),
                category: cat as any,
                tag: isOffer ? 'OFERTA' : (Math.random() > 0.9 ? 'NOVEDAD' : undefined),
                rating: 4 + Math.random(),
                reviewCount: Math.floor(Math.random() * 100)
            });
        }
    });

    return products;
};

export const allProducts: Product[] = createOriflameCatalog();
