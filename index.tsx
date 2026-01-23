
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
    try {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    } catch (error) {
        console.error("Error mounting application:", error);
        rootElement.innerHTML = '<div style="padding: 40px; text-align: center; font-family: sans-serif;"><h2>Error al cargar la tienda</h2><p>Por favor, intenta recargar la página.</p></div>';
    }
}
