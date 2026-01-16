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

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = async () => {
            try {
                // Initialize GoogleGenAI directly with process.env.API_KEY as per guidelines.
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const newChat = ai.chats.create({
                    model: 'gemini-3-flash-preview',
                    config: {
                        systemInstruction: 'Eres el concierge de lujo de Vellaperfumeria. Tu tono es sofisticado, experto y muy servicial. Ayudas a los clientes a elegir entre los productos de nuestro catálogo. Recomiendas rutinas faciales, tonos de maquillaje y fragancias europeas. Mantén tus respuestas concisas y elegantes.',
                    },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: 'Bienvenida a Vellaperfumeria. Soy tu concierge de belleza personal. ¿En qué puedo asesorarte hoy?' }]);
            } catch (e) {
                console.error("Gemini Init Error:", e);
                setError("El servicio de IA no está disponible.");
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
            setError("Error al procesar la consulta.");
            setMessages(prev => prev.slice(0, -1));
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <div className="container mx-auto px-6 py-12 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col h-[70vh] bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-black p-8 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-[#fbc5fa]/30">
                            <SparklesIcon />
                        </div>
                        <div>
                            <h2 className="text-white font-black uppercase text-xs tracking-[0.3em]">Beauty Concierge AI</h2>
                            <p className="text-[#fbc5fa] text-[9px] uppercase font-bold tracking-widest mt-1">Soporte VIP Premium</p>
                        </div>
                    </div>
                </div>

                <div ref={chatContainerRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-white">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-white border' : 'bg-black'}`}>
                                {msg.role === 'user' ? <UserIcon /> : <SparklesIcon />}
                            </div>
                            <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed ${
                                msg.role === 'user' 
                                    ? 'bg-black text-white rounded-tr-none' 
                                    : 'bg-white text-black rounded-tl-none border border-gray-100'
                            }`}>
                                {msg.text || (isProcessing && idx === messages.length - 1 ? '...' : '')}
                            </div>
                        </div>
                    ))}
                    {error && (
                        <div className="text-center text-red-500 text-xs font-bold uppercase">{error}</div>
                    )}
                </div>

                <div className="p-8 bg-white border-t border-gray-50">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="¿Cómo podemos ayudarte?"
                            className="flex-grow px-8 py-5 bg-gray-50 rounded-full focus:ring-2 focus:ring-black outline-none text-sm"
                            disabled={isProcessing}
                        />
                        <button 
                            type="submit" 
                            disabled={isProcessing || !input.trim() || !chat} 
                            className="bg-black text-white font-black rounded-full px-10 py-5 hover:bg-[#fbc5fa] hover:text-black transition-all uppercase text-[10px]"
                        >
                            {isProcessing ? '...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AsistenteIAPage;
