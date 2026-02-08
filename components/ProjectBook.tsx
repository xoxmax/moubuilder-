
import React, { useState, useEffect, useRef } from 'react';
import { Project, ViewState } from '../types';
import { 
  X, ChevronLeft, ChevronRight, Building, MapPin, CheckCircle, 
  Layers, HardHat, Home, Zap, ShieldCheck, Ruler, Calendar, Phone, 
  MessageCircle, Info, Maximize2, Verified, Building2
} from 'lucide-react';

interface ProjectBookProps {
  project: Project;
  onClose: () => void;
}

const ProjectBook: React.FC<ProjectBookProps> = ({ project, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sliderPos, setSliderPos] = useState(50);
  const totalPages = 10;
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tracking views - increment only on first open in this session
    const key = `views_project_${project.id}`;
    const existing = parseInt(localStorage.getItem(key) || String(project.viewCount));
    localStorage.setItem(key, String(existing + 1));
    
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, [project.id]);

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1));

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const touchStart = useRef(0);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart.current - touchEnd > 50) nextPage();
    if (touchEnd - touchStart.current > 50) prevPage();
  };

  const renderPage = (pageNum: number) => {
    switch (pageNum) {
      case 1: // Page 1: Cover Page
        return (
          <div className="h-full flex flex-col bg-navy animate-in fade-in duration-700">
            <div className="flex-1 relative overflow-hidden">
              <img src={project.image} className="w-full h-full object-cover opacity-80" alt="Cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-16 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <Verified className="text-green-500" size={40} />
                  <span className="bg-green-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em]">Official Dossier</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl leading-none">{project.name}</h1>
                <div className="flex items-center gap-4 text-3xl font-medium text-slate-300">
                  <MapPin size={32} className="text-green-500" /> {project.location}
                </div>
              </div>
            </div>
            <div className="p-12 border-t border-white/10 flex justify-between items-center bg-navy text-white">
               <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-white text-navy font-black text-2xl rounded flex items-center justify-center shadow-2xl">MB</div>
                 <div className="flex flex-col">
                   <span className="text-2xl font-black tracking-widest uppercase">Mou Builders</span>
                   <span className="text-green-500 text-xs font-bold uppercase tracking-[0.2em]">Excellence in Bangladesh</span>
                 </div>
               </div>
               <div className="text-right">
                 <p className="text-slate-400 font-black uppercase text-xs tracking-widest mb-1">Project Status</p>
                 <p className="text-2xl font-black uppercase text-green-500">{project.status}</p>
               </div>
            </div>
          </div>
        );
      case 2: // Page 2: Project Overview
        return (
          <div className="h-full grid lg:grid-cols-2 animate-in slide-in-from-right-10 duration-500">
            <div className="p-16 flex flex-col justify-center bg-slate-50">
               <div className="space-y-8">
                  <h2 className="text-5xl font-black text-navy flex items-center gap-6 leading-none">
                    <Building size={48} className="text-green-700" />
                    Overview
                  </h2>
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-10">
                    <div className="space-y-2">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">Development Model</span>
                       <p className="text-xl font-black text-navy uppercase">{project.clientModel}</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">Architectural Type</span>
                       <p className="text-xl font-black text-navy uppercase">{project.type}</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="relative">
              <img src={project.overviewImage} className="absolute inset-0 w-full h-full object-cover" alt="Overview" />
            </div>
          </div>
        );
      case 3: // Page 3: Exterior Work (GRID of 6)
        return (
          <div className="p-12 h-full flex flex-col animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-4xl font-black text-navy mb-10 flex items-center gap-6 uppercase tracking-tight">
               <Layers className="text-green-700" size={40} /> Exterior Architecture
            </h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-6 flex-1">
              {project.exteriorImages.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Ext ${i}`} />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 4: // Page 4: Structural Work (GRID + Slider)
        return (
          <div className="p-12 h-full flex flex-col animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-4xl font-black text-navy mb-10 flex items-center gap-6 uppercase tracking-tight">
               <HardHat className="text-green-700" size={40} /> RCC Structural Skeleton
            </h2>
            <div className="grid grid-cols-4 gap-6 mb-8">
               {project.structuralImages.slice(0, 4).map((img, i) => (
                 <img key={i} src={img} className="h-48 w-full object-cover rounded-2xl shadow-xl" alt="Struct" />
               ))}
            </div>
            <div className="relative flex-1 rounded-[2.5rem] overflow-hidden group shadow-2xl cursor-ew-resize select-none border-4 border-slate-100"
                 onMouseMove={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
                 }}>
              <img src={project.afterImg} className="absolute inset-0 w-full h-full object-cover" alt="After" />
              <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ width: `${sliderPos}%` }}>
                <img src={project.beforeImg} className="w-full h-full object-cover" style={{ width: `${100 / (sliderPos / 100)}%` }} alt="Before" />
              </div>
              <div className="absolute top-0 bottom-0 w-2 bg-white z-10 shadow-2xl" style={{ left: `${sliderPos}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <ChevronLeft size={20} className="text-navy" />
                  <ChevronRight size={20} className="text-navy" />
                </div>
              </div>
              <div className="absolute top-6 left-6 bg-navy/90 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl">Initial Excavation</div>
              <div className="absolute top-6 right-6 bg-green-600/90 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl">Current Progress</div>
            </div>
          </div>
        );
      case 5: // Page 5: Interior Work
        return (
          <div className="p-12 h-full flex flex-col animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-4xl font-black text-navy mb-10 flex items-center gap-6 uppercase tracking-tight">
               <Home className="text-green-700" size={40} /> Interior Mastery
            </h2>
            <div className="grid grid-cols-2 gap-8 flex-1">
               <div className="grid grid-rows-2 gap-8">
                  <img src={project.interiorImages[0]} className="w-full h-full object-cover rounded-3xl shadow-2xl" alt="Int" />
                  <img src={project.interiorImages[1]} className="w-full h-full object-cover rounded-3xl shadow-2xl" alt="Int" />
               </div>
               <div className="grid grid-cols-2 grid-rows-2 gap-8">
                  {project.interiorImages.slice(2, 6).map((img, i) => (
                    <img key={i} src={img} className="w-full h-full object-cover rounded-3xl shadow-xl" alt="Int" />
                  ))}
               </div>
            </div>
          </div>
        );
      case 6: // Page 6: Materials Used
        return (
          <div className="p-16 h-full flex flex-col justify-center animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-5xl font-black text-navy mb-16 text-center uppercase tracking-widest">Premium Branded Materials</h2>
            <div className="grid grid-cols-2 gap-12">
              {project.materials.map((mat, i) => (
                <div key={i} className="flex items-center gap-8 bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 hover:shadow-2xl transition-all group">
                  <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-xl shrink-0">
                    <img src={mat.image} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" alt={mat.name} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-green-600 tracking-widest">{mat.brand}</span>
                    <h4 className="text-3xl font-black text-navy leading-none mb-2">{mat.name}</h4>
                    <p className="text-slate-500 font-medium">Certified structural grade for multi-storied development.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 7: // Page 7: Specifications
        return (
          <div className="h-full grid lg:grid-cols-2 animate-in slide-in-from-right-10 duration-500">
            <div className="p-16 flex flex-col justify-center bg-navy text-white">
              <h2 className="text-5xl font-black mb-12 flex items-center gap-6 uppercase">
                 <Ruler size={48} className="text-green-500" /> Specs
              </h2>
              <div className="space-y-8">
                 {[
                   { label: 'Land Area', value: project.landArea },
                   { label: 'Total Floors', value: `${project.floors} (G + ${project.floors - 1})` },
                   { label: 'Units', value: project.units },
                   { label: 'Unit Size', value: project.unitSize },
                   { label: 'Parking', value: project.parking },
                   { label: 'High Speed Lifts', value: `${project.lifts} Nos` }
                 ].map((spec, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-slate-400 font-black uppercase text-xs tracking-[0.2em]">{spec.label}</span>
                      <span className="text-2xl font-black tracking-tight">{spec.value}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative">
               <img src={project.floorPlanUrl} className="absolute inset-0 w-full h-full object-contain p-12 bg-white" alt="Floor Plan" />
               <div className="absolute top-8 right-8 bg-navy text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2">
                 <Maximize2 size={16} /> Technical Blueprint
               </div>
            </div>
          </div>
        );
      case 8: // Page 8: Timeline
        return (
          <div className="p-16 h-full flex flex-col animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-5xl font-black text-navy mb-16 flex items-center gap-6 uppercase tracking-tight">
               <Calendar className="text-green-700" size={48} /> Construction Roadmap
            </h2>
            <div className="flex-1 grid grid-cols-4 gap-8">
               <div className="flex flex-col gap-6">
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                     <img src={project.image} className="w-full h-full object-cover" alt="T1" />
                     <div className="absolute inset-0 bg-navy/40 flex items-center justify-center p-8 text-white text-center">
                        <div>
                          <p className="text-2xl font-black leading-none">{project.timeline.start}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Commencement</p>
                        </div>
                     </div>
                  </div>
               </div>
               {project.timeline.milestones.map((m, i) => (
                 <div key={i} className="flex flex-col gap-6 pt-12">
                   <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                      <img src={m.image || project.image} className="w-full h-full object-cover" alt="M" />
                      <div className="absolute inset-0 bg-green-900/40 flex items-center justify-center p-8 text-white text-center">
                        <div>
                          <p className="text-2xl font-black leading-none">{m.date}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest mt-2">{m.event}</p>
                        </div>
                      </div>
                   </div>
                 </div>
               ))}
               <div className="flex flex-col gap-6 pt-24">
                 <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500">
                    <img src={project.overviewImage} className="w-full h-full object-cover" alt="Handover" />
                    <div className="absolute inset-0 bg-navy/60 flex items-center justify-center p-8 text-white text-center">
                        <div>
                          <p className="text-3xl font-black text-green-400 leading-none">{project.timeline.completion}</p>
                          <p className="text-xs font-bold uppercase tracking-widest mt-2">Handover Key</p>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        );
      case 9: // Page 9: Location
        return (
          <div className="p-12 h-full flex flex-col animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-4xl font-black text-navy mb-10 flex items-center gap-6 uppercase tracking-tight">
               <MapPin className="text-green-700" size={40} /> Site & Connectivity
            </h2>
            <div className="flex-1 grid grid-cols-12 gap-10">
               <div className="col-span-8 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.7003025215!2d90.41968843513686!3d23.812403914856056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacf033838493cf00!2sBashundhara%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                  ></iframe>
               </div>
               <div className="col-span-4 space-y-6">
                  {project.locationImages.map((img, i) => (
                    <img key={i} src={img} className="w-full h-1/2 object-cover rounded-3xl shadow-2xl" alt="Area" />
                  ))}
               </div>
            </div>
            <div className="mt-8 flex gap-8">
               <div className="flex-1 bg-slate-50 p-6 rounded-3xl border border-slate-100 font-black text-navy uppercase text-xs tracking-widest text-center">3 min from Evercare Hospital</div>
               <div className="flex-1 bg-slate-50 p-6 rounded-3xl border border-slate-100 font-black text-navy uppercase text-xs tracking-widest text-center">Near IUB / NSU University</div>
            </div>
          </div>
        );
      case 10: // Page 10: Final CTA
        return (
          <div className="h-full flex flex-col animate-in slide-in-from-right-10 duration-500 relative">
            <img src={project.image} className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 grayscale" alt="Final" />
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-16">
              <div className="w-40 h-40 bg-navy text-white rounded-full flex items-center justify-center mb-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] ring-[20px] ring-white">
                <CheckCircle size={80} className="text-green-500" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-navy mb-8 tracking-tighter leading-none">Like what you see?</h2>
              <p className="text-2xl text-slate-500 font-medium max-w-2xl mb-16">
                Explore premium ownership opportunities at {project.name}. Contact our project consultants today.
              </p>
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
                <a href="tel:+8801700000000" className="flex-1 bg-navy text-white py-8 rounded-full font-black text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl">
                  <Phone size={32} /> Call Mou Builders
                </a>
                <a href="https://wa.me/8801700000000" className="flex-1 bg-green-600 text-white py-8 rounded-full font-black text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl">
                  <MessageCircle size={32} /> WhatsApp Us
                </a>
              </div>
              <button onClick={onClose} className="mt-16 text-slate-400 font-black uppercase tracking-[0.5em] text-xs hover:text-navy transition-colors">
                Return to Projects Dashboard
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-3xl flex items-center justify-center p-4">
      <button 
        onClick={onClose} 
        className="absolute top-10 right-10 text-white/50 hover:text-white transition-all z-[110]"
      >
        <X size={60} />
      </button>

      {/* Book Interaction Area */}
      <div 
        ref={bookRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-7xl h-[90vh] bg-white rounded-[4rem] shadow-[0_100px_200px_rgba(0,0,0,0.8)] overflow-hidden border-[24px] border-slate-100 flex flex-col md:flex-row shadow-green-900/20"
      >
        {/* Binding Shadow Simulation */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-black/10 z-30 shadow-[0_0_50px_rgba(0,0,0,0.1)]"></div>
        
        <div className="flex-1 overflow-hidden relative">
          <div key={currentPage} className="h-full">
            {renderPage(currentPage)}
          </div>
        </div>

        {/* Navigation Layers */}
        <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center z-40">
           {currentPage > 1 && (
             <button onClick={prevPage} className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-navy hover:scale-110 active:scale-95 transition-all">
               <ChevronLeft size={40} />
             </button>
           )}
        </div>
        <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center z-40">
           {currentPage < totalPages && (
             <button onClick={nextPage} className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-navy hover:scale-110 active:scale-95 transition-all">
               <ChevronRight size={40} />
             </button>
           )}
        </div>

        {/* Dynamic Page Counter */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none z-40">
           <div className="bg-navy/90 backdrop-blur-md px-8 py-3 rounded-full flex items-center gap-6 shadow-2xl">
              <span className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Page {currentPage} of {totalPages}</span>
              <div className="flex gap-1.5">
                {[...Array(totalPages)].map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i + 1 === currentPage ? 'bg-green-500 w-10' : 'bg-white/20 w-3'}`}></div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBook;
