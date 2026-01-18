
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- COLECCIÓN O SWEET MARSHMALLOW (Existentes) ---
    { 
        id: 47718, 
        name: "Eau de Parfum O Sweet Marshmallow", 
        brand: "O Sweet Oriflame", 
        price: 17.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47718%2F47718_1.png", 
        description: "Una sinfonía olfativa de dulzura sofisticada que encabeza la historia de Jan y Valentina. Este perfume gourmet abre con malvavisco rosa y bayas silvestres, fusionándose con jazmín y un fondo de vainilla cremosa. Una fragancia que celebra el afecto y la ternura en cada vaporización. Diseñada para la mujer que encuentra la belleza en los detalles más dulces de la vida, su estela es una caricia inolvidable que perdura durante horas sobre la piel.", 
        category: "perfume", 
        tag: "NOVEDAD", 
        stock: 100 
    },
    { id: 46974, name: "Bálsamo Labial O Sweet Marshmallow", brand: "O Sweet Oriflame", price: 3.49, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46974%2F46974_1.png", description: "Protección y aroma dulce para tus labios con el toque festivo del malvavisco. Hidrata profundamente con un brillo jugoso que resalta la belleza natural de tu sonrisa en cualquier estación.", category: "makeup", stock: 200 },
    { id: 47201, name: "Crema de Manos O Sweet Marshmallow", brand: "O Sweet Oriflame", price: 6.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47201%2F47201_1.png", description: "Manos de seda con aroma a nube de azúcar. Nutrición profunda y rápida absorción para una suavidad inmediata que te acompaña en tus rituales diarios de cuidado personal.", category: "personal-care", stock: 150 },

    // --- NUEVA SECCIÓN LUXE GIORDANI GOLD & THE ONE ---
    { 
        id: 42236, 
        name: "Antimaquillaje Antienvejecimiento Sérum Boost SPF 12", 
        brand: "Giordani Gold", 
        price: 28.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42236%2F42236_1.png", 
        description: "La fusión perfecta entre maquillaje de alta cobertura y tratamiento clínico avanzado. Este sérum boost con SPF 12 no solo unifica el tono de tu piel, sino que actúa como un escudo protector orgánico contra el envejecimiento prematuro. Su fórmula ligera y sedosa se funde con el rostro, minimizando poros y líneas de expresión mientras aporta una hidratación profunda y duradera. Ideal para quienes buscan un aspecto radiante y juvenil cada día. Códigos disponibles del 42236 al 42241.", 
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
        description: "Eleva tu mirada a un nivel icónico con nuestra máscara más avanzada. Formulada con ingredientes orgánicos que nutren tus pestañas desde la raíz, esta máscara ofrece un volumen dramático y una definición impecable. Su resistencia al agua (waterproof) garantiza un acabado perfecto durante todo el día, sin importar las condiciones climáticas o las emociones. El cepillo ergonómico separa cada pestaña para un efecto abanico espectacular que captura todas las miradas.", 
        category: "makeup", 
        stock: 100 
    },
    { 
        id: 41107, 
        name: "Corrector y Sérum Potenciador Orgánico", 
        brand: "Giordani Gold", 
        price: 14.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41107%2F41107_1.png", 
        description: "Más que un simple corrector, es un tratamiento rejuvenecedor para tu mirada. Disimula ojeras e imperfecciones al instante mientras su sérum potenciador orgánico trabaja en las capas profundas de la piel para reducir la inflamación y las líneas finas. Con una textura cremosa que no se cuartea, proporciona un acabado luminoso y natural que revitaliza el rostro cansado. Disponible en los tonos 41107 y 41108.", 
        category: "makeup", 
        stock: 120 
    },
    { 
        id: 44833, 
        name: "Polvos Compactos con Sérum Orgánico", 
        brand: "Giordani Gold", 
        price: 21.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44833%2F44833_1.png", 
        description: "Sella tu maquillaje con la sofisticación de los polvos compactos Giordani Gold. Enriquecidos con sérum orgánico, estos polvos ultrafinos ofrecen un acabado mate pero radiante, controlando los brillos sin resecar la piel. Su textura sedosa se desliza suavemente, difuminando imperfecciones y proporcionando una sensación de ligereza absoluta. El estuche de lujo con espejo los convierte en el accesorio perfecto para retoques rápidos con estilo. Tonos disponibles 44833, 44834 y 44835.", 
        category: "makeup", 
        stock: 90 
    },
    { 
        id: 42118, 
        name: "Prebase y Sérum Perfeccionador Orgánico", 
        brand: "Giordani Gold", 
        price: 18.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42118%2F42118_1.png", 
        description: "El primer paso indispensable para un maquillaje de alta costura. Esta prebase combina la eficacia de un sérum perfeccionador con la tecnología de alisado instantáneo de Oriflame. Prepara el lienzo de tu rostro, cerrando poros y suavizando la textura de la piel para una aplicación de base más uniforme y duradera. Sus ingredientes orgánicos hidratan y revitalizan, dejando un brillo sutil y saludable desde el interior.", 
        category: "makeup", 
        stock: 70 
    },
    { 
        id: 32920, 
        name: "Maquillaje Líquido Orgánico Giordani Gold", 
        brand: "Giordani Gold", 
        price: 22.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F32920%2F32920_1.png", 
        description: "Experimenta la cobertura total con una ligereza sorprendente. Nuestra base líquida orgánica de Giordani Gold se adapta a tu piel como una segunda capa, proporcionando un acabado impecable y natural. Rica en antioxidantes y minerales, protege tu rostro mientras realza su belleza innata. Su fórmula de larga duración asegura que te veas perfecta desde la mañana hasta la noche. Tonos disponibles: 32920, 32922, 32923, 32925.", 
        category: "makeup", 
        stock: 150 
    },
    { 
        id: 44915, 
        name: "Polvos Bronceadores Orgánicos Esencia", 
        brand: "Giordani Gold", 
        price: 19.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44915%2F44915_1.png", 
        description: "Captura la calidez del sol italiano en cualquier época del año. Estos polvos bronceadores de textura micro-fina aportan un tono dorado natural y saludable a tu rostro. Su esencia orgánica cuida la piel mientras esculpe tus facciones con un acabado radiante y sin marcas. Ideales para un look de playa sofisticado o para dar vida a las pieles más apagadas. Tonos 46934 y 46935 con la brocha Blow Luxury (47828).", 
        category: "makeup", 
        stock: 85 
    },

    // --- THE ONE MAKEUP PRO ---
    { 
        id: 44547, 
        name: "Prebase On Screen Finish Makeup Pro THE ONE", 
        brand: "THE ONE", 
        price: 11.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44547%2F44547_1.png", 
        description: "Diseñada específicamente para la era digital. Esta prebase 'On Screen' difumina instantáneamente las imperfecciones bajo cualquier tipo de iluminación, asegurando que tu piel luzca perfecta tanto en persona como en cámara. Su acabado mate aterciopelado controla los brillos en videollamadas y fotos, creando un efecto de filtro profesional sin necesidad de edición. Un 'must-have' para creadores de contenido y profesionales.", 
        category: "makeup", 
        stock: 110 
    },
    { 
        id: 46134, 
        name: "BB Cream Beauty Fair MAX SPF 15 THE ONE", 
        brand: "THE ONE", 
        price: 9.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46134%2F46134_1.png", 
        description: "La solución 'todo en uno' para una rutina de belleza simplificada pero efectiva. Hidrata como una crema, protege como un solar con SPF 15 y unifica el tono como una base ligera. Su fórmula fluida se funde perfectamente con la piel, proporcionando una cobertura natural y fresca que dura todo el día. Perfecta para el día a día cuando buscas un aspecto cuidado sin esfuerzo. Tonos 46134 hasta 46137.", 
        category: "makeup", 
        stock: 140 
    },
    { 
        id: 46329, 
        name: "Maquillaje Glow Reflective THE ONE", 
        brand: "THE ONE", 
        price: 13.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46329%2F46329_1.png", 
        description: "Ilumina tu rostro con una luz nueva. Esta base reflectante captura y difunde la luz para ocultar sombras y fatiga, dejando tu piel con un resplandor saludable e irresistible. Su textura ligera permite construir la cobertura deseada, desde un brillo sutil hasta una luminosidad intensa de alfombra roja. Enriquecida con agentes hidratantes para una sensación de confort absoluto. Tonos 46329 al 46334.", 
        category: "makeup", 
        stock: 130 
    },
    { 
        id: 47188, 
        name: "Iluminador Líquido Illuskin Skin THE ONE", 
        brand: "THE ONE", 
        price: 10.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47188%2F47188_1.png", 
        description: "El toque maestro de luminosidad para tus pómulos, arco de cupido y clavículas. Este iluminador líquido de alta intensidad se aplica con precisión para resaltar tus mejores rasgos. Su fórmula no grasa se seca rápidamente, dejando un brillo perlado sofisticado que no se desplaza. Mezclalo con tu base para un efecto 'glow' total o aplícalo solo para puntos de luz estratégicos. Tonos 47188 y 36133.", 
        category: "makeup", 
        stock: 160 
    },
    { 
        id: 41989, 
        name: "Corrector Everlasting Skin THE ONE", 
        brand: "THE ONE", 
        price: 8.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41989%2F41989_1.png", 
        description: "Di adiós a las imperfecciones con una resistencia legendaria. El corrector Everlasting Skin ofrece una cobertura impecable que se mantiene intacta frente al sudor, la humedad y el roce. Su aplicador de precisión permite llegar a las zonas más difíciles, borrando manchas, rojeces y signos de fatiga con un solo gesto. Tonos: 41989 Porcelana, 41990 Light Base Neutral, 41991.", 
        category: "makeup", 
        stock: 120 
    },

    // --- OJOS Y CEJAS ---
    { 
        id: 43347, 
        name: "Lápiz Dúo Sombra y Delineador Color Unlimited THE ONE", 
        brand: "THE ONE", 
        price: 10.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43347%2F43347_1.png", 
        description: "Creatividad sin límites para tus ojos. Este lápiz dúo combina una sombra cremosa de fácil difuminado con un delineador de color intenso y larga duración. Crea looks ahumados, gráficos o naturales en cuestión de segundos. Su fórmula resistente a los pliegues asegura que tu arte se mantenga perfecto durante horas. Tonos: 43347 Emerald Green, 43348 Dust Champagne, 43350 Sunset Rose.", 
        category: "makeup", 
        stock: 90 
    },
    { 
        id: 43985, 
        name: "Rotulador de Cejas Efecto Tatuaje THE ONE", 
        brand: "THE ONE", 
        price: 9.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43985%2F43985_1.png", 
        description: "Consigue unas cejas de definición profesional que duran hasta 48 horas. Su punta de micro-precisión imita el vello real, permitiendo rellenar huecos y dar forma con un realismo asombroso. La fórmula de secado rápido es resistente al agua y a los borrones, dándote la confianza de unas cejas perfectas en cualquier situación. Tonos: 43985 Brown, 43986 Ash Brown, 43987 Dark Brown.", 
        category: "makeup", 
        stock: 130 
    },

    // --- LABIOS ---
    { 
        id: 44723, 
        name: "Labial Líquido Ultra Fix Color Unlimited THE ONE", 
        brand: "THE ONE", 
        price: 12.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44723%2F44723_1.png", 
        description: "El color que se queda contigo, pase lo que pase. Nuestra tecnología Ultra Fix asegura que el pigmento se fije a tus labios con un acabado mate vibrante que no se transfiere. Olvida los retoques constantes; este labial resiste besos, comidas y el paso del tiempo, manteniendo tus labios hidratados y confortables. Tonos desde el 44715 hasta el 44723 Fire Crimson.", 
        category: "makeup", 
        stock: 150 
    },
    { 
        id: 46608, 
        name: "Barra de Labios Glitter Ultimate THE ONE", 
        brand: "THE ONE", 
        price: 13.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46608%2F46608_1.png", 
        description: "Haz que tus labios brillen como estrellas. Esta barra de labios de edición limitada está cargada de micro-glitter que refleja la luz desde todos los ángulos, creando un efecto multidimensional y festivo. Su textura cremosa se desliza suavemente, aportando un color intenso y un brillo deslumbrante que no pasa desapercibido. Tonos: 46608 Wow Factor Pink, 46607 Unique Nude, 46609 Red Rim.", 
        category: "makeup", 
        stock: 80 
    },

    // --- TRATAMIENTO NOVAGE+ & SKINCARE ---
    { 
        id: 46319, 
        name: "Niacinamida 10% Power Drops NovAge Proceuticals", 
        brand: "NovAge+", 
        price: 34.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46319%2F46319_1.png", 
        description: "El tratamiento de choque definitivo para poros dilatados e irregularidades en la textura de la piel. Con una concentración del 10% de Niacinamida pura, estas gotas reducen visiblemente el tamaño de los poros, calman rojeces y fortalecen la barrera cutánea. Tu piel se sentirá más suave, uniforme y resistente frente a las agresiones externas. Un paso avanzado para una rutina facial de nivel clínico.", 
        category: "skincare", 
        tag: "PREMIUM", 
        stock: 60 
    },
    { 
        id: 41059, 
        name: "Fluido Ultraligero Ultra Protección SPF 50 NovAge Proceuticals", 
        brand: "NovAge+", 
        price: 29.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41059%2F41059_1.png", 
        description: "Tu escudo invisible contra el sol y la polución urbana. Este fluido de absorción inmediata ofrece la máxima protección SPF 50 sin dejar rastro blanco ni sensación grasa. Su tecnología avanzada protege el ADN de tus células contra el daño solar y los radicales libres, previniendo manchas y arrugas. Ideal para usar bajo el maquillaje cada mañana.", 
        category: "skincare", 
        stock: 100 
    },
    { 
        id: 45595, 
        name: "Rutina Bright Intense NovAge+", 
        brand: "NovAge+", 
        price: 149.00, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45595%2F45595_1.png", 
        description: "Transforma tu piel con el sistema aclarante más potente de Oriflame. Esta rutina completa de 4 pasos combate la hiperpigmentación desde todos los frentes, reduciendo manchas oscuras y devolviendo la luminosidad perdida. Enriquecida con Bio Lumilock, actúa de forma segura y eficaz para un tono de piel visiblemente más uniforme y radiante en solo unas semanas.", 
        category: "skincare", 
        tag: "SET", 
        stock: 20 
    },
    { 
        id: 18437, 
        name: "Tratamiento Restaurador Noche Diamante Celular", 
        brand: "Diamond Cellular", 
        price: 32.99, 
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F18437%2F18437_1.png", 
        description: "El lujo supremo para tu piel durante el descanso nocturno. Infusionada con auténtico polvo de diamante y el Elixir Diamond Blanco, esta crema regenera las células y aporta una luminosidad sin igual. Combate todos los signos del envejecimiento: falta de firmeza, arrugas profundas y tono desigual. Despierta con una piel visiblemente más joven, tersa y resplandeciente.", 
        category: "skincare", 
        stock: 30 
    },

    // --- ACCESORIOS Y OTROS (Continuación del Catálogo) ---
    { id: 48907, name: "Dúo de Esponjas Sugar Spice", brand: "Vella Care", price: 8.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48907%2F48907_1.png", description: "Suavidad extrema y porosidad perfecta para una aplicación profesional de tus bases y correctores favoritos.", category: "accessories", stock: 120 },
    { id: 47835, name: "Rizador de Pestañas Lash Lift", brand: "Oriflame", price: 5.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47835%2F47835_1.png", description: "Diseño ergonómico que eleva tus pestañas desde la raíz para una mirada más abierta y despierta.", category: "accessories", stock: 100 },
    { id: 48914, name: "Set de Accesorios Bonitos Todo lo que Necesitas es Amor", brand: "Festive", price: 12.99, imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48914%2F48914_1.png", description: "Un conjunto encantador diseñado para regalar o para darte un capricho. Detalles que marcan la diferencia en tu tocador.", category: "accessories", stock: 45 }
];
