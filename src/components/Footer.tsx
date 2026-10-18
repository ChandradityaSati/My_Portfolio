import React from 'react';

interface FooterProps {
  onNavigateView: (view: 'portfolio' | 'admin') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateView }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo" onClick={() => scrollTo('home')}>
          Chandraditya Sati
        </div>
        <p className="footer-copy">
          2026 Chandraditya Sati · AI Engineering &amp; Creative Research
        </p>
        <ul className="footer-links">
          <li>
            <button type="button" onClick={() => scrollTo('home')}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo('about')}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => onNavigateView('admin')}
              style={{ color: 'var(--clr-text-main)', fontWeight: 600 }}
            >
              Admin Portal
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};
