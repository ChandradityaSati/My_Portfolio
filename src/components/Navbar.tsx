import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentView: 'portfolio' | 'admin';
  onNavigateView: (view: 'portfolio' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigateView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (currentView === 'portfolio') {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && scrollPosition >= el.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  useEffect(() => {
    // Close mobile menu on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    if (currentView !== 'portfolio') {
      onNavigateView('portfolio');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div
          className="nav-logo"
          onClick={() => {
            if (currentView !== 'portfolio') onNavigateView('portfolio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Chandraditya <span>CSX</span>
        </div>

        <ul className="nav-links" id="nav-links">
          {currentView === 'portfolio' ? (
            <>
              <li>
                <button
                  type="button"
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'skills' ? 'active' : ''}
                  onClick={() => handleNavClick('skills')}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => handleNavClick('projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-admin-btn"
                  onClick={() => onNavigateView('admin')}
                  title="Admin Dashboard"
                >
                  <i className="fas fa-lock" style={{ fontSize: '0.75rem' }}></i> Admin
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateView('portfolio')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <i className="fas fa-arrow-left"></i> Return to Portfolio
                </button>
              </li>
            </>
          )}
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          id="hamburger"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <ul>
          {currentView === 'portfolio' ? (
            <>
              <li>
                <button
                  type="button"
                  className={activeSection === 'home' ? 'mobile-active' : ''}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'about' ? 'mobile-active' : ''}
                  onClick={() => handleNavClick('about')}
                >
                  About &amp; Academics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'skills' ? 'mobile-active' : ''}
                  onClick={() => handleNavClick('skills')}
                >
                  Skills &amp; Technologies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'projects' ? 'mobile-active' : ''}
                  onClick={() => handleNavClick('projects')}
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={activeSection === 'contact' ? 'mobile-active' : ''}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact &amp; Inquiries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-admin-btn mobile-admin-link"
                  onClick={() => {
                    setMenuOpen(false);
                    onNavigateView('admin');
                  }}
                >
                  <i className="fas fa-lock" style={{ fontSize: '0.75rem' }}></i> Admin Portal
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onNavigateView('portfolio');
                }}
              >
                <i className="fas fa-arrow-left"></i> Return to Portfolio
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
