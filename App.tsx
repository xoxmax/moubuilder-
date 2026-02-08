
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import ProjectBook from './components/ProjectBook';
import ProjectDetail from './components/ProjectDetail';
import NewsListing from './components/NewsListing';
import NewsDetail from './components/NewsDetail';
import OurAgents from './components/OurAgents';
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import ProjectAssistant from './components/ProjectAssistant';
import AIStudio from './components/AIStudio';
import { ViewState } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  const navigateTo = (view: ViewState, slug: string | null = null) => {
    setCurrentView(view);
    setCurrentSlug(slug);
    if (view !== 'project-book') {
      window.scrollTo(0, 0);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'project-book':
        const pBook = PROJECTS.find(p => p.slug === currentSlug);
        return (
          <>
            <ProjectBook project={pBook!} onClose={() => navigateTo('home')} />
            {/* Keeping home behind it is okay since it's an overlay */}
            {renderHome()}
          </>
        );
      case 'project-detail':
        return <ProjectDetail slug={currentSlug!} onNavigate={navigateTo} />;
      case 'news-list':
        return <NewsListing onNavigate={navigateTo} />;
      case 'news-detail':
        return <NewsDetail slug={currentSlug!} onNavigate={navigateTo} />;
      case 'ai-studio':
        return <AIStudio onNavigate={navigateTo} />;
      case 'home':
      default:
        return renderHome();
    }
  };

  const renderHome = () => (
    <>
      <Hero />
      <Stats />
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <ProjectGallery onNavigate={navigateTo} limit={6} />
      </div>
      <div id="news" className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-navy">Latest News & Updates</h2>
                <p className="text-slate-600 mt-2">Stay informed about our latest milestones and launches.</p>
              </div>
              <button 
                onClick={() => navigateTo('news-list')}
                className="text-navy font-bold hover:text-green-700 transition-colors"
              >
                View All News →
              </button>
            </div>
            <NewsListing onNavigate={navigateTo} limit={3} />
         </div>
      </div>
      <OurAgents />
      <div id="why-us">
        <WhyUs />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigateTo} />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={navigateTo} />
      <StickyActions onNavigate={navigateTo} />
      <ProjectAssistant />
    </div>
  );
};

export default App;
