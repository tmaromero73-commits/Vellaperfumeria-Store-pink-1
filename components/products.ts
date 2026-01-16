
import type { Product } from './types';

const createVellaperfumeriaCatalog = (): Product[] => {
    const products: Product[] = [];

    const specificItems: Partial<Product>[] = [
        // --- LÍNEA WAUNT (WOUND) ---
        { id: 41365, name: "Crema de Día Super Recover Waunt", price: 10.99, category: 'skincare', brand: 'Waunt', description: "Recuperación instantánea de la barrera cutánea. Hidratación profunda." },
        { id: 41353, name: "Contorno de Ojos 8 horas Sleep Waunt", price: 18.99, category: 'skincare', brand: 'Waunt', description: "Efecto '8 horas de sueño' inmediato. Difumina ojeras y fatiga." },
        { id: 41373, name: "Mascarilla Nutritiva Sleeping Beauty Waunt", price: 19.99, category: 'skincare', brand: 'Waunt', description: "Tratamiento nocturno intensivo para una piel radiante al despertar." },
        { id: 40670, name: "Prebase Perfeccionadora Wake Up Like This Waunt", price: 28.00, category: 'makeup', brand: 'Waunt', description: "Elimina impurezas y alisa la textura en una semana. 99% de acuerdo." },
        { id: 47180, name: "Bálsamo de Labios Smooth Like Butter Waunt", price: 16.00, category: 'makeup', brand: 'Waunt', variants: { "Tono": [{ value: "Light Pink", variationId: 47180 }, { value: "Soft Beige", variationId: 47181 }, { value: "Peach Pink", variationId: 47182 }] } },

        // --- LÍNEA PURESKIN (CARBÓN ACTIVO) ---
        { id: 42881, name: "Mascarilla Purificante con Carbón Activo Pureskin", price: 9.99, category: 'skincare', brand: 'Pureskin', description: "Elimina puntos negros y exceso de grasa. Piel limpia y mate." },
        { id: 41671, name: "Tónico Purificante Pureskin", price: 9.99, category: 'skincare', brand: 'Pureskin', description: "Combate imperfecciones y minimiza poros dilatados." },
        { id: 41675, name: "Exfoliante Facial Suavizante Pureskin", price: 9.99, category: 'skincare', brand: 'Pureskin' },
        { id: 41674, name: "Mascarilla de Arcilla Matificante Pureskin", price: 9.99, category: 'skincare', brand: 'Pureskin' },
        { id: 41676, name: "Gel Anti-imperfecciones Pureskin", price: 18.00, category: 'skincare', brand: 'Pureskin' },
        { id: 41670, name: "Limpiadora Facial Intensiva Pureskin", price: 18.00, category: 'skincare', brand: 'Pureskin' },
        { id: 41672, name: "Loción Facial Matificante Pureskin", price: 18.00, category: 'skincare', brand: 'Pureskin' },

        // --- WELLOSOPHY / BIENESTAR ---
        { id: 38599, name: "Multivitaminas y Minerales Woman Wellosophy", price: 22.99, category: 'wellness', brand: 'Wellosophy' },
        { id: 38597, name: "Multivitaminas y Minerales Man Wellosophy", price: 22.99, category: 'wellness', brand: 'Wellosophy' },
        { id: 38595, name: "Multivitaminas y Minerales Kids Wellosophy", price: 24.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 38556, name: "Omega-3 Wellosophy Premium", price: 24.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 32557, name: "Extracto de Arándano y Astaxantina Wellosophy", price: 32.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 37289, name: "Batido Natural Balance Chocolate", price: 48.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 37285, name: "Batido Natural Balance Fresa", price: 48.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 37290, name: "Batido Natural Balance Vainilla", price: 48.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 45147, name: "Bebida de Fibra Prebiótica", price: 26.95, category: 'wellness', brand: 'Wellosophy' },
        { id: 38836, name: "Wellness Pack Man", price: 38.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 38838, name: "Wellness Pack Woman", price: 38.00, category: 'wellness', brand: 'Wellosophy' },
        { id: 44221, name: "Magnesio Marino y Vitamina B6", price: 12.99, category: 'wellness', brand: 'Wellosophy' },

        // --- LOVE NATURE (ORGÁNICOS) ---
        { id: 46072, name: "Mascarilla Aloe Vera y Piña Love Nature", price: 8.49, category: 'skincare', brand: 'Love Nature' },
        { id: 47003, name: "Tónico Aloe Vera y Piña Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },
        { id: 46071, name: "Crema Aloe Vera y Piña Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },
        { id: 46070, name: "Gel Limpiador Aloe Vera y Piña Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },
        { id: 46919, name: "Mascarilla Calmante Kiwi Love Nature", price: 2.99, category: 'skincare', brand: 'Love Nature' },
        { id: 46922, name: "Mascarilla Iluminadora Mango Love Nature", price: 2.99, category: 'skincare', brand: 'Love Nature' },
        { id: 34849, name: "Aceite Árbol de Té y Lima Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },
        { id: 34845, name: "Loción Multimatificante Árbol de Té y Lima Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },
        { id: 35576, name: "Mascarilla y Exfoliante Árbol de Té y Lima Love Nature", price: 8.49, category: 'skincare', brand: 'Love Nature' },
        { id: 34843, name: "Tónico Árbol de Té y Lima Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },
        { id: 34841, name: "Limpiador Árbol de Té y Lima Love Nature", price: 9.99, category: 'skincare', brand: 'Love Nature' },

        // --- OPTIMALS & ACCESORIOS ---
        { id: 45001, name: "Contorno de Ojos y Labios Hydra 48h Optimals", price: 12.99, category: 'skincare', brand: 'Optimals', description: "Hidrata al instante y mantiene la humedad durante 48 horas." },
        { id: 45326, name: "Crema Hidratante Optimals SPF 25", price: 22.99, category: 'skincare', brand: 'Optimals' },
        { id: 47419, name: "Brocha Exclusiva Serum y Crema", price: 5.99, category: 'accessories', brand: 'Vella' },
        { id: 47880, name: "Esponja con Té Verde", price: 3.49, category: 'accessories', brand: 'Vella', tag: 'ULTIMAS UNIDADES' },
        { id: 47524, name: "Banda para el pelo Vella", price: 2.99, category: 'accessories', brand: 'Vella' },
        { id: 47517, name: "Limpiadora Facial Silicona", price: 1.99, category: 'accessories', brand: 'Vella' },
        { id: 46543, name: "Limpiadora Foaming Gel Optimals", price: 11.99, category: 'skincare', brand: 'Optimals' },

        // --- NOVAGE+ (ALTA GAMA) ---
        { id: 41051, name: "Fluido Ultraligero SPF 50+ Proceuticals", price: 21.99, category: 'skincare', brand: 'Novage+' },
        { id: 48678, name: "Parches Exfoliantes Proceuticals", price: 4.99, category: 'skincare', brand: 'Novage+' },
        { id: 45923, name: "Rutina Restore Novage+ (Menopausia)", price: 141.00, category: 'skincare', brand: 'Novage+', tag: 'SET' },
        { id: 45590, name: "Rutina Antiarrugas Novage+", price: 130.00, category: 'skincare', brand: 'Novage+', tag: 'SET' },
        { id: 48114, name: "Cápsulas Restauradoras Novage+", price: 39.99, category: 'skincare', brand: 'Novage+' },
        { id: 47292, name: "Retinol Power Proceuticals", price: 29.99, category: 'skincare', brand: 'Novage+' },
        { id: 47510, name: "Masajeador Facial Novage+", price: 42.99, category: 'accessories', brand: 'Novage+' },

        // --- PERFUMERÍA ---
        { id: 46045, name: "Perfume Mr. Jordani", price: 26.99, category: 'perfume', brand: 'Giordani Gold' },
        { id: 48028, name: "Eau de Parfum Jordani Gold White", price: 27.99, category: 'perfume', brand: 'Giordani Gold' },
        { id: 47513, name: "Eau de Parfum Miss Jordani", price: 26.99, category: 'perfume', brand: 'Giordani Gold' },
        { id: 35653, name: "Eau de Parfum Infinita", price: 26.99, category: 'perfume', brand: 'Infinita' },
        { id: 46217, name: "Eau de Toilette Eclat Mademoiselle", price: 27.99, category: 'perfume', brand: 'Eclat' },
        { id: 46792, name: "Eau de Toilette Eclat Femme Weekend", price: 27.99, category: 'perfume', brand: 'Eclat' },
        { id: 42514, name: "Eau de Parfum Volare", price: 22.99, category: 'perfume', brand: 'Volare' }
    ];

    specificItems.forEach(item => {
        products.push({
            id: item.id!,
            name: item.name!,
            brand: item.brand || 'Vella Premium',
            price: item.price!,
            regularPrice: item.regularPrice || item.price! * 1.35,
            imageUrl: `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${item.id}%2F${item.id}_1.png`,
            description: item.description || "Producto formulado con biotecnología europea avanzada para resultados profesionales.",
            category: item.category as any,
            tag: item.tag as any,
            stock: 100,
            rating: 4.9,
            variants: item.variants
        });
    });

    return products;
};

export const allProducts: Product[] = createVellaperfumeriaCatalog();
