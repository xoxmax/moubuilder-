
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Absolute Hero Image - Image Law Compliance */}
      <img
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=90"
        alt="Mou Builders Premium Project"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-navy/60 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center animate-in fade-in duration-1000">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-green-600/20 backdrop-blur-md text-green-400 text-sm font-black mb-8 border border-green-400/30 uppercase tracking-[0.3em]">
          Building Bangladesh Since 2012
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 drop-shadow-2xl">
          Mou Builders <br />
          <span className="text-green-500">Trusted Real Estate Developer of Bangladesh.</span>
        </h1>
        <p className="text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-medium drop-shadow-md">
          Bashundhara Experts. Nationwide Builders. Delivering high-value residential and commercial landmarks across all districts.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="bg-navy text-white px-10 py-5 rounded-full font-black text-lg hover:bg-slate-800 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
          >
            Explore Projects
            <ArrowRight size={24} />
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center hover:scale-105 active:scale-95"
          >
            Contact Our Team
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <ChevronDown size={40} />
      </div>
    </section>
  );
};

export default Hero;
