import type { Product } from './types';

let idCounter = 5000000;

// Mapeo exhaustivo de IDs de imagen reales de Oriflame
const IMG_MAP = {
    // PERFUMERÍA FEMENINA
    giordani_essenza: 31816,
    eclat_mon_parfum: 33957,
    amber_elixir: 11367,
    possess_woman: 30886,
    love_potion: 22442,
    divine_exclusive: 38497,
    lucia_bright: 42786,
    signature_her: 40793,
    all_or_nothing: 35679,
    elvie_edt: 42502,
    infinite_tilt: 42807,
    
    // PERFUMERÍA MASCULINA
    ascendant_men: 42490,
    giordani_men: 32155,
    glacier_rock: 42503,
    venture_power: 42510,
    be_the_wild: 34471,

    // CUIDADO FACIAL (NOVAGE+)
    novage_lift_serum: 41037,
    novage_wrinkle_day: 41035,
    novage_bright_night: 41040,
    novage_eye_lift: 41033,
    novage_cleanser: 41029,
    proceuticals_retinol: 40872,
    proceuticals_vitc: 40874,

    // CUIDADO FACIAL (WAUNT & OPTIMALS)
    waunt_mist: 41365,
    waunt_mask: 41372,
    waunt_cleanser: 41351,
    waunt_stick: 41387,
    optimals_hydra_day: 42580,
    optimals_hydra_night: 42587,
    optimals_even_serum: 42552,
    optimals_eye_cream: 42555,

    // CUIDADO FACIAL (LINEAS CLÁSICAS)
    royal_velvet_day: 22424,
    royal_velvet_night: 22814,
    royal_velvet_caps: 24547,
    tender_care_orig: 1276,
    tender_care_apple: 44300,
    tender_care_cherry: 30719,
    mask_mango: 46992,
    mask_watermelon: 46990,

    // MAQUILLAJE
    makeup_foundation_gg: 32049,
    makeup_lipstick_gg: 40657,
    makeup_mascara_to: 42119,
    makeup_bb_cream: 41560,
    makeup_eyeliner: 42769,
    makeup_highlighter: 47188,
    makeup_palette: 42121,
    makeup_concealer: 41107,

    // CUERPO Y CABELLO
    body_milk_honey: 31602,
    body_sugar_scrub: 31601,
    body_feet_up: 32369,
    body_activelle: 33139,
    hair_shampoo_duo: 44955,
    hair_cond_duo: 44961,
    hair_mask_duo: 44963,
    hair_oil_hx: 38874
};

const makeupShades = [
    { value: "Porcelana", colorCode: "#fcf0e5" }, 
    { value: "Marfil", colorCode: "#f6e4d5" },
    { value: "Beige Arena", colorCode: "#efd1b8" },
    { value: "Bronce Solar", colorCode: "#cd946b" }
];

const productPools = {
    skincare: [
        { name: "Novage+ Sérum Bio-Lifting Pro", img: IMG_MAP.novage_lift_serum, brand: "Novage+" },
        { name: "Waunt Bruma Revitalizante Dewy", img: IMG_MAP.waunt_mist, brand: "Waunt" },
        { name: "Royal Velvet Crema de Día Reafirmante", img: IMG_MAP.royal_velvet_day, brand: "Royal Velvet" },
        { name: "Optimals Hydra Radiance Crema Rica", img: IMG_MAP.optimals_hydra_day, brand: "Optimals" },
        { name: "Proceuticals Retinol Power Drops", img: IMG_MAP.proceuticals_retinol, brand: "Novage+" },
        { name: "Waunt Mascarilla de Noche Reparadora", img: IMG_MAP.waunt_mask, brand: "Waunt" },
        { name: "Novage+ Tratamiento Antiarrugas SPF 30", img: IMG_MAP.novage_wrinkle_day, brand: "Novage+" },
        { name: "Love Nature Mascarilla de Mango", img: IMG_MAP.mask_mango, brand: "Love Nature" },
        { name: "Tender Care Bálsamo de Manzana", img: IMG_MAP.tender_care_apple, brand: "Tender Care" },
        { name: "Novage+ Contorno de Ojos Lift & Firm", img: IMG_MAP.novage_eye_lift, brand: "Novage+" },
        { name: "Optimals Even Out Sérum Iluminador", img: IMG_MAP.optimals_even_serum, brand: "Optimals" },
        { name: "Waunt Stick Refrescante para Ojos", img: IMG_MAP.waunt_stick, brand: "Waunt" }
    ],
    perfume: [
        { name: "Giordani Gold Essenza Parfum", img: IMG_MAP.giordani_essenza, brand: "Giordani Gold" },
        { name: "Eclat Mon Parfum Paris", img: IMG_MAP.eclat_mon_parfum, brand: "Eclat" },
        { name: "Amber Elixir Eau de Parfum", img: IMG_MAP.amber_elixir, brand: "Amber Elixir" },
        { name: "Possess Eau de Parfum", img: IMG_MAP.possess_woman, brand: "Possess" },
        { name: "Divine Exclusive Parfum Luxe", img: IMG_MAP.divine_exclusive, brand: "Divine" },
        { name: "Signature for Her Parfum", img: IMG_MAP.signature_her, brand: "Signature" },
        { name: "All or Nothing Unique Parfum", img: IMG_MAP.all_or_nothing, brand: "All or Nothing" },
        { name: "Ascendant Eau de Toilette para Él", img: IMG_MAP.ascendant_men, brand: "Ascendant" },
        { name: "Mister Giordani Aqua Men", img: IMG_MAP.giordani_men, brand: "Giordani Gold" },
        { name: "Lucia Bright Aura", img: IMG_MAP.lucia_bright, brand: "Lucia" }
    ],
    makeup: [
        { name: "Giordani Gold Labial Elixir Icónico", img: IMG_MAP.makeup_lipstick_gg, brand: "Giordani Gold" },
        { name: "THE ONE Máscara 5-en-1 WonderLash", img: IMG_MAP.makeup_mascara_to, brand: "THE ONE" },
        { name: "Giordani Gold Base Mineral SPF 20", img: IMG_MAP.makeup_foundation_gg, brand: "Giordani Gold" },
        { name: "THE ONE BB Cream Beautifier", img: IMG_MAP.makeup_bb_cream, brand: "THE ONE" },
        { name: "THE ONE Eyeliner Stylist", img: IMG_MAP.makeup_eyeliner, brand: "THE ONE" },
        { name: "Giordani Gold Iluminador Líquido", img: IMG_MAP.makeup_highlighter, brand: "Giordani Gold" },
        { name: "Giordani Gold Paleta de Rostro", img: IMG_MAP.makeup_palette, brand: "Giordani Gold" },
        { name: "THE ONE Corrector de Larga Duración", img: IMG_MAP.makeup_concealer, brand: "THE ONE" }
    ],
    hair: [
        { name: "Duologi Champú Reparación Intensa", img: IMG_MAP.hair_shampoo_duo, brand: "Duologi" },
        { name: "Duologi Acondicionador Textura Rica", img: IMG_MAP.hair_cond_duo, brand: "Duologi" },
        { name: "Duologi Mascarilla Reparadora Capilar", img: IMG_MAP.hair_mask_duo, brand: "Duologi" },
        { name: "HairX Advanced Care Aceite Nutritivo", img: IMG_MAP.hair_oil_hx, brand: "HairX" }
    ],
    "personal-care": [
        { name: "Milk & Honey Gold Crema de Manos", img: IMG_MAP.body_milk_honey, brand: "Milk & Honey" },
        { name: "Feet Up Comfort Crema de Pies", img: IMG_MAP.body_feet_up, brand: "Feet Up" },
        { name: "Activelle Desodorante 48h Invisible", img: IMG_MAP.body_activelle, brand: "Activelle" },
        { name: "Milk & Honey Exfoliante de Azúcar", img: IMG_MAP.body_sugar_scrub, brand: "Milk & Honey" },
        { name: "Tender Care Bálsamo Universal Clásico", img: IMG_MAP.tender_care_orig, brand: "Tender Care" }
    ],
    gifts: [
        { name: "Lote Lujo Giordani Gold Essenza", img: IMG_MAP.giordani_essenza, brand: "Giordani Gold" },
        { name: "Set Novage+ Ritual Reafirmante", img: IMG_MAP.novage_lift_serum, brand: "Novage+" },
        { name: "Kit Maquillaje THE ONE Estrellas", img: IMG_MAP.makeup_mascara_to, brand: "THE ONE" }
    ]
};

const createProduct = (category: Product['category'], index: number): Product => {
    const id = idCounter++;
    const pool = productPools[category] || productPools.skincare;
    
    // Usamos una semilla basada en el índice para rotar las plantillas y evitar repeticiones visuales inmediatas
    const seed = (index + (category === 'skincare' ? 100 : 0)) % pool.length;
    const template = pool[seed];
    
    const priceBase = category === 'perfume' ? 36.50 : (category === 'skincare' ? 26.50 : 15.50);
    const price = parseFloat((priceBase + (index * 0.04) + (Math.random() * 3)).toFixed(2));
    const isOffer = index % 11 === 0;
    const regularPrice = isOffer ? parseFloat((price * 1.5).toFixed(2)) : undefined;

    return {
        id,
        name: `${template.name} - ${index + 1}`,
        brand: template.brand,
        price,
        regularPrice,
        imageUrl: `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${template.img}%2F${template.img}_1.png`,
        description: `Producto exclusivo de ${template.brand} para tu rutina de ${category}. Calidad europea con ingredientes naturales seleccionados.`,
        stock: 15 + (index % 150),
        category,
        tag: isOffer ? 'OFERTA' : (index % 17 === 0 ? 'NOVEDAD' : undefined),
        rating: 4.6 + (Math.random() * 0.4),
        reviewCount: 4 + (index % 50),
        variants: category === 'makeup' ? {
            "Tono": makeupShades.slice(0, 2 + (index % 2)).map(s => ({
                ...s,
                imageUrl: `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${template.img}%2F${template.img}_1.png`
            }))
        } : undefined
    };
};

const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// Generamos todos y los mezclamos para evitar bloques repetidos
const rawProducts: Product[] = [
    ...Array.from({ length: 150 }, (_, i) => createProduct('skincare', i)),
    ...Array.from({ length: 140 }, (_, i) => createProduct('perfume', i)),
    ...Array.from({ length: 120 }, (_, i) => createProduct('personal-care', i)),
    ...Array.from({ length: 100 }, (_, i) => createProduct('hair', i)),
    ...Array.from({ length: 90 }, (_, i) => createProduct('makeup', i)),
    ...Array.from({ length: 90 }, (_, i) => createProduct('gifts', i)),
];

export const allProducts: Product[] = shuffleArray(rawProducts).slice(0, 690);
