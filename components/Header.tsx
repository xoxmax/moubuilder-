
import React, { useState } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewState, slug?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', view: 'home' as ViewState },
    { name: 'Services', href: '#services', view: 'home' as ViewState },
    { name: 'Projects', href: '#projects', view: 'home' as ViewState },
    { name: 'News', href: '#news', view: 'news-list' as ViewState },
    { name: 'Agents', href: '#agents', view: 'home' as ViewState },
  ];

  const handleNav = (view: ViewState, href: string) => {
    setIsOpen(false);
    if (view === 'home' && href !== '#') {
      onNavigate('home');
      // Small delay to allow home to mount before scrolling
      setTimeout(() => {
        const id = href.substring(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate(view);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-navy flex items-center justify-center rounded">
              <span className="text-white font-bold text-xl">MB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-bold text-xl leading-none uppercase">Mou Builders</span>
              <span className="text-green-700 font-semibold text-[10px] tracking-[0.2em] uppercase">Specialists & Developers</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.view, item.href)}
                className="text-slate-600 hover:text-navy font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
               onClick={() => onNavigate('ai-studio')}
               className="flex items-center gap-2 text-green-700 font-bold bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-all border border-green-100"
            >
              <Sparkles size={16} />
              AI Studio
            </button>
            <a
              href="tel:+8801234567890"
              className="bg-navy text-white px-5 py-2.5 rounded-md font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              +880 1XXX-XXXXXX
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-navy p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 absolute w-full animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.view, item.href)}
                className="text-left text-slate-600 hover:text-navy font-medium text-lg py-2 border-b border-slate-50 last:border-none"
              >
                {item.name}
              </button>
            ))}
             <button
                onClick={() => {setIsOpen(false); onNavigate('ai-studio');}}
                className="flex items-center gap-2 text-green-700 font-bold bg-green-50 px-5 py-4 rounded-md"
            >
              <Sparkles size={20} />
              AI Innovation Studio
            </button>
            <a
              href="tel:+8801234567890"
              className="bg-navy text-white px-5 py-4 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
