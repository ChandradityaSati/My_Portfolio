import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /**
   * Renders the authentic official symbol/logo for every tech skill tag
   */
  const renderTechSymbol = (tag: string) => {
    const t = tag.toLowerCase().trim();

    // 1. Python
    if (t === 'python') {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 2. TensorFlow
    if (t === 'tensorflow') {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
          alt="TensorFlow"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 3. Scikit-learn
    if (t.includes('scikit')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
          alt="Scikit-learn"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 4. Librosa (Audio and Music Signal Processing)
    if (t.includes('librosa')) {
      return (
        <svg
          className="p-tag-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="2" y="10" width="2.2" height="4" rx="1.1" fill="#EC4899" />
          <rect x="5.5" y="6" width="2.2" height="12" rx="1.1" fill="#F43F5E" />
          <rect x="9" y="2.5" width="2.2" height="19" rx="1.1" fill="#8B5CF6" />
          <rect x="12.5" y="5" width="2.2" height="14" rx="1.1" fill="#3B82F6" />
          <rect x="16" y="1" width="2.2" height="22" rx="1.1" fill="#06B6D4" />
          <rect x="19.5" y="7" width="2.2" height="10" rx="1.1" fill="#10B981" />
        </svg>
      );
    }

    // 5. React
    if (t === 'react') {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 6. Node.js
    if (t.includes('node')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 7. MongoDB
    if (t.includes('mongo')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 8. Tailwind CSS
    if (t.includes('tailwind')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 9. Arduino
    if (t.includes('arduino')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
          alt="Arduino"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 10. C++
    if (t.includes('c++')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 11. IoT (Internet of Things Connected Microchip)
    if (t === 'iot') {
      return (
        <svg
          className="p-tag-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="14" height="14" rx="3" fill="#0284C7" />
          <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="1.8" fill="#0284C7" />
          <path
            d="M1.5 9h3.5M1.5 12h3.5M1.5 15h3.5M19 9h3.5M19 12h3.5M19 15h3.5M9 1.5v3.5M12 1.5v3.5M15 1.5v3.5M9 19v3.5M12 19v3.5M15 19v3.5"
            stroke="#0284C7"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    // 12. GSM Module (Cellular Tower / Radio Signal)
    if (t.includes('gsm')) {
      return (
        <svg
          className="p-tag-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="3.5" r="2" fill="#D97706" />
          <path
            d="M12 5.5v16.5M7.5 13l4.5-7.5 4.5 7.5M5.5 19l6.5-11 6.5 11M8 22h8"
            stroke="#D97706"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 7.5a10 10 0 000 9M20 7.5a10 10 0 010 9"
            stroke="#F59E0B"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    // 13. Firebase
    if (t.includes('firebase')) {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
          alt="Firebase"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // 14. Git / GitHub
    if (t === 'git') {
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          alt="Git"
          className="p-tag-icon"
          loading="lazy"
        />
      );
    }

    // Default Fallback Icon
    return <i className="fas fa-code p-tag-icon-fallback" style={{ fontSize: '0.75rem', color: 'var(--clr-accent)' }}></i>;
  };

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="projects-header">
          <div className="section-tag">
            <span>Selected Works</span>
          </div>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Engineered systems demonstrating practical machine learning, interactive platforms, and embedded electronics.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div
                  className={`project-status ${
                    project.status === 'In Progress' ? 'wip' : 'live'
                  }`}
                >
                  {project.status}
                </div>
                <div className="project-overlay">
                  <div className="overlay-btn">
                    <i className="fas fa-eye" style={{ fontSize: '0.8rem' }}></i> Quick View
                  </div>
                </div>
              </div>

              <div className="project-body">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* PROJECT TAGS WITH ACTUAL SKILL SYMBOLS AND NAMES */}
                <div className="project-tags" aria-label={`Technologies used in ${project.title}`}>
                  {project.tags.map((tag, tIdx) => (
                    <span className="p-tag" key={tIdx}>
                      {renderTechSymbol(tag)}
                      <span className="p-tag-name">{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span style={{ fontSize: '0.78rem', color: 'var(--clr-text-muted)', fontStyle: 'italic' }}>
                    Click card for detailed architecture
                  </span>
                  <div className="project-links" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} GitHub`}
                      title="View GitHub Repository"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <i className="fab fa-github"></i>
            <span>Browse All Repositories on GitHub</span>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />

            <div className="modal-content">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.75rem',
                }}
              >
                <span className="project-category" style={{ fontSize: '0.78rem', margin: 0 }}>
                  {selectedProject.category}
                </span>
                <span
                  className={`project-status ${
                    selectedProject.status === 'In Progress' ? 'wip' : 'live'
                  }`}
                  style={{ position: 'static' }}
                >
                  {selectedProject.status}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: 'var(--clr-text-main)',
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                }}
              >
                {selectedProject.title}
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--clr-text-body)',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}
              >
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h4
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--clr-text-muted)',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  Core Technologies &amp; Frameworks
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tags.map((tag, idx) => (
                    <span className="p-tag p-tag--modal" key={idx}>
                      {renderTechSymbol(tag)}
                      <span className="p-tag-name">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn-outline"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.65rem 1.6rem', fontSize: '0.88rem' }}
                >
                  <i className="fab fa-github"></i> View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
