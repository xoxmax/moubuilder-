
import React from 'react';
import { NEWS } from '../constants';
import { ViewState } from '../types';
import { Calendar, ArrowRight, Tag, Eye } from 'lucide-react';

interface NewsListingProps {
  onNavigate: (view: ViewState, slug?: string) => void;
  limit?: number;
}

const NewsListing: React.FC<NewsListingProps> = ({ onNavigate, limit }) => {
  const displayNews = limit ? NEWS.slice(0, limit) : NEWS;

  const getViews = (id: string, initial: number) => {
    return parseInt(localStorage.getItem(`views_news_${id}`) || String(initial));
  };

  return (
    <div className={`${limit ? '' : 'pt-24 pb-20 bg-white'}`}>
      <div className={`${limit ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {!limit && (
           <div className="mb-12">
             <h1 className="text-4xl font-bold text-navy mb-4">News & Company Updates</h1>
             <p className="text-slate-600">The latest happenings at Bashundhara Builders and the real estate market in Bangladesh.</p>
           </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayNews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col group cursor-pointer"
              onClick={() => onNavigate('news-detail', item.slug)}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy flex items-center gap-1 shadow-md">
                    <Tag size={12} className="text-green-700" />
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-navy/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <Eye size={12} className="text-green-400" />
                    {getViews(item.id, item.viewCount).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-green-700 transition-colors line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1 italic">
                  "{item.summary}"
                </p>
                <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest border-t border-slate-50 pt-6 group-hover:text-green-700 transition-all">
                  Full Story
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsListing;
