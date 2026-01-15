import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
    try {
        // Limpiamos contenido previo por seguridad
        rootElement.innerHTML = ''; 
        const root = ReactDOM.createRoot(rootElement);
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
    } catch (error) {
        console.error("Error al montar la aplicación:", error);
        rootElement.innerHTML = '<div style="padding: 20px; text-align: center;">Hubo un error al cargar la tienda. Por favor, recarga la página.</div>';
    }
}