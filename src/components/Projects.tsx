import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="projects-header">
          <div className="section-tag">
            Selected Works
          </div>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Engineered systems demonstrating practical machine learning, interactive platforms, and hardware electronics.
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

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span className="p-tag" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span style={{ fontSize: '0.78rem', color: 'var(--clr-text-muted)', fontStyle: 'italic' }}>
                    Click to inspect architecture
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
                  Core Technologies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tags.map((tag, idx) => {
                    const t = tag.toLowerCase();
                    let iconUrl: string | null = null;
                    if (t.includes('python')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
                    else if (t.includes('tensorflow')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg';
                    else if (t.includes('react')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
                    else if (t.includes('arduino')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg';
                    else if (t.includes('c++')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg';
                    else if (t.includes('node')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg';
                    else if (t.includes('mongo')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg';
                    else if (t.includes('tailwind')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg';
                    else if (t.includes('scikit')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg';

                    return (
                      <span
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          padding: '0.35rem 0.85rem',
                          background: 'var(--clr-surface-muted)',
                          border: '1px solid var(--clr-border)',
                          borderRadius: '9999px',
                          color: 'var(--clr-text-main)',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {iconUrl && (
                          <img
                            src={iconUrl}
                            alt={tag}
                            style={{ width: '15px', height: '15px', objectFit: 'contain' }}
                          />
                        )}
                        <span>{tag}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'flex-end' }}>
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
