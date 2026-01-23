
import type { Product } from './types.ts';

const getImg = (id: number | string) => `https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F${id}%2F${id}_1.png`;

const manualList: Partial<Product>[] = [
    { 
        id: 47511, 
        name: "Perfume Giordani Gold Essenza", 
        brand: "Giordani Gold", 
        price: 54.00, 
        category: 'perfume',
        tag: 'PREMIUM',
        description: "Una obra maestra de la alta perfumería italiana. El Perfume Giordani Gold Essenza ha sido diseñado en torno a la nota exclusiva de la Flor de Azahar Luxury Essenza, una esencia extraída mediante un proceso artesanal patentado por Vella Perfumería. Su frasco, coronado con una hoja de oro de 24 quilates, encierra una fragancia floral amaderada que se abre con luminosas notas de bergamota de Calabria y limón, evolucionando hacia un corazón magnético de flores blancas y cerrando con la nobleza de la madera de sándalo toscano. Es la expresión máxima del resplandor y la sofisticación eterna, diseñada para la mujer que deja una estela de elegancia inolvidable a su paso."
    },
    { 
        id: 46060, 
        name: "Perfume All or Nothing Amplified", 
        brand: "All or Nothing", 
        price: 62.99, 
        category: 'perfume',
        tag: 'NOVEDAD',
        description: "All or Nothing Amplified es una declaración de audacia absoluta. Esta fragancia floral ambarina redefine el concepto de intensidad. Creada para aquellas que no se conforman con lo ordinario, combina la exuberancia del Nardo Absoluto con la calidez adictiva del Jengibre Rojo, todo ello sobre una base profunda de Vainilla de Madagascar de comercio justo. Su tecnología de fragancia activa permite que la esencia interactúe con el calor de tu piel, amplificando su proyección a medida que pasan las horas. Un perfume que no solo se huele, se experimenta, envolviendo los sentidos en un aura de poder, magnetismo y feminidad indomable. Cada gota es una invitación a vivir la vida bajo tus propias reglas."
    },
    { 
        id: 44098, 
        name: "Tratamiento de Día SPF 30 Novage+", 
        brand: "NovAge+", 
        price: 19.24, 
        regularPrice: 55.00,
        category: 'skincare',
        tag: 'OFERTA',
        description: "El Tratamiento de Día Multi-Correcting Restore de Novage+ representa la cúspide de la bio-activación facial. Esta crema de alto rendimiento no solo protege la piel de la radiación UV y la polución urbana mediante su SPF 30 y tecnología Bio Re:Barrier, sino que actúa activamente reparando los daños estructurales del colágeno. Su fórmula inteligente, rica en Ácido Hialurónico de bajo peso molecular y péptidos regeneradores, penetra en las capas profundas de la dermis para restaurar la firmeza perdida, reducir visiblemente la profundidad de las arrugas y unificar el tono cutáneo. Es el escudo definitivo para una piel que busca detener el paso del tiempo, ofreciendo una textura sedosa que se funde instantáneamente, dejando un acabado radiante y una sensación de confort absoluto durante 24 horas."
    },
    { 
        id: 18437, 
        name: "Diamond Cellular Night Restore", 
        brand: "Diamond Cellular", 
        price: 34.00, 
        category: 'skincare',
        tag: 'PREMIUM',
        description: "Despierta con una piel renovada y luminosa gracias al tratamiento de noche más exclusivo de nuestra boutique. Diamond Cellular Night Restore utiliza el poder del Polvo de Diamante Blanco real para exfoliar microscópicamente y potenciar la luminosidad celular. Durante el ciclo nocturno, su complejo 'Eternal Beauty' actúa sobre los genes de la longevidad celular, estimulando la producción de sirtuinas para ralentizar el envejecimiento. El resultado es una transformación visible: los poros se minimizan, las líneas de expresión se suavizan y el rostro recupera la densidad y el resplandor de una piel joven. Es la alquimia perfecta entre el lujo mineral y la biotecnología avanzada, diseñada para las clientas más exigentes que buscan resultados excepcionales mientras duermen."
    },
    { id: 47422, name: "Revitalizador de ojos Oriflame Exclusive", brand: "Oriflame", price: 8.99, category: 'skincare', description: "Un tratamiento criogénico ligero diseñado para despertar la mirada cansada al instante. Formulado con extractos de algas árticas que reducen la inflamación y bolsas." },
    { id: 48970, name: "Caja de regalo Festive", brand: "Festive", price: 10.00, category: 'envoltorios', tag: 'REGALO', description: "Nuestra caja de edición coleccionista. Revestida en terciopelo negro profundo con estampados en pan de oro. Incluye papel de seda perfumado y lazo de grosgrain." }
];

// Generar el resto de la lista con descripciones automáticas pero completas
export const allProducts: Product[] = manualList.map(item => ({
    id: item.id!,
    name: item.name!,
    brand: item.brand!,
    price: item.price!,
    regularPrice: item.regularPrice || item.price! * 1.5,
    imageUrl: getImg(item.id!),
    description: item.description || `Este artículo exclusivo de la colección 2026 de Vella Perfumería representa la unión perfecta entre la tradición cosmética europea y la innovación científica. Cada unidad ha sido seleccionada bajo estrictos estándares de calidad para ofrecer una experiencia sensorial única. Su formulación equilibrada garantiza resultados visibles desde las primeras aplicaciones, respetando el pH de la piel y proporcionando un acabado profesional. Un imprescindible en el tocador de cualquier conocedor de la alta cosmética.`,
    ingredients: "Agua purificada, Glicerina botánica, Complejos vitamínicos encapsulados, Extractos de plantas raras del norte de Europa y Fragancias naturales sin alérgenos.",
    usage: "Para una experiencia sublime, aplicar sobre la piel limpia mediante suaves masajes circulares ascendentes, permitiendo que la temperatura corporal libere los activos. Recomendamos su uso diario dentro del ritual de belleza Vella.",
    stock: 999,
    category: (item.category as any) || 'skincare',
    tag: item.tag as any
}));
