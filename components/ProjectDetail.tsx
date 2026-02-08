
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ViewState } from '../types';
import { MapPin, Building, Ruler, CheckCircle, ArrowLeft, Phone, Eye, Layers, Car, Zap } from 'lucide-react';
import ImageModal from './ImageModal';

interface ProjectDetailProps {
  slug: string;
  onNavigate: (view: ViewState, slug?: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug, onNavigate }) => {
  const project = PROJECTS.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localViews, setLocalViews] = useState(project?.viewCount || 0);

  useEffect(() => {
    if (project) {
      const key = `views_project_${project.id}`;
      const existing = parseInt(localStorage.getItem(key) || String(project.viewCount));
      const updated = existing + 1;
      localStorage.setItem(key, String(updated));
      setLocalViews(updated);
    }
  }, [slug, project]);

  if (!project) return <div>Project not found</div>;

  /* Added fallback for gallery to avoid build errors */
  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-navy mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        {/* Hero Gallery Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer aspect-[16/10]"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src={allImages[activeImage]} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute top-6 left-6">
                 <span className="bg-navy/80 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                   {project.status}
                 </span>
              </div>
              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-md text-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                <Eye size={18} className="text-green-600" />
                {localViews.toLocaleString()} people viewed this
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImage ? 'border-green-600 scale-105 shadow-lg' : 'border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="text-green-700 font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                <Layers size={14} />
                {project.category}
              </div>
              <h1 className="text-4xl font-bold text-navy mb-4 leading-tight">{project.name}</h1>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={20} className="text-green-700" />
                <span className="text-lg font-medium">{project.location}{project.block ? `, ${project.block}` : ''}</span>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">{project.description}</p>

            {/* Table Specifications */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
               <h3 className="font-bold text-navy mb-4 text-sm uppercase tracking-widest border-b border-slate-200 pb-2">Technical Specs</h3>
               <div className="space-y-4">
                  {[
                    { label: 'Project Type', value: project.type, icon: Building },
                    { label: 'Land Area', value: project.landArea || 'N/A', icon: MapPin },
                    { label: 'Number of Floors', value: `${project.floors} (G + ${project.floors-1})`, icon: Ruler },
                    { label: 'Apartment Units', value: project.units || 'N/A', icon: CheckCircle },
                    { label: 'Passenger Lifts', value: project.lifts || 'N/A', icon: Zap },
                    { label: 'Parking Area', value: project.parking || 'N/A', icon: Car },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2 italic">
                         <spec.icon size={14} className="text-green-600" />
                         {spec.label}
                       </span>
                       <span className="font-bold text-navy">{spec.value}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a href="tel:+8801700000000" className="w-full bg-navy text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1">
                <Phone size={24} />
                Request Price Quote
              </a>
            </div>
          </div>
        </div>

        {/* Construction & Features Section */}
        <div className="grid md:grid-cols-2 gap-16 py-16 border-t border-slate-100">
           {project.features && (
              <div>
                <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-2">
                  <CheckCircle className="text-green-600" />
                  Premium Amenities
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
           )}

           {project.constructionImages && project.constructionImages.length > 0 && (
             <div>
                <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-2">
                   <Building className="text-green-600" />
                   Site & Construction Status
                </h3>
                <div className="grid grid-cols-2 gap-4">
                   {project.constructionImages.map((img, i) => (
                      <div key={i} className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                         <img src={img} className="rounded-xl h-48 w-full object-cover shadow-md group-hover:brightness-75 transition-all" />
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                            <Layers className="text-white" />
                         </div>
                      </div>
                   ))}
                </div>
                <p className="mt-4 text-sm text-slate-500 italic">* Actual photos taken by our site engineering team.</p>
             </div>
           )}
        </div>

        {/* Map Section */}
        <div className="py-16 border-t border-slate-100">
           <h3 className="text-2xl font-bold text-navy mb-8">Location Map</h3>
           <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-inner border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.7003025215!2d90.41968843513686!3d23.812403914856056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacf033838493cf00!2sBashundhara%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                title="Location Map"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
           </div>
        </div>
      </div>

      {isModalOpen && (
        <ImageModal 
          images={allImages} 
          currentIndex={activeImage} 
          onClose={() => setIsModalOpen(false)}
          onNext={() => setActiveImage((prev) => (prev + 1) % allImages.length)}
          onPrev={() => setActiveImage((prev) => (prev - 1 + allImages.length) % allImages.length)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
