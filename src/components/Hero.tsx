import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_INFO.typedRoles;
    const current = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setRoleText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === current.length) {
            setIsDeleting(true);
          }
        } else {
          setRoleText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : charIndex === current.length ? 2200 : 75
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-kicker">
            AI Engineering &amp; Creative Research
          </div>

          <h1 className="hero-name">
            Chandraditya Sati
            <br />
            <span className="title-script">Engineer &amp; Artist</span>
          </h1>

          <div className="hero-role-wrapper">
            <span>Specializing in</span>
            <span className="hero-role">
              <span id="typed-role">{roleText}</span>
              <span className="typed-cursor">|</span>
            </span>
          </div>

          <p className="hero-bio">
            An engineering undergraduate at BTKIT combining <strong>Machine Learning</strong> pipelines,
            embedded <strong>IoT systems</strong>, and modern software development. Certified with a formal{' '}
            <strong>Visharad degree in Tabla</strong>, merging analytical logic with classical rhythm.
          </p>

          <div className="hero-editorial-tags">
            <div className="editorial-tag">
              <span>Degree</span> B.Tech ECE '27
            </div>
            <span style={{ color: 'var(--clr-border-strong)' }}>·</span>
            <div className="editorial-tag">
              <span>Arts</span> Tabla Visharad
            </div>
            <span style={{ color: 'var(--clr-border-strong)' }}>·</span>
            <div className="editorial-tag">
              <span>Based</span> Uttarakhand, India
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" onClick={scrollToContact} className="btn-primary">
              <span>Get in Touch</span>
              <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <i className="fas fa-arrow-down" style={{ fontSize: '0.8rem' }}></i>
              <span>Download CV</span>
              <span className="btn-file-badge">PDF</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon--linkedin"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon--github"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon--instagram"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="social-icon social-icon--email"
              aria-label="Send Email"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame-card">
            <div className="portrait-inner-wrap">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                className="portrait-img"
              />
            </div>

            <div className="portrait-caption">
              <span className="portrait-caption-name">{PERSONAL_INFO.name}</span>
              <span className="portrait-caption-sub">BTKIT · ECE</span>
            </div>

            {/* Editorial Floating Badge 1 - AI & ML */}
            <div className="editorial-float-badge badge-top-floating">
              <div className="badge-accent-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
                  alt="TensorFlow"
                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div className="badge-title">Machine Learning</div>
                <div className="badge-sub">TensorFlow &amp; Scikit-learn</div>
              </div>
            </div>

            {/* Editorial Floating Badge 2 - Indian Classical Percussion */}
            <div className="editorial-float-badge badge-bottom-floating">
              <div className="badge-accent-icon" title="Classical Indian Tabla">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="7.5" cy="14" rx="5" ry="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                  <ellipse cx="7.5" cy="13.5" rx="3.5" ry="2" fill="#FDE68A" />
                  <circle cx="7.5" cy="13.5" r="1.4" fill="#1C1917" />
                  
                  <ellipse cx="16.5" cy="12" rx="5.5" ry="4" fill="#B45309" stroke="#78350F" strokeWidth="1" />
                  <ellipse cx="16.5" cy="11.5" rx="4" ry="2.4" fill="#FEF3C7" />
                  <circle cx="16.5" cy="11.5" r="1.7" fill="#1C1917" />
                </svg>
              </div>
              <div>
                <div className="badge-title">Tabla Visharad</div>
                <div className="badge-sub">Formal Classical Degree</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToAbout} role="button" tabIndex={0}>
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};
