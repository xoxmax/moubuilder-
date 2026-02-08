
import React, { useEffect, useState } from 'react';
import { NEWS, PROJECTS } from '../constants';
import { ViewState } from '../types';
import { ArrowLeft, Calendar, Tag, Eye, Layers } from 'lucide-react';

interface NewsDetailProps {
  slug: string;
  onNavigate: (view: ViewState, slug?: string) => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ slug, onNavigate }) => {
  const newsItem = NEWS.find(n => n.slug === slug);
  const relatedProject = PROJECTS.find(p => p.id === newsItem?.relatedProjectId);
  const [localViews, setLocalViews] = useState(newsItem?.viewCount || 0);

  useEffect(() => {
    if (newsItem) {
      const key = `views_news_${newsItem.id}`;
      const existing = parseInt(localStorage.getItem(key) || String(newsItem.viewCount));
      const updated = existing + 1;
      localStorage.setItem(key, String(updated));
      setLocalViews(updated);
    }
    window.scrollTo(0, 0);
  }, [slug, newsItem]);

  if (!newsItem) return <div>News not found</div>;

  return (
    <div className="pt-32 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('news-list')}
          className="flex items-center gap-4 text-slate-400 hover:text-navy mb-12 font-black uppercase tracking-widest text-xs transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Updates
        </button>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              {newsItem.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
              <Calendar size={18} />
              {newsItem.date}
            </div>
            <div className="flex items-center gap-2 text-navy font-black text-sm ml-auto">
              <Eye size={20} className="text-green-600" />
              {localViews.toLocaleString()} Professionals Viewed
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-navy mb-12 leading-[1.1] tracking-tighter">
            {newsItem.title}
          </h1>

          <div className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl relative">
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-[700px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl font-black text-navy leading-relaxed border-l-[12px] border-green-600 pl-10 py-4 bg-slate-50 rounded-r-[3rem]">
              {newsItem.summary}
            </p>
            
            <div className="prose prose-2xl max-w-none text-slate-600 leading-relaxed font-medium">
              {newsItem.content.split('\n\n').map((para, i) => (
                <div key={i} className="mb-12">
                  <p className="mb-12">{para}</p>
                  {/* Inline Images - Image Dominance Law */}
                  {i === 0 && newsItem.gallery[0] && (
                    <img src={newsItem.gallery[0]} className="w-full rounded-[3rem] shadow-2xl mb-12" alt="Context 1" />
                  )}
                  {i === 1 && newsItem.gallery[1] && (
                    <img src={newsItem.gallery[1]} className="w-full rounded-[3rem] shadow-2xl mb-12" alt="Context 2" />
                  )}
                </div>
              ))}
            </div>

            {/* Final Image Grid - Not a slider */}
            <div className="pt-16 border-t border-slate-100">
               <h3 className="text-4xl font-black text-navy mb-12 flex items-center gap-4">
                 <Layers className="text-green-600" /> Site Gallery Highlights
               </h3>
               <div className="grid grid-cols-2 gap-8">
                  {newsItem.gallery.slice(2, 8).map((img, i) => (
                    <img key={i} src={img} className="rounded-[2.5rem] w-full h-80 object-cover shadow-2xl hover:scale-105 transition-all duration-500" alt={`Highlight ${i}`} />
                  ))}
               </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            {relatedProject && (
              <div className="sticky top-32 bg-navy text-white rounded-[3rem] p-10 shadow-2xl overflow-hidden relative">
                <img src={relatedProject.image} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Bg" />
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase text-green-400 tracking-widest mb-4 block">Project Reference</span>
                  <h4 className="text-4xl font-black mb-8 leading-none">{relatedProject.name}</h4>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed">Mentioned landmark project. Open the interactive dossier to see structural progress.</p>
                  <button 
                    onClick={() => onNavigate('project-book', relatedProject.slug)}
                    className="w-full bg-white text-navy py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-green-500 hover:text-white transition-all"
                  >
                    Open Dossier
                  </button>
                </div>
              </div>
            )}
            
            <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
              <h4 className="text-xl font-black text-navy mb-8 uppercase tracking-widest">About Mou Builders</h4>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Nationwide construction excellence. Specialized in Bashundhara Block A-L developments. 100% legal compliance guaranteed.
              </p>
              <img src="https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=600&q=80" className="w-full rounded-2xl shadow-xl" alt="Engineering" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
