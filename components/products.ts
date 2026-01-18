
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- FRAGANCIAS MAESTRAS (ÉL Y ELLA) ---
    { 
        id: 33137, 
        name: "Eau de Parfum Giordani Gold White Original", 
        brand: "Giordani Gold", 
        price: 34.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F33137%2F33137_1.png", 
        description: "Captura la luminosidad de un amanecer italiano. Esta fragancia floral amaderada personifica la alegría y la libertad con notas de Jacinto Blanco y Flor de Azahar Essenza®. Una estela de pura elegancia radiante para la mujer que busca distinción y frescura.", 
        category: "perfume", 
        tag: "PREMIUM", 
        stock: 50 
    },
    { 
        id: 46064, 
        name: "Eau de Parfum Nordic Waters Infinite para Él", 
        brand: "Nordic Waters", 
        price: 32.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46064%2F46064_1.png", 
        description: "Siente el poder infinito de las mareas nórdicas. Una fragancia acuática y mineral que revitaliza los sentidos. Inspirada en la fuerza de los mares profundos, proyecta una masculinidad enérgica y moderna.", 
        category: "men", 
        stock: 40 
    },
    { 
        id: 42499, 
        name: "Eau de Toilette Eclat Femme Weekend Riviera", 
        brand: "Eclat", 
        price: 26.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42499%2F42499_1.png", 
        description: "Un viaje sensorial a la Riviera Francesa. Fragancia floral-frutal chispeante con notas de melocotón y fresia. Elegante, espontánea y absolutamente chic, ideal para el fin de semana perfecto.", 
        category: "perfume", 
        stock: 65 
    },
    { 
        id: 42751, 
        name: "Eau de Parfum Love Potion Secret", 
        brand: "Love Potion", 
        price: 32.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42751%2F42751_1.png", 
        description: "Descubre el secreto mejor guardado de la seducción. Notas de fresas blancas sobre un fondo de chocolate blanco cremoso. Una fragancia que despierta deseos ocultos y envuelve los sentidos.", 
        category: "perfume", 
        stock: 40 
    },
    { id: 42508, name: "Eau de Toilette Joyce Turquoise", brand: "Joyce", price: 14.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42508%2F42508_1.png", description: "Frescura oceánica con lirio de los valles. Energía pura y natural.", category: "perfume", stock: 55 },
    { id: 37766, name: "Eau de Toilette Joyce Rose", brand: "Joyce", price: 14.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F37766%2F37766_1.png", description: "Dulzura de pétalos de rosa en una fragancia romántica y juvenil.", category: "perfume", stock: 50 },

    // --- MAQUILLAJE LUXE (GIORDANI GOLD & THE ONE) ---
    { 
        id: 42236, 
        name: "Antimaquillaje Antienvejecimiento Sérum Boost SPF 12", 
        brand: "Giordani Gold", 
        price: 28.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42236%2F42236_1.png", 
        description: "Tratamiento híbrido orgánico con protección UV. Combate los signos de la edad mientras perfecciona el rostro. Su fórmula boost revitaliza la piel, dejándola tersa y protegida. Disponible hasta el código 42241.", 
        category: "makeup", 
        tag: "PREMIUM", 
        stock: 80 
    },
    { id: 44655, name: "Máscara Lash Iconic Waterproof Orgánica", brand: "Giordani Gold", price: 16.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44655%2F44655_1.png", description: "Pestañas con volumen dramático e ingredientes orgánicos. Resistente al agua.", category: "makeup", stock: 120 },
    { id: 41107, name: "Corrector y Sérum Potenciador Orgánico", brand: "Giordani Gold", price: 14.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41107%2F41107_1.png", description: "Cubre y trata imperfecciones con suero botánico. Tonos 41107 y 41108.", category: "makeup", stock: 150 },
    { id: 44833, name: "Polvos Compactos con Sérum Orgánico", brand: "Giordani Gold", price: 21.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44833%2F44833_1.png", description: "Acabado mate con activos nutritivos. Códigos 44833, 44834, 44835.", category: "makeup", stock: 90 },
    { id: 32920, name: "Maquillaje Líquido Orgánico Giordani Gold", brand: "Giordani Gold", price: 22.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F32920%2F32920_1.png", description: "Base fluida premium de alta cobertura. Códigos 32920, 32922, 32923, 32925.", category: "makeup", stock: 120 },
    { id: 46134, name: "BB Cream Beauty Fair MAX SPF 15", brand: "THE ONE", price: 9.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46134%2F46134_1.png", description: "Hidratación y color en un solo paso. Protección SPF 15. Tonos 46134 hasta 46137.", category: "makeup", stock: 140 },
    { id: 46329, name: "Maquillaje Glow Reflective THE ONE", brand: "THE ONE", price: 13.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46329%2F46329_1.png", description: "Captura la luz para un brillo radiante. Tonos 46329 al 46334.", category: "makeup", stock: 130 },

    // --- CUIDADO FACIAL AVANZADO (NOVAGE+) ---
    { id: 46319, name: "Niacinamida 10% Power Drops NovAge+", brand: "NovAge+", price: 34.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46319%2F46319_1.png", description: "Concentrado intensivo para minimizar poros y fortalecer la barrera cutánea.", category: "skincare", tag: "PREMIUM", stock: 60 },
    { id: 41059, name: "Fluido Ultraligero SPF 50 NovAge+", brand: "NovAge+", price: 29.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41059%2F41059_1.png", description: "Protección invisible máxima contra rayos UV y polución.", category: "skincare", stock: 100 },
    { id: 45595, name: "Rutina Bright Intense NovAge+", brand: "NovAge+", price: 149.00, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45595%2F45595_1.png", description: "Set completo para combatir manchas y recuperar luminosidad.", category: "skincare", tag: "SET", stock: 20 },
    { id: 18437, name: "Tratamiento Noche Diamante Celular", brand: "Diamond Cellular", price: 32.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F18437%2F18437_1.png", description: "Regeneración nocturna de lujo con auténtico polvo de diamante.", category: "skincare", stock: 30 },
    { id: 36152, name: "Crema Universal Frambuesa", brand: "Tender Care", price: 7.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F36152%2F36152_1.png", description: "Nutrición icónica con aroma a frambuesa. Suaviza y protege.", category: "skincare", stock: 500 }
];
