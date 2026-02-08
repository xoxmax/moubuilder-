
import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, ProjectStatus, ViewState } from '../types';
import { MapPin, Layout, CheckCircle2, Clock, Eye, BookOpen, ExternalLink } from 'lucide-react';

interface ProjectGalleryProps {
  onNavigate: (view: ViewState, slug?: string) => void;
  limit?: number;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onNavigate, limit }) => {
  const [activeFilter, setActiveFilter] = React.useState<ProjectCategory | 'All'>('All');

  const filters: (ProjectCategory | 'All')[] = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const getViews = (id: string, initial: number) => {
    return parseInt(localStorage.getItem(`views_project_${id}`) || String(initial));
  };

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight uppercase">Architectural Portfolio</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Explore the skyline of Bangladesh through our projects. Click any project to open its <span className="text-green-700 font-bold italic">interactive digital dossier</span>.
            </p>
          </div>
          {!limit && (
            <div className="flex flex-wrap gap-3 bg-white p-2 rounded-2xl shadow-xl shadow-navy/5 border border-slate-100">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeFilter === filter
                      ? 'bg-navy text-white shadow-xl'
                      : 'bg-transparent text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* STRICT Grid Layout: Desktop 3, Tablet 2, Mobile 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onNavigate('project-book', project.slug)}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 flex flex-col cursor-pointer hover:-translate-y-4"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl ${
                    project.status === ProjectStatus.COMPLETED 
                      ? 'bg-green-600 text-white' 
                      : project.status === ProjectStatus.ONGOING 
                      ? 'bg-navy text-white'
                      : 'bg-slate-400 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md text-navy px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 shadow-2xl">
                    <Eye size={16} className="text-green-600" />
                    {getViews(project.id, project.viewCount).toLocaleString()}
                  </div>
                </div>

                {/* Open Book Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                   <div className="bg-white text-navy px-8 py-4 rounded-full flex items-center gap-3 font-black text-sm uppercase tracking-widest shadow-2xl">
                     <BookOpen size={20} className="text-green-600" /> Open Dossier
                   </div>
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-3xl font-black text-navy leading-tight">
                    {project.name}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-10 flex-1">
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      <MapPin size={16} className="text-green-600" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      <Layout size={16} className="text-green-600" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{project.floors} Floors Modern Design</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <button className="text-navy font-black text-xs hover:text-green-700 transition-colors flex items-center gap-3 uppercase tracking-[0.2em] group/btn">
                    Explore Details
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
                  {project.status === ProjectStatus.COMPLETED ? (
                    <div className="flex items-center gap-2 text-green-600 text-[10px] font-black uppercase tracking-widest">
                      <CheckCircle2 size={16} /> Verified
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                      <Clock size={16} /> Active
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {displayProjects.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-4 border-dashed border-slate-100">
            <p className="text-slate-400 font-bold text-xl italic">No architectural findings matching your filter.</p>
          </div>
        )}

        {limit && (
          <div className="mt-20 text-center">
             <button 
                onClick={() => onNavigate('home')} 
                className="bg-navy text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:bg-slate-800 transition-all hover:scale-105"
             >
               View Full Portfolio
             </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
