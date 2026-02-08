
import React from 'react';
import { TRUST_POINTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {TRUST_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100 flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-navy font-bold text-xl mb-1">Have a Land in Bashundhara?</p>
                <p className="text-slate-600">Partner with the area specialists for maximum value.</p>
              </div>
              <a 
                href="#contact" 
                className="bg-navy text-white px-8 py-3 rounded-md font-bold hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Joint Venture Inquiry
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=600&q=80" 
                alt="Construction Quality" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80" 
                alt="Modern Living" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
                alt="Real Estate Success" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1527352733477-036195977926?auto=format&fit=crop&w=600&q=80" 
                alt="Engineering" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
