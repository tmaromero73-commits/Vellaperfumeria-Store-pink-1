
import type { Product } from './types.ts';

const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

const manualList: Partial<Product>[] = [
    // --- NOVEDADES LANZAMIENTO Y CÓDIGOS ESPECÍFICOS ---
    { id: 47422, name: "Revitalizador de ojos Oriflame Exclusive", brand: "Oriflame", price: 8.99, category: 'skincare' },
    { id: 48918, name: "Masajeador facial Arctic Ritual", brand: "Oriflame", price: 14.99, category: 'skincare' },
    { id: 42263, name: "Bruma facial Micro Essence Pro-Collagen NovAge", brand: "NovAge", price: 18.00, category: 'skincare' },
    { id: 42444, name: "Sérum de hidratación intensa Pro-Collagen NovAge", brand: "NovAge", price: 32.00, category: 'skincare' },
    { id: 42253, name: "Mascarilla revitalizante intensiva facial nocturna NovAge", brand: "NovAge", price: 29.99, category: 'skincare' },
    { id: 47104, name: "Pilina Pro-Collagen NovAge", brand: "NovAge", price: 24.99, category: 'skincare' },
    { id: 18437, name: "Tratamiento restaurador de noche Diamond Cellular", brand: "Diamond Cellular", price: 34.00, category: 'skincare' },
    { id: 13659, name: "Crema antienvejecimiento Diamond Cellular", brand: "Diamond Cellular", price: 32.00, category: 'skincare' },
    { id: 21339, name: "Solución micelar Diamond Cellular", brand: "Diamond Cellular", price: 16.00, category: 'skincare' },
    { id: 45248, name: "Sérum Eclat NovAge", brand: "NovAge", price: 28.00, category: 'skincare' },
    { id: 45243, name: "Crema hidratante ligera Eclat NovAge", brand: "NovAge", price: 24.00, category: 'skincare' },
    { id: 45245, name: "Crema hidratante rica Eclat NovAge", brand: "NovAge", price: 24.00, category: 'skincare' },
    { id: 47524, name: "Banda para el pelo skincare", brand: "Accessories", price: 4.99, category: 'accessories' },
    { id: 47517, name: "Limpiador facial de silicona", brand: "Accessories", price: 5.99, category: 'accessories' },
    { id: 46543, name: "Limpiador foaming gel Optimals", brand: "Optimals", price: 8.99, category: 'skincare' },
    { id: 46900, name: "Limpiador soft cream Optimals", brand: "Optimals", price: 9.99, category: 'skincare' },
    { id: 45292, name: "Multiproducto SPF 50 Daily Glow Optimals", brand: "Optimals", price: 14.99, category: 'skincare' },
    { id: 45284, name: "Crema hidratante ligera Hydra Radiance Optimals", brand: "Optimals", price: 12.00, category: 'skincare' },
    { id: 45285, name: "Crema hidratante rica Hydra Radiance Optimals", brand: "Optimals", price: 12.00, category: 'skincare' },
    { id: 47437, name: "Parches faciales de gel Hydra Radiance Optimals", brand: "Optimals", price: 4.99, category: 'skincare' },
    { id: 45326, name: "Crema hidratante SPF 25 BeYoutiful Optimals", brand: "Optimals", price: 18.47, category: 'skincare' },
    { id: 47419, name: "Brocha de crema hidratante y sérum Oriflame Exclusive", brand: "Accessories", price: 6.99, category: 'accessories' },
    { id: 45291, name: "Contorno de ojos y labios Optimals", brand: "Optimals", price: 12.31, category: 'skincare' },

    // --- FRAGANCIAS Y CUERPO ---
    { id: 47718, name: "O Sweet Marshmallow", brand: "Oriflame", price: 17.99, category: 'perfume', tag: 'NOVEDAD' },
    { id: 46974, name: "Jabón de Barra True Hours Moments", brand: "Oriflame", price: 3.49, category: 'bodycare' },
    { id: 47201, name: "Crema de Manos True Hours Moments", brand: "Oriflame", price: 6.99, category: 'bodycare' },
    { id: 48908, name: "Neceser Sugar Spice", brand: "Boutique", price: 10.99, category: 'accessories', tag: 'OFERTA' },
    { id: 48954, name: "Reloj Glitters of Love", brand: "Boutique", price: 10.99, category: 'accessories', tag: 'NOVEDAD' },
    { id: 48952, name: "Joyas Pearl Glitters of Love", brand: "Boutique", price: 14.99, category: 'accessories', tag: 'SET' },
    { id: 48953, name: "Set de cuatro pares de pendientes Glitters of Love", brand: "Boutique", price: 11.99, category: 'accessories' },
    
    // --- REGALOS Y FESTIVE ---
    { id: 48975, name: "Bolsa sobre de regalo Festive", brand: "Festive", price: 3.99, category: 'envoltorios' },
    { id: 48977, name: "Sobre de regalo Festive", brand: "Festive", price: 2.99, category: 'envoltorios' },
    { id: 48970, name: "Caja de regalo Festive", brand: "Festive", price: 10.00, category: 'envoltorios' },

    // --- ROYAL VELVET Y OTROS ---
    { id: 481017, name: "Crema de noche reafirmante Regal Velvet Edición Especial", brand: "Royal Velvet", price: 23.99, category: 'skincare' },
    { id: 47420, name: "Espátula mascarilla Oriflame Exclusive", brand: "Accessories", price: 6.29, category: 'accessories' },
    { id: 36152, name: "Crema universal con aceite de frambuesa", brand: "Oriflame", price: 7.99, category: 'skincare' },
    { id: 43295, name: "Barra de labios Colour Stylist Super Pout THE ONE", brand: "THE ONE", price: 9.99, category: 'makeup' },
    { id: 46928, name: "Sombra de ojos Colour Unlimited", brand: "THE ONE", price: 7.99, category: 'makeup' },
    { id: 47014, name: "Crema corporal perfumada Classique Weekend", brand: "Oriflame", price: 9.99, category: 'bodycare' },
    { id: 42499, name: "Eau de Toilette Classique Weekend", brand: "Oriflame", price: 26.99, category: 'perfume' },
    { id: 48650, name: "Máscara de pestañas Winter Wonderland Lash Waterproof THE ONE", brand: "THE ONE", price: 9.99, category: 'makeup' },
    { id: 42520, name: "Brick Aura", brand: "Oriflame", price: 22.99, category: 'perfume' },
    { id: 47439, name: "Crema universal con ciruela dulce", brand: "Oriflame", price: 7.99, category: 'skincare' },
    { id: 47499, name: "Eau de Toilette Elvie Midnight Magic", brand: "Elvie", price: 22.99, category: 'perfume' },
    { id: 46979, name: "Crema de manos Love Potion Cherry On Top", brand: "Love Potion", price: 7.99, category: 'bodycare' },
    { id: 46047, name: "Eau de Perfume Love Potion Cherry On Top", brand: "Love Potion", price: 25.99, category: 'perfume' },
    { id: 47011, name: "Crema corporal perfumada Giordani Gold Essenza", brand: "Giordani Gold", price: 9.99, category: 'bodycare' },
    { id: 47511, name: "Perfume Giordani Gold Essenza", brand: "Giordani Gold", price: 54.00, category: 'perfume' },
    { id: 42806, name: "Bruma corporal Giordani Gold Essenza", brand: "Giordani Gold", price: 7.99, category: 'bodycare' },
    { id: 48079, name: "Lote Giordani Gold Essenza: perfume + bruma + caja", brand: "Giordani Gold", price: 48.99, category: 'perfume', tag: 'SET' },
    
    // --- GAMAS Y PERFUMES PREMIUM ---
    { id: 46060, name: "Perfume All or Nothing Amplified", brand: "All or Nothing", price: 62.99, category: 'perfume' },
    { id: 47020, name: "Crema corporal perfumada All or Nothing Amplified", brand: "All or Nothing", price: 9.99, category: 'bodycare' },
    { id: 35679, name: "Perfume All or Nothing", brand: "All or Nothing", price: 58.00, category: 'perfume' },
    { id: 42968, name: "Eau de Parfum Absolute All or Nothing", brand: "All or Nothing", price: 45.00, category: 'perfume' },
    { id: 45967, name: "Perfume Giordani Gold Man Elixir", brand: "Giordani Gold", price: 44.00, category: 'perfume' },
    { id: 46064, name: "Nordic Waters Infinite Blue para él", brand: "Nordic Waters", price: 32.00, category: 'perfume' },
    { id: 48035, name: "Reloj Wildy Wood para él", brand: "Boutique", price: 29.99, category: 'accessories' },
    { id: 42490, name: "Eau de Toilette Ascendant", brand: "Ascendant", price: 34.00, category: 'perfume' },
    { id: 30058, name: "Eau de Toilette Citrus Tonic", brand: "Men Collection", price: 19.99, category: 'perfume' },
    { id: 421518, name: "Eau de Toilette Dark Wood", brand: "Men Collection", price: 19.99, category: 'perfume' },
    { id: 46795, name: "Eau de Toilette Class Home Weekend Azure", brand: "Oriflame", price: 24.99, category: 'perfume' },
    { id: 35651, name: "Eau de Toilette Class Yours", brand: "Oriflame", price: 22.99, category: 'perfume' },
    { id: 47502, name: "Eau de Perfume Mister Giordani Aqua", brand: "Giordani Gold", price: 28.00, category: 'perfume' }
];

// Generar gama de labiales ultrabrillantes 38863 - 38870
for (let i = 38863; i <= 38870; i++) {
    const tones: Record<number, string> = { 38863: "Crepping Rose", 38870: "Cherry Cruise" };
    manualList.push({
        id: i,
        name: `Barra de Labios Ultrabrillante ${tones[i] || `Tono ${i}`}`,
        brand: "THE ONE",
        price: 7.99,
        category: 'makeup'
    });
}

export const allProducts: Product[] = manualList.map(item => ({
    id: item.id!,
    name: item.name!,
    brand: item.brand!,
    price: item.price!,
    regularPrice: item.regularPrice || item.price! * 1.5,
    imageUrl: getImg(item.id!),
    description: `Referencia oficial del catálogo de Campaña 1. Producto europeo de alta gama garantizado por Vella Boutique.`,
    ingredients: "Formulación experta con ingredientes botánicos y ciencia avanzada.",
    usage: "Seguir ritual recomendado para resultados óptimos.",
    stock: 999,
    category: (item.category as any) || 'skincare',
    tag: item.tag as any
}));
