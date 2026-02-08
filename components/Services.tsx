
import React from 'react';
import { SERVICES, MATERIAL_LIST } from '../constants';
import { CheckCircle2, ShieldCheck, MapPin, Building, Ruler, Users } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="text-green-700 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Strategic Partnership Models</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-8 uppercase tracking-tighter leading-none">Built on Trust</h2>
          <div className="w-32 h-2 bg-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed">
            Bashundhara Residential Area Specialists with a nationwide execution footprint. 
            Discover the Mou Builders standard of structural excellence and transparency.
          </p>
        </div>

        <div className="space-y-64">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="flex flex-col gap-16 lg:gap-24"
            >
              {/* Image Dominant Grid Section - Always Visible */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {service.images.map((img, i) => (
                  <div 
                    key={i} 
                    className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl group ${
                      i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${service.title} view ${i}`} 
                      className="w-full h-full object-cover aspect-square md:aspect-auto md:h-full transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all duration-500"></div>
                    {/* Badge on first image */}
                    {i === 0 && (
                      <div className="absolute top-8 left-8">
                        <div className="bg-white/95 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
                           <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white">
                             {index === 0 ? <MapPin size={16} /> : index === 1 ? <Users size={16} /> : <Building size={16} />}
                           </div>
                           <span className="text-navy font-black text-[10px] uppercase tracking-widest">Premium Asset 0{index + 1}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Text Information Section */}
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-4">
                    <span className="text-green-600 font-black uppercase tracking-[0.4em] text-xs">Partnership Model 0{index + 1}</span>
                    <h3 className="text-5xl md:text-6xl font-black text-navy leading-none tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  {service.id === 'joint-venture' && (
                    <div className="pt-8 border-t border-slate-100">
                      <h4 className="font-black text-navy mb-8 flex items-center gap-4 uppercase tracking-widest text-sm">
                        <ShieldCheck className="text-green-600" size={24} />
                        Engineering Material Standard
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {MATERIAL_LIST.map((material, mIdx) => (
                          <div key={mIdx} className="bg-slate-50 text-[#0F172A] p-4 rounded-2xl text-xs font-black uppercase border border-slate-100 flex items-center gap-4 hover:bg-green-50 hover:border-green-100 transition-all">
                            <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                            {material}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-green-100 transition-all group">
                      <div className="text-green-600 font-black text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                      <h4 className="font-black text-navy mb-4 text-2xl uppercase tracking-tighter">{step.title}</h4>
                      <p className="text-slate-500 font-medium text-lg leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                  <div className="sm:col-span-2 bg-navy rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="space-y-2 text-center md:text-left">
                       <h4 className="text-2xl font-black uppercase tracking-tight">Interested in {service.title}?</h4>
                       <p className="text-slate-400 font-medium">Our consultants are ready to discuss your Bashundhara property.</p>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                       Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
