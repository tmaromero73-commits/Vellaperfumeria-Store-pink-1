
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- FRAGANCIAS ---
    { 
        id: 33137, 
        name: "Eau de Parfum Giordani Gold White Original", 
        brand: "Giordani Gold", 
        price: 34.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F33137%2F33137_1.png", 
        description: "Una fragancia icónica que personifica la elegancia italiana. Con notas de Jacinto Blanco y Flor de Azahar Essenza®, este perfume es una oda a la feminidad radiante. Su estela es sofisticada, duradera y envuelve a la mujer en un aura de lujo atemporal. Ideal para quienes buscan una fragancia firma que transmita frescura y distinción en cada nota.", 
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
        description: "Siente el poder infinito de las mareas nórdicas. Esta fragancia captura la frescura mineral del océano profundo con una intensidad sin precedentes. Notas acuáticas vibrantes se funden con madera de sándalo y un acorde exclusivo de agua nórdica. Un perfume diseñado para la mujer que busca libertad y fuerza en la naturaleza.", 
        category: "perfume", 
        stock: 50 
    },
    { 
        id: 42499, 
        name: "Eau de Toilette Eclat Femme Weekend in Riviera", 
        brand: "Eclat", 
        price: 26.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42499%2F42499_1.png", 
        description: "Inspirada en el glamour de la Riviera Francesa, esta fragancia floral frutal es la esencia de la elegancia espontánea. Con notas de melocotón, fresia y un corazón de rosa, evoca la luz dorada de un atardecer mediterráneo. Perfecta para momentos de relax con estilo.", 
        category: "perfume", 
        stock: 65 
    },

    // --- MAQUILLAJE GIORDANI GOLD (CÓDIGOS SOLICITADOS) ---
    { 
        id: 42236, 
        name: "Base de Maquillaje Sérum Boost SPF 12 Giordani Gold", 
        brand: "Giordani Gold", 
        price: 28.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42236%2F42236_1.png", 
        description: "Mucho más que una base. Este tratamiento antienvejecimiento orgánico revitaliza la piel mientras proporciona una cobertura perfecta y natural. Su SPF 12 protege contra los rayos UV, mientras su fórmula con suero potenciador nutre profundamente. Disponible en tonos 42236, 42239 y hasta el 42241.", 
        category: "makeup", 
        tag: "PREMIUM", 
        stock: 80 
    },
    { 
        id: 44655, 
        name: "Máscara de Pestañas Lash Iconic Waterproof Orgánica", 
        brand: "Giordani Gold", 
        price: 16.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44655%2F44655_1.png", 
        description: "Volumen y definición icónicos con ingredientes orgánicos. Esta máscara resistente al agua eleva cada pestaña para un efecto abanico espectacular. Su fórmula de larga duración cuida tus ojos con suavidad botánica.", 
        category: "makeup", 
        stock: 100 
    },
    { 
        id: 41107, 
        name: "Corrector y Sérum Potenciador Orgánico Giordani Gold", 
        brand: "Giordani Gold", 
        price: 14.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41107%2F41107_1.png", 
        description: "Cubre imperfecciones mientras tratas la zona con un potente suero rejuvenecedor orgánico. Alta cobertura con acabado sedoso. Tonos 41107 y 41108.", 
        category: "makeup", 
        stock: 120 
    },
    { 
        id: 44833, 
        name: "Polvos Compactos con Sérum Orgánico Giordani Gold", 
        brand: "Giordani Gold", 
        price: 21.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44833%2F44833_1.png", 
        description: "Matifica y unifica el tono con la ligereza de un velo orgánico. Infusionado con suero para evitar el cuarteamiento. Tonos 44833, 44834, 44835.", 
        category: "makeup", 
        stock: 90 
    },

    // --- MAQUILLAJE THE ONE (CÓDIGOS SOLICITADOS) ---
    { 
        id: 44547, 
        name: "Prebase On Screen Finish Makeup Pro THE ONE", 
        brand: "THE ONE", 
        price: 11.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44547%2F44547_1.png", 
        description: "Logra un acabado de filtro digital en la vida real. Esta prebase difumina poros e imperfecciones, preparando la piel para una aplicación de maquillaje impecable y duradera bajo cualquier iluminación.", 
        category: "makeup", 
        stock: 150 
    },
    { 
        id: 46134, 
        name: "BB Cream Beauty Fair MAX SPF 15 THE ONE", 
        brand: "THE ONE", 
        price: 10.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46134%2F46134_1.png", 
        description: "Tu piel, pero mejor. Esta BB Cream hidrata intensamente, unifica el tono y protege con SPF 15. Disponible en tonos 46134, 46135, 46136, 46137.", 
        category: "makeup", 
        stock: 200 
    },
    { 
        id: 46329, 
        name: "Maquillaje Glow Reflective THE ONE", 
        brand: "THE ONE", 
        price: 13.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46329%2F46329_1.png", 
        description: "Captura y refleja la luz para un resplandor saludable y natural. Esta base fluida se adapta a tu piel para un acabado cristalino. Tonos del 46329 al 46334.", 
        category: "makeup", 
        stock: 110 
    },

    // --- CUIDADO DE LA PIEL (NOVAGE+) ---
    { 
        id: 46319, 
        name: "Niacinamida 10% Power Drops NovAge+", 
        brand: "NovAge+", 
        price: 34.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46319%2F46319_1.png", 
        description: "Potente concentrado de Niacinamida al 10% para fortalecer la barrera cutánea, reducir poros y mejorar la textura de la piel. Un paso esencial en tu rutina de cuidado avanzado.", 
        category: "skincare", 
        tag: "PREMIUM", 
        stock: 45 
    },
    { 
        id: 41059, 
        name: "Fluido Ultraligero Ultra Protección SPF 50 NovAge+", 
        brand: "NovAge+", 
        price: 29.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41059%2F41059_1.png", 
        description: "Escudo protector invisible de alta tecnología. Protege tu piel del envejecimiento prematuro causado por los rayos UV y la contaminación con este fluido de rápida absorción.", 
        category: "skincare", 
        stock: 60 
    },

    // --- RUTINAS NOVAGE+ ---
    { 
        id: 45595, 
        name: "Rutina Bright Intense NovAge+", 
        brand: "NovAge+", 
        price: 149.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45595%2F45595_1.png", 
        description: "Set completo diseñado para combatir la hiperpigmentación y recuperar la luminosidad de tu piel. Incluye limpieza, contorno, sérum e hidratación.", 
        category: "skincare", 
        tag: "SET", 
        stock: 15 
    },
    { 
        id: 43691, 
        name: "Rutina Lift + Firm NovAge+", 
        brand: "NovAge+", 
        price: 159.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43691%2F43691_1.png", 
        description: "Tratamiento avanzado para restaurar la firmeza y elasticidad del óvalo facial. Redefine tus contornos con esta rutina experta de 5 pasos.", 
        category: "skincare", 
        tag: "SET", 
        stock: 12 
    },

    // --- ROYAL VELVET ---
    { 
        id: 47005, 
        name: "Crema de Día Reafirmante SPF 20 Royal Velvet", 
        brand: "Royal Velvet", 
        price: 24.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47005%2F47005_1.png", 
        description: "Enriquecida con la exclusiva Infusión de Iris Negro, esta crema fortalece la estructura de la piel mientras la protege de las agresiones externas con SPF 20. Reafirma y suaviza líneas de expresión.", 
        category: "skincare", 
        stock: 35 
    },
    { 
        id: 48117, 
        name: "Crema de Noche Reafirmante Royal Velvet - Edición Especial", 
        brand: "Royal Velvet", 
        price: 23.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48117%2F48117_1.png", 
        description: "Recupera la vitalidad de tu piel mientras duermes. Esta edición especial ofrece una hidratación intensa y un efecto tensor visible para despertar con un rostro descansado y rejuvenecido.", 
        category: "skincare", 
        stock: 40 
    }
];
