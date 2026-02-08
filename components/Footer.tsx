
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState, slug?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy pt-20 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded">
                <span className="text-navy font-bold text-xl uppercase">MB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-none uppercase">Mou Builders</span>
                <span className="text-green-500 font-semibold text-xs tracking-widest uppercase">Building Bangladesh</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Mou Builders is a Bangladesh-based real estate and construction company with proven expertise in Bashundhara Residential Area and nationwide execution.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Featured Projects</button></li>
              <li><button onClick={() => onNavigate('news-list')} className="hover:text-white transition-colors">News & Media</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('ai-studio')} className="hover:text-white transition-colors">AI Studio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Bashundhara Area</h4>
            <ul className="space-y-4 text-sm text-left">
              <li><button className="hover:text-white transition-colors">Block A Specialists</button></li>
              <li><button className="hover:text-white transition-colors">Block C Developments</button></li>
              <li><button className="hover:text-white transition-colors">Block F High-rises</button></li>
              <li><button className="hover:text-white transition-colors">Block I Land Projects</button></li>
              <li><button className="hover:text-white transition-colors">Block L Joint Ventures</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact info</h4>
            <ul className="space-y-4 text-sm">
              <li>Dhaka: +880 17XX-XXXXXX</li>
              <li>Chattogram: +880 18XX-XXXXXX</li>
              <li>Sylhet: +880 19XX-XXXXXX</li>
              <li>Email: info@moubuilders.com</li>
              <li className="pt-2 italic">Building nationwide across Bangladesh.</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Mou Builders | Real Estate & Construction | Bangladesh</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
