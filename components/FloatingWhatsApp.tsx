
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
    const message = "Hola Vella Perfumería, deseo recibir asesoramiento premium sobre el catálogo de Campaña 1. Me interesan las ofertas de cortesía.";
    const encodedMessage = encodeURIComponent(message);
    
    return (
        <a 
            href={`https://wa.me/34661202616?text=${encodedMessage}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-32 right-6 z-[150] bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white"
            aria-label="Contactar por WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
            </svg>
        </a>
    );
};

export default FloatingWhatsApp;
