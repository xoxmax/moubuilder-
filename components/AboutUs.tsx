
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-widest">About Mou Builders</h2>
            <h3 className="text-xl text-green-400 font-bold mb-6 italic">
              "Mou Builders – Bashundhara Specialists, Building Bangladesh."
            </h3>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Mou Builders is a Bangladesh-based real estate and construction company with proven expertise in Bashundhara Residential Area and projects across the country.
              </p>
              <p>
                Founded on the principles of trust, transparency, and architectural excellence, we have established ourselves as the premier real estate developer in Dhaka's most prestigious residential area.
              </p>
              <p>
                While our heart is in Bashundhara, our vision is nationwide. We bring the same level of commitment and safety standards to projects in Chattogram, Sylhet, and beyond—building a better Bangladesh, one project at a time.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">30+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">Completed Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">100%</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">Legal Compliance</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Mou Builders Team" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-green-700 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-bold text-2xl mb-1">Safety First</p>
              <p className="text-green-100 text-sm">Every project is engineer-supervised and earthquake-resistant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
