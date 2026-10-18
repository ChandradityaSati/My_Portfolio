import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'portfolio' | 'admin'>(() => {
    return window.location.hash === '#admin' ? 'admin' : 'portfolio';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentView('admin');
      } else if (currentView === 'admin') {
        setCurrentView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const handleNavigateView = (view: 'portfolio' | 'admin') => {
    setCurrentView(view);
    if (view === 'admin') {
      window.location.hash = '#admin';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <ParticleCanvas />

      <Navbar currentView={currentView} onNavigateView={handleNavigateView} />

      {currentView === 'portfolio' ? (
        <main>
          <Hero />
          <StatsBar />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer onNavigateView={handleNavigateView} />
        </main>
      ) : (
        <AdminDashboard onBackToPortfolio={() => handleNavigateView('portfolio')} />
      )}
    </div>
  );
};

export default App;
