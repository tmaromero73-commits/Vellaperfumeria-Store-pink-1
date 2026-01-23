
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface Message {
    role: 'user' | 'model';
    text: string;
}

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fbc5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-9l2-2 2 2m-2 4v6m2-6l2 2-2 2M15 3l2 2-2 2m-2-4v4m2 4l2 2-2 2m-8 4h12" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const AsistenteIAPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [chat, setChat] = useState<Chat | null>(null);
    
    // Logotipo oficial vellaperfumeria.com
    const logoUrl = "https://i.ibb.co/6yX8z6n/vella-logo-new.png";
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const newChat = ai.chats.create({
                    model: 'gemini-3-flash-preview',
                    config: {
                        systemInstruction: `Eres el Beauty Concierge Senior de vellaperfumeria.com. 
                        Tu tono debe ser extremadamente sofisticado, culto, detallista y servicial, propio de una boutique de lujo europea. 
                        Cuando un cliente te pregunte, debes dar respuestas EXTENSAS y BIEN ESTRUCTURADAS. 
                        No te limites a responder brevemente; explica la pirámide olfativa de los perfumes, los beneficios bioquímicos de los cosméticos NovAge y la exclusividad de Giordani Gold. 
                        Trata al cliente de 'Usted' o con un trato de cortesía elevado. 
                        Menciona siempre que estás a su disposición para cualquier detalle adicional sobre nuestro catálogo interactivo de la Campaña 1 2026. 
                        Si preguntan por ofertas, destaca que en vellaperfumeria.com el lujo es accesible pero selecto.`,
                    },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: 'Bienvenida a vellaperfumeria.com. Es un honor saludarle. Soy su Beauty Concierge personal y estoy aquí para guiarle a través de nuestra exclusiva selección de Campaña 1. ¿En qué puedo asistirle hoy para elevar su ritual de belleza?' }]);
            } catch (e) {
                console.error("Gemini Init Error:", e);
                setError("El servicio de IA Concierge no está disponible en este momento.");
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isProcessing]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim() || isProcessing || !chat) return;

        const userMsg: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, userMsg, { role: 'model', text: '' }]);
        setInput('');
        setIsProcessing(true);
        setError(null);

        try {
            const responseStream = await chat.sendMessageStream({ message: messageText });
            for await (const chunk of responseStream) {
                const c = chunk as GenerateContentResponse;
                const text = c.text || '';
                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMsg = newMessages[newMessages.length - 1];
                    if (lastMsg && lastMsg.role === 'model') {
                        lastMsg.text += text;
                    }
                    return [...newMessages];
                });
            }
        } catch (e) {
            console.error("Chat error", e);
            setError("Disculpe las molestias, ha ocurrido un error al procesar su consulta.");
            setMessages(prev => prev.slice(0, -1));
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <div className="container mx-auto px-6 py-16 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col h-[75vh] bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden relative">
                
                {/* Header de la IA con Branding Fuerte */}
                <div className="bg-[#0a0a0a] p-10 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-full p-2 border border-white/10">
                            <img src={logoUrl} className="h-full w-auto object-contain brightness-0 invert" alt="Vella IA" />
                        </div>
                        <div className="border-l border-white/20 pl-6">
                            <h2 className="text-white font-black uppercase text-sm tracking-[0.4em] italic">Beauty Concierge AI</h2>
                            <p className="text-[#fbc5fa] text-[9px] uppercase font-bold tracking-[0.3em] mt-1.5 opacity-80">vellaperfumeria.com • Soporte Prioritario</p>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-white/30 text-[9px] font-black uppercase tracking-widest">Servicio VIP Online</span>
                        </div>
                    </div>
                </div>

                {/* Contenedor de Mensajes */}
                <div ref={chatContainerRef} className="flex-grow p-10 overflow-y-auto space-y-10 bg-white custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-gray-100' : 'bg-[#0a0a0a] p-2.5 border border-white/10'}`}>
                                {msg.role === 'user' ? (
                                    <UserIcon />
                                ) : (
                                    <img src={logoUrl} className="w-full h-auto object-contain brightness-0 invert" alt="V" />
                                )}
                            </div>
                            <div className={`max-w-[75%] p-8 rounded-[2.5rem] text-sm md:text-base leading-[1.8] font-medium transition-all ${
                                msg.role === 'user' 
                                    ? 'bg-[#0a0a0a] text-white rounded-tr-none shadow-xl' 
                                    : 'bg-[#f9f9f9] text-gray-800 rounded-tl-none border border-gray-100'
                            }`}>
                                {msg.text || (isProcessing && idx === messages.length - 1 ? 'Redactando su asesoramiento...' : '')}
                            </div>
                        </div>
                    ))}
                    {error && (
                        <div className="text-center text-red-500 text-[10px] font-black uppercase tracking-[0.3em] bg-red-50 p-4 rounded-xl">{error}</div>
                    )}
                </div>

                {/* Input de IA */}
                <div className="p-10 bg-white border-t border-gray-100">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex gap-6 max-w-4xl mx-auto">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Describa su necesidad de belleza o fragancia..."
                            className="flex-grow px-10 py-6 bg-[#f9f9f9] rounded-full focus:ring-2 focus:ring-[#fbc5fa] border border-gray-100 outline-none text-base italic transition-all"
                            disabled={isProcessing}
                        />
                        <button 
                            type="submit" 
                            disabled={isProcessing || !input.trim() || !chat} 
                            className="bg-[#0a0a0a] text-white font-black rounded-full px-12 py-6 hover:bg-[#fbc5fa] hover:text-[#0a0a0a] transition-all uppercase text-[10px] tracking-[0.3em] shadow-2xl disabled:opacity-20"
                        >
                            {isProcessing ? 'Procesando...' : 'Consultar'}
                        </button>
                    </form>
                    <p className="text-center text-[8px] text-gray-300 font-bold uppercase tracking-[0.5em] mt-6">Atención exclusiva garantizada por vellaperfumeria.com</p>
                </div>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default AsistenteIAPage;
