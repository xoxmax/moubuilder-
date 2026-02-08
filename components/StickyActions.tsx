
import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface StickyActionsProps {
  onNavigate: (view: ViewState, slug?: string) => void;
}

const StickyActions: React.FC<StickyActionsProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <button 
        onClick={() => onNavigate('ai-studio')}
        className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-navy text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 group relative transition-all"
      >
        <Sparkles size={28} />
        <span className="absolute right-full mr-3 bg-white text-navy text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-slate-100">
          Open AI Studio
        </span>
      </button>
      <a 
        href="https://wa.me/8801700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <MessageSquare size={28} />
        <span className="absolute right-full mr-3 bg-white text-navy text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-slate-100">
          WhatsApp Us
        </span>
      </a>
      <a 
        href="tel:+8801700000000" 
        className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 bg-white text-navy text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-slate-100">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default StickyActions;
