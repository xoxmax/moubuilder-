
import React, { useState } from 'react';
import { AGENTS } from '../constants';
import { Agent } from '../types';
import { Phone, Mail, Star, Verified, X, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';

const OurAgents: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);

  const openAgentModal = (agent: Agent) => {
    setSelectedAgent(agent);
    setActivePortfolioIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeAgentModal = () => {
    setSelectedAgent(null);
    document.body.style.overflow = 'unset';
  };

  const nextPortfolio = () => {
    if (selectedAgent) {
      setActivePortfolioIndex((prev) => (prev + 1) % selectedAgent.portfolio.length);
    }
  };

  const prevPortfolio = () => {
    if (selectedAgent) {
      setActivePortfolioIndex((prev) => (prev - 1 + selectedAgent.portfolio.length) % selectedAgent.portfolio.length);
    }
  };

  return (
    <section id="agents" className="py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-green-700 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Elite Team</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-8 uppercase tracking-tighter">Strategic Advisors</h2>
          <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Professional consultants with unmatched local intelligence. Click on any specialist to view their expert portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {AGENTS.map((agent) => (
            <div 
              key={agent.id} 
              className={`group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border-2 flex flex-col cursor-pointer ${
                agent.isBashundharaExpert 
                  ? 'border-green-600/10 ring-8 ring-green-600/5' 
                  : 'border-slate-50'
              }`}
              onClick={() => openAgentModal(agent)}
            >
              <div className="relative h-[450px] overflow-hidden">
                <img 
                  src={agent.photo} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
                
                {agent.isBashundharaExpert && (
                  <div className="absolute top-8 left-8 z-20">
                    <div className="bg-green-600/95 backdrop-blur-xl text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-2xl border border-white/20">
                      <Verified size={16} />
                      Bashundhara Elite
                    </div>
                  </div>
                )}

                <div className="absolute bottom-10 left-10 right-10 text-white">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400 mb-2">
                     Expert Consultant
                   </p>
                   <h3 className="text-4xl font-black mb-1">{agent.name}</h3>
                   <p className="text-slate-300 font-bold text-sm tracking-wide opacity-80">{agent.specialization}</p>
                </div>

                {/* View Portfolio Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <div className="bg-white text-[#0F172A] px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3">
                     <Briefcase size={16} className="text-green-600" /> View Expert Portfolio
                   </div>
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-1 font-medium">
                  {agent.bio}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold text-[#0F172A]">{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#0F172A] group-hover:text-white transition-all shadow-sm">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold text-[#0F172A]">{agent.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agent Detail Modal */}
        {selectedAgent && (
          <div className="fixed inset-0 z-[100] bg-[#0F172A]/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500">
            <button 
              onClick={closeAgentModal} 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-all z-[110] hover:rotate-90 duration-300"
            >
              <X size={48} />
            </button>

            <div className="bg-white w-full max-w-7xl h-full md:h-[85vh] rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-[12px] border-white">
              {/* Left Side: Agent Photo & Bio */}
              <div className="w-full md:w-[450px] bg-slate-50 p-12 flex flex-col">
                <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                  <img src={selectedAgent.photo} className="w-full h-full object-cover" alt={selectedAgent.name} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#0F172A] leading-none">{selectedAgent.name}</h2>
                  <p className="text-green-700 font-black uppercase text-xs tracking-widest">{selectedAgent.specialization}</p>
                  <div className="w-12 h-1 bg-green-600 rounded-full my-6"></div>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {selectedAgent.bio}
                  </p>
                </div>

                <div className="mt-auto space-y-4 pt-10">
                   <a href={`tel:${selectedAgent.phone}`} className="w-full bg-[#0F172A] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-center block shadow-xl hover:bg-slate-800 transition-all">Call Expert Now</a>
                   <a href={`mailto:${selectedAgent.email}`} className="w-full bg-slate-100 text-[#0F172A] py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-center block border border-slate-200 hover:bg-slate-200 transition-all">Send Inquiry</a>
                </div>
              </div>

              {/* Right Side: Portfolio Gallery */}
              <div className="flex-1 bg-white relative group/gallery overflow-hidden">
                <div className="h-full relative">
                  <img 
                    src={selectedAgent.portfolio[activePortfolioIndex]} 
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700" 
                    alt="Portfolio"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-16 left-16 text-white">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Asset Highlights</span>
                    <h4 className="text-4xl font-black mb-2 uppercase tracking-tight">Recent Successful Milestone</h4>
                    <p className="text-slate-300 font-medium">Project managed by {selectedAgent.name.split(' ')[0]} with 100% committed delivery.</p>
                  </div>

                  {/* Nav Arrows */}
                  {selectedAgent.portfolio.length > 1 && (
                    <>
                      <button onClick={prevPortfolio} className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F172A] transition-all shadow-2xl opacity-0 group-hover/gallery:opacity-100">
                        <ChevronLeft size={32} />
                      </button>
                      <button onClick={nextPortfolio} className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F172A] transition-all shadow-2xl opacity-0 group-hover/gallery:opacity-100">
                        <ChevronRight size={32} />
                      </button>
                    </>
                  )}

                  {/* Progress Indicator */}
                  <div className="absolute top-12 right-12 flex gap-2">
                    {selectedAgent.portfolio.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === activePortfolioIndex ? 'bg-green-500 w-12' : 'bg-white/20 w-4'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurAgents;
