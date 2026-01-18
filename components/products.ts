
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- FRAGANCIAS ---
    { 
        id: 33137, 
        name: "Eau de Parfum Giordani Gold White Original", 
        brand: "Giordani Gold", 
        price: 34.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F33137%2F33137_1.png", 
        description: "Una fragancia que personifica la pasión por la vida y la elegancia italiana. Este Eau de Parfum floral amaderado se abre con la luminosidad del Jacinto Blanco y la mandarina, fusionándose con un corazón de Flor de Azahar Essenza®. Es el perfume perfecto para la mujer sofisticada que irradia luz propia y confianza absoluta.", 
        category: "perfume", 
        tag: "PREMIUM", 
        stock: 50 
    },
    { 
        id: 46064, 
        name: "Eau de Parfum Nordic Waters Infinite", 
        brand: "Nordic Waters", 
        price: 32.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46064%2F46064_1.png", 
        description: "Siente el poder infinito de las mareas nórdicas. Esta fragancia captura la frescura mineral del océano profundo con una intensidad sin precedentes. Sus notas acuáticas vibrantes se entrelazan con madera de sándalo y un acorde exclusivo de agua nórdica, proyectando una masculinidad moderna, limpia y poderosa.", 
        category: "perfume", 
        stock: 50 
    },
    { 
        id: 42499, 
        name: "Eau de Toilette Eclat Femme Weekend Riviera", 
        brand: "Eclat", 
        price: 26.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42499%2F42499_1.png", 
        description: "Un viaje sensorial a la sofisticación de la Riviera Francesa. Eclat Femme Weekend es una fragancia floral frutal que evoca la luz dorada de un atardecer mediterráneo con notas chispeantes de melocotón y fresia. Elegante, espontánea y absolutamente chic.", 
        category: "perfume", 
        stock: 65 
    },
    { 
        id: 42751, 
        name: "Eau de Parfum Love Potion Secret", 
        brand: "Love Potion", 
        price: 32.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42751%2F42751_1.png", 
        description: "Descubre el secreto más dulce de la seducción. Esta fragancia enigmática combina notas de fresa blanca glaseada con un corazón cremoso de chocolate blanco. Un perfume que envuelve como un abrazo cálido y misterioso, diseñado para la mujer que ama dejar una huella inolvidable.", 
        category: "perfume", 
        stock: 40 
    },
    { id: 46047, name: "Eau de Parfum Love Potion Cherry on Top", brand: "Love Potion", price: 25.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46047%2F46047_1.png", description: "Una tentación gourmet con notas de cereza glaseada y chocolate negro. Dulzura irresistible en cada gota para los momentos más traviesos.", category: "perfume", stock: 100 },
    { id: 46806, name: "Body Mist Blossom Kiss Love Potion", brand: "Love Potion", price: 12.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46806%2F46806_1.png", description: "Bruma corporal refrescante con pétalos de flores blancas y un toque seductor de cereza. Ideal para refrescar el aroma durante todo el día.", category: "perfume", stock: 150 },
    { id: 42508, name: "Eau de Toilette Joyce Turquoise", brand: "Joyce", price: 22.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42508%2F42508_1.png", description: "Frescura oceánica revitalizante con notas de pera y lirio de los valles. Para un espíritu joven, libre y lleno de energía.", category: "perfume", stock: 100 },
    { id: 37766, name: "Eau de Toilette Joyce Rose", brand: "Joyce", price: 22.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F37766%2F37766_1.png", description: "Dulzura floral jugosa con néctar de Ylang Ylang. Una fragancia femenina y vibrante para el día a día.", category: "perfume", stock: 100 },

    // --- MAQUILLAJE GIORDANI GOLD ---
    { 
        id: 42236, 
        name: "Antimaquillaje Sérum Boost SPF 12 Orgánico", 
        brand: "Giordani Gold", 
        price: 28.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42236%2F42236_1.png", 
        description: "Tratamiento híbrido orgánico que combina cobertura perfecta con un sérum antiedad. Su SPF 12 protege contra los rayos UV mientras revitaliza la piel. Códigos disponibles 42236-42241.", 
        category: "makeup", 
        tag: "PREMIUM", 
        stock: 120 
    },
    { id: 44655, name: "Máscara Lash Iconic Waterproof Orgánica", brand: "Giordani Gold", price: 16.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44655%2F44655_1.png", description: "Volumen, longitud y definición impecable con resistencia total al agua e ingredientes de origen orgánico.", category: "makeup", stock: 200 },
    { id: 41107, name: "Corrector y Sérum Potenciador Orgánico", brand: "Giordani Gold", price: 14.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41107%2F41107_1.png", description: "Cubre imperfecciones mientras tratas la zona del ojo con un suero rejuvenecedor orgánico. Códigos 41107-41108.", category: "makeup", stock: 150 },
    { id: 44833, name: "Polvos Compactos con Sérum Orgánico", brand: "Giordani Gold", price: 21.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44833%2F44833_1.png", description: "Acabado mate aterciopelado con activos orgánicos para una piel impecable. Códigos 44833-44835.", category: "makeup", stock: 90 },
    { id: 42118, name: "Prebase y Sérum Perfeccionador Orgánico", brand: "Giordani Gold", price: 18.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42118%2F42118_1.png", description: "Prepara la piel con luminosidad y tratamiento orgánico previo al maquillaje.", category: "makeup", stock: 100 },
    { id: 32920, name: "Maquillaje Líquido Mineral Orgánico Giordani Gold", brand: "Giordani Gold", price: 22.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F32920%2F32920_1.png", description: "Base fluida enriquecida con minerales volcánicos y activos orgánicos. Códigos 32920-32925.", category: "makeup", stock: 150 },
    { id: 44915, name: "Polvos Bronceadores Orgánicos Esencia", brand: "Giordani Gold", price: 24.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44915%2F44915_1.png", description: "Bronceado radiante y saludable con ingredientes de agricultura orgánica. Códigos 46934-46935.", category: "makeup", stock: 80 },

    // --- MAQUILLAJE THE ONE ---
    { id: 44547, name: "Prebase On Screen Finish Makeup Pro", brand: "THE ONE", price: 11.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44547%2F44547_1.png", description: "Efecto filtro digital al instante para cámaras de alta resolución y uso diario.", category: "makeup", stock: 100 },
    { id: 46134, name: "BB Cream Beauty Fair MAX SPF 15", brand: "THE ONE", price: 9.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46134%2F46134_1.png", description: "Hidrata, corrige y protege con un acabado fresco. Códigos 46134-46137.", category: "makeup", stock: 300 },
    { id: 46329, name: "Maquillaje Glow Reflective THE ONE", brand: "THE ONE", price: 13.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46329%2F46329_1.png", description: "Refleja la luz para una piel de cristal en segundos. Códigos 46329-46334.", category: "makeup", stock: 250 },
    { id: 47188, name: "Iluminador Líquido Illuskin Skin", brand: "THE ONE", price: 10.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47188%2F47188_1.png", description: "Brillo modulable líquido para realzar facciones. Tonos 47188 y 36133.", category: "makeup", stock: 160 },
    { id: 34647, name: "Polvos Compactos Everlasting Skin", brand: "THE ONE", price: 12.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F34647%2F34647_1.png", description: "Larga duración sin cuartearse y control de brillos profesional.", category: "makeup", stock: 120 },
    { id: 43347, name: "Lápiz Dúo Sombra y Delineador Color Unlimited", brand: "THE ONE", price: 10.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43347%2F43347_1.png", description: "Dúo para miradas impactantes. Tonos: Emerald, Champagne y Sunset Rose.", category: "makeup", stock: 150 },
    { id: 44715, name: "Labial Líquido Ultra Fix Color Unlimited", brand: "THE ONE", price: 12.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44715%2F44715_1.png", description: "Fijación extrema mate que no transfiere. Tonos 44715-44723.", category: "makeup", stock: 200 },

    // --- CUIDADO FACIAL (NOVAGE+, ROYAL VELVET, DIAMOND) ---
    { id: 46319, name: "Niacinamida 10% Power Drops NovAge+", brand: "NovAge+", price: 34.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46319%2F46319_1.png", description: "Concentrado intensivo para minimizar poros y fortalecer la barrera cutánea.", category: "skincare", tag: "PREMIUM", stock: 60 },
    { id: 41059, name: "Fluido Ultraligero SPF 50 NovAge+", brand: "NovAge+", price: 29.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41059%2F41059_1.png", description: "Protección máxima invisible contra rayos UV y polución diaria.", category: "skincare", stock: 100 },
    { id: 45595, name: "Rutina Bright Intense NovAge+", brand: "NovAge+", price: 149.00, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45595%2F45595_1.png", description: "Set completo para combatir manchas y falta de luminosidad.", category: "skincare", tag: "SET", stock: 25 },
    { id: 47005, name: "Crema de Día SPF 20 Royal Velvet", brand: "Royal Velvet", price: 43.00, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47005%2F47005_1.png", description: "Fórmula reafirmante con Iris Negro para fortalecer la piel madura.", category: "skincare", stock: 35 },
    { id: 48117, name: "Crema de Noche Reafirmante Royal Velvet", brand: "Royal Velvet", price: 23.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48117%2F48117_1.png", description: "Regeneración nocturna intensiva para un despertar rejuvenecido.", category: "skincare", stock: 40 },
    { id: 18437, name: "Tratamiento Noche Diamante Celular", brand: "Diamond Cellular", price: 32.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F18437%2F18437_1.png", description: "Lujo con polvo de diamante para restaurar la luminosidad celular nocturna.", category: "skincare", stock: 30 },
    { id: 36152, name: "Crema Universal Frambuesa", brand: "Tender Care", price: 7.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F36152%2F36152_1.png", description: "Nutrición icónica que suaviza labios y zonas secas.", category: "skincare", stock: 500 },
    { id: 47439, name: "Crema Universal Cereza Dulce", brand: "Tender Care", price: 7.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47439%2F47439_1.png", description: "Protección nutritiva total con aroma irresistible a cereza.", category: "skincare", stock: 450 },

    // --- ACCESORIOS ---
    { id: 48907, name: "Dúo Esponjas Sugar Spice", brand: "Vella Care", price: 8.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48907%2F48907_1.png", description: "Esponjas premium para un acabado de maquillaje ultra suave.", category: "accessories", stock: 200 },
    { id: 47828, name: "Brocha Blow Giordani Luxury", brand: "Giordani Gold", price: 12.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47828%2F47828_1.png", description: "Brocha de alta densidad para polvos y perlas de seda.", category: "accessories", stock: 100 }
];
