
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { MessageSquare, X, Send, Bot, Mic, MicOff, Map as MapIcon, Search, Loader2 } from 'lucide-react';

const ProjectAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'text' | 'voice'>('text');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your Mou Builders AI Property Consultant. How can I help you explore our Bashundhara projects today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLiveActive, setIsLiveActive] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const liveSessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (manualText?: string) => {
    const userMsg = manualText || input.trim();
    if (!userMsg || isTyping) return;

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          tools: [{ googleSearch: {} }, { googleMaps: {} }],
          systemInstruction: `You are a helpful AI assistant for "Mou Builders", a leading real estate developer in Bangladesh. 
          Brand positioning: "Mou Builders – Bashundhara Specialists, Building Bangladesh."
          Use Google Maps tools for location queries and Google Search for market news. 
          When responding, be professional and highlight our expertise in Bashundhara Residential Area.
          Always mention that Mou Builders has projects nationwide across Bangladesh.`
        }
      });

      const botText = response.text || "I'm sorry, I couldn't find a response.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Service busy. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const startLiveConversation = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      setIsLiveActive(true);
      setMode('voice');
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const session = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => console.log('Live connected'),
          onmessage: async (msg: LiveServerMessage) => {
             if (msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data) {
                // Play audio logic would go here following the decoding guidelines
             }
             if (msg.serverContent?.outputTranscription) {
               const text = msg.serverContent.outputTranscription.text;
               setMessages(prev => [...prev, { role: 'bot', text }]);
             }
          },
          onerror: (e) => console.error(e),
          onclose: () => setIsLiveActive(false)
        },
        config: {
          responseModalities: [Modality.AUDIO],
          outputAudioTranscription: {},
          inputAudioTranscription: {},
          systemInstruction: 'You are a friendly and helpful assistant for Mou Builders.'
        }
      });
      liveSessionRef.current = session;
    } catch (error) {
      console.error(error);
      setIsLiveActive(false);
    }
  };

  const stopLiveConversation = () => {
    if (liveSessionRef.current) liveSessionRef.current.close();
    setIsLiveActive(false);
    setMode('text');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-800 transition-all hover:scale-110 z-40 group"
      >
        <Bot size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:left-6 md:w-96 md:h-[550px] bg-white md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-navy text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase">Mou Consultant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Live Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-green-400"><X size={20} /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' ? 'bg-navy text-white' : 'bg-white text-slate-700 shadow-sm border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-slate-400 italic">Mou Assistant is thinking...</div>}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
             {mode === 'voice' ? (
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center animate-pulse">
                     <Mic size={32} />
                  </div>
                  <p className="text-sm font-bold text-navy">Live Voice Mode Active</p>
                  <button onClick={stopLiveConversation} className="text-xs text-red-500 font-bold uppercase underline">Stop Live Mode</button>
                </div>
             ) : (
                <div className="flex gap-2">
                  <button 
                    onClick={startLiveConversation}
                    className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-700 transition-all"
                  >
                    <Mic size={18} />
                  </button>
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask Mou AI anything..."
                    className="flex-1 bg-slate-100 rounded-full px-4 text-sm outline-none border-none focus:ring-1 focus:ring-navy"
                  />
                  <button onClick={() => handleSend()} className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center">
                    <Send size={16} />
                  </button>
                </div>
             )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectAssistant;
