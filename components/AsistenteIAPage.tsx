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
                const apiKey = process.env.API_KEY;
                if (!apiKey) throw new Error("API Key missing");

                const ai = new GoogleGenAI({ apiKey });
                const newChat = ai.chats.create({
                    model: 'gemini-3-flash-preview',
                    config: {
                        systemInstruction: 'Eres el concierge de lujo de Vellaperfumeria. Tu tono es sofisticado, experto y muy servicial. Ayudas a los clientes a elegir entre los 400 productos de nuestro catálogo. Recomiendas rutinas faciales, tonos de maquillaje y fragancias europeas.',
                    },
                });
                setChat(newChat);
            } catch (e) {
                console.error("Gemini Error:", e);
                setError("El servicio de IA está experimentando alta demanda. Inténtalo de nuevo.");
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

        try {
            const responseStream = await chat.sendMessageStream({ message: messageText });
            for await (const chunk of responseStream) {
                const c = chunk as GenerateContentResponse;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text += (c.text || '');
                    return newMessages;
                });
            }
        } catch (e) {
            setError("Error de conexión con la IA.");
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-3xl mx-auto flex flex-col h-[75vh] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-black p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><SparklesIcon /></div>
                    <div>
                        <h2 className="text-white font-black uppercase text-sm tracking-widest">AI Beauty Concierge</h2>
                        <p className="text-[#fbc5fa] text-[10px] uppercase font-bold tracking-widest">Expertise en Vellaperfumeria</p>
                    </div>
                </div>

                <div ref={chatContainerRef} className="flex-grow p-8 overflow-y-auto space-y-6 bg-gray-50/50">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-black'}`}>
                                {msg.role === 'user' ? <UserIcon /> : <SparklesIcon />}
                            </div>
                            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                                msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border shadow-sm'
                            }`}>
                                {msg.text || (isProcessing && idx === messages.length - 1 ? 'Analizando...' : '')}
                            </div>
                        </div>
                    ))}
                    {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}
                </div>

                <div className="p-6 bg-white border-t">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="¿Qué producto buscas hoy?"
                            className="flex-grow px-6 py-4 bg-gray-100 rounded-full focus:ring-2 focus:ring-black transition-all outline-none"
                            disabled={isProcessing}
                        />
                        <button type="submit" disabled={isProcessing} className="bg-black text-white font-bold rounded-full px-8 py-4 hover:bg-[#fbc5fa] hover:text-black transition-all disabled:opacity-50">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AsistenteIAPage;