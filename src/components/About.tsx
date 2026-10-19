import React, { useState } from 'react';
import { PERSONAL_INFO, ABOUT_TAGS, EDUCATION, HOBBIES } from '../data/portfolioData';
import { EducationItem } from '../types';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'tabla' | 'technical'>('all');

  const renderHobbyIcon = (title: string) => {
    if (title.includes('Tabla')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <ellipse cx="7.5" cy="14" rx="5" ry="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
          <ellipse cx="7.5" cy="13.5" rx="3.5" ry="2" fill="#FDE68A" />
          <circle cx="7.5" cy="13.5" r="1.4" fill="#1C1917" />
          <ellipse cx="16.5" cy="12" rx="5.5" ry="4" fill="#B45309" stroke="#78350F" strokeWidth="1" />
          <ellipse cx="16.5" cy="11.5" rx="4" ry="2.4" fill="#FEF3C7" />
          <circle cx="16.5" cy="11.5" r="1.7" fill="#1C1917" />
        </svg>
      );
    }
    if (title.includes('Music Production')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="10" width="2.5" height="10" rx="1.25" fill="#8B5CF6" />
          <rect x="6.5" y="5" width="2.5" height="15" rx="1.25" fill="#EC4899" />
          <rect x="11" y="2" width="2.5" height="18" rx="1.25" fill="#F59E0B" />
          <rect x="15.5" y="7" width="2.5" height="13" rx="1.25" fill="#10B981" />
          <rect x="20" y="11" width="2.5" height="9" rx="1.25" fill="#3B82F6" />
        </svg>
      );
    }
    if (title.includes('AI') || title.includes('ML')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#EFF6FF" />
          <circle cx="9" cy="12" r="1.6" fill="#2563EB" />
          <circle cx="15" cy="12" r="1.6" fill="#2563EB" />
          <circle cx="12" cy="7" r="1.6" fill="#4F46E5" />
          <circle cx="12" cy="17" r="1.6" fill="#4F46E5" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="#2563EB" strokeWidth="1.5" />
          <line x1="9" y1="12" x2="12" y2="7" stroke="#4F46E5" strokeWidth="1.2" />
          <line x1="15" y1="12" x2="12" y2="7" stroke="#4F46E5" strokeWidth="1.2" />
          <line x1="9" y1="12" x2="12" y2="17" stroke="#4F46E5" strokeWidth="1.2" />
          <line x1="15" y1="12" x2="12" y2="17" stroke="#4F46E5" strokeWidth="1.2" />
        </svg>
      );
    }
    if (title.includes('Coding') || title.includes('DSA')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#FFFBEB" />
          <path d="M16 8L20 12L16 16" stroke="#FFA116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8L4 12L8 16" stroke="#FFA116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 5L10 19" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (title.includes('Teaching') || title.includes('Mentoring')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#F0FDF4" />
          <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#15803D" opacity="0.85" />
          <path d="M6 10.5V16C6 17.5 8.69 19 12 19C15.31 19 18 17.5 18 16V10.5" stroke="#15803D" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M22 8V15" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    return <span style={{ fontSize: '1.25rem' }}>🎯</span>;
  };

  return (
    <section id="about">
      <div className="section-inner">
        {/* Editorial Section Header */}
        <div className="about-header">
          <div className="section-tag">
            <span>Philosophy &amp; Journey</span>
          </div>
          <h2 className="section-title">
            Who I <span className="highlight">Am</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            An engineering scholar at Bipin Tripathi Kumaon Institute of Technology, synthesizing Machine Learning, Embedded Systems, and Classical Indian Rhythm.
          </p>
        </div>

        {/* Section View Tabs (Responsive 2x2 on Mobile, Full Pill on Desktop) */}
        <div className="about-filter-bar" role="tablist" aria-label="About section views">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`about-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <i className="fas fa-compass tab-icon" aria-hidden="true"></i>
            <span>Overview</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'academic'}
            className={`about-tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            <i className="fas fa-graduation-cap tab-icon" aria-hidden="true"></i>
            <span>Academics</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'tabla'}
            className={`about-tab-btn ${activeTab === 'tabla' ? 'active' : ''}`}
            onClick={() => setActiveTab('tabla')}
          >
            <i className="fas fa-drum tab-icon" aria-hidden="true"></i>
            <span>Tabla &amp; Art</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'technical'}
            className={`about-tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            <i className="fas fa-microchip tab-icon" aria-hidden="true"></i>
            <span>Tech Focus</span>
          </button>
        </div>

        {/* MAIN ABOUT GRID */}
        <div className="about-grid">
          {/* LEFT COLUMN: Narrative & Academic Spotlight */}
          <div className="about-left">
            {(activeTab === 'all' || activeTab === 'technical') && (
              <div className="about-narrative-block">
                <blockquote className="about-lead">
                  "Technology and classical music share the exact same root: <strong>mathematical structure, unwavering discipline, and expressive creativity</strong>."
                </blockquote>
                <p className="about-body">
                  Hello! I'm <strong>{PERSONAL_INFO.name}</strong> — an Electronics &amp; Communication Engineering student at <strong>BTKIT Dwarahat</strong>, Uttarakhand. My engineering work focuses on training neural network architectures, audio signal processing pipelines, and interfacing microcontrollers with sensors for real-world IoT systems.
                </p>
                <p className="about-body">
                  Growing up in the Himalayan foothills of Uttarakhand, I developed a natural curiosity for both physical hardware and computational logic. Whether building motion-sensing GSM security circuits with Arduino or classifying music genres with Mel-Frequency Cepstral Coefficients (MFCC) and deep learning, I strive for clean, dependable engineering.
                </p>

                {/* Core Skills & Focus Chips */}
                <div className="about-tags" aria-label="Core Technical Focus Tags">
                  {ABOUT_TAGS.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ACADEMIC BACKGROUND SHOWCASE CARDS (BTKIT College + Nirmala School with Official Logos) */}
            {(activeTab === 'all' || activeTab === 'academic') && (
              <div className="academic-showcase-section">
                <div className="academic-section-header">
                  <div>
                    <h3 className="academic-heading">Academic Background</h3>
                    <p className="academic-subheading">
                      Formal education in Electronics, Computing, and Analytical Sciences
                    </p>
                  </div>
                  <span className="academic-count-badge">
                    {EDUCATION.length} Institutions
                  </span>
                </div>

                <div className="academic-cards-container">
                  {EDUCATION.map((edu: EducationItem) => (
                    <div className="academic-institution-card" key={edu.id}>
                      {/* Logo and Identity Header */}
                      <div className="inst-header">
                        <div className="inst-logo-wrapper">
                          <img
                            src={edu.logo}
                            alt={edu.logoAlt}
                            className="inst-logo-img"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="inst-logo-fallback" style={{ display: 'none' }}>
                            <i className="fas fa-university"></i>
                          </div>
                        </div>

                        <div className="inst-meta">
                          <div className="inst-timeline-bar">
                            <span className="inst-year">{edu.year}</span>
                            <span className="meta-sep" aria-hidden="true">·</span>
                            <span className="inst-status-label">{edu.statusBadge}</span>
                          </div>
                          <h4 className="inst-degree-title">{edu.degree}</h4>
                          <h5 className="inst-school-name">{edu.school}</h5>
                          <div className="inst-affiliation">
                            <i className="fas fa-certificate" style={{ fontSize: '0.75rem', color: 'var(--clr-accent)' }}></i>
                            <span>{edu.affiliation}</span>
                          </div>
                          <div className="inst-location">
                            <i className="fas fa-map-marker-alt" style={{ fontSize: '0.75rem', color: 'var(--clr-text-dim)' }}></i>
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="inst-score-box">
                          <span className="inst-score-value">{edu.score}</span>
                          <span className="inst-score-label">{edu.scoreBadge || 'Aggregate'}</span>
                        </div>
                      </div>

                      {/* Curriculum Highlights */}
                      <div className="inst-body">
                        <div className="inst-highlights-label">Key Pillars &amp; Focus:</div>
                        <ul className="inst-highlights-list">
                          {edu.highlights.map((h, hIdx) => (
                            <li key={hIdx}>
                              <i className="fas fa-check-circle inst-check-icon"></i>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Official Website Link */}
                        {edu.websiteUrl && (
                          <div className="inst-footer">
                            <a
                              href={edu.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inst-link-btn"
                              aria-label={`Visit official website for ${edu.school}`}
                            >
                              <span>Official Institution Portal</span>
                              <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TABLA VISHARAD IN-DEPTH MODULE */}
            {(activeTab === 'all' || activeTab === 'tabla') && (
              <div className="tabla-spotlight-card">
                <div className="tabla-card-header">
                  <div className="tabla-crest-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <ellipse cx="7.5" cy="14" rx="5" ry="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                      <ellipse cx="7.5" cy="13.5" rx="3.5" ry="2" fill="#FDE68A" />
                      <circle cx="7.5" cy="13.5" r="1.4" fill="#1C1917" />
                      <ellipse cx="16.5" cy="12" rx="5.5" ry="4" fill="#B45309" stroke="#78350F" strokeWidth="1" />
                      <ellipse cx="16.5" cy="11.5" rx="4" ry="2.4" fill="#FEF3C7" />
                      <circle cx="16.5" cy="11.5" r="1.7" fill="#1C1917" />
                    </svg>
                  </div>
                  <div>
                    <span className="tabla-kicker">Classical Music Heritage</span>
                    <h4 className="tabla-title">Tabla Visharad — Art Meets Engineering</h4>
                  </div>
                </div>
                <p className="tabla-text">
                  Beyond circuits and algorithms, I hold a formal <strong>Visharad Degree</strong> in classical Indian percussion (Tabla). Classical rhythm is rooted in intricate mathematical subdivisions (Layakari, Tihai, Chakradar) and strict cyclical time structures (Taals like Teentaal 16 beats, Ektaal 12 beats, Jhaptal 10 beats).
                </p>
                <div className="tabla-stats-grid">
                  <div className="tabla-stat-pill">
                    <span className="t-val">8+</span>
                    <span className="t-lbl">Years Classical Training</span>
                  </div>
                  <div className="tabla-stat-pill">
                    <span className="t-val">Visharad</span>
                    <span className="t-lbl">Formal Degree Level</span>
                  </div>
                  <div className="tabla-stat-pill">
                    <span className="t-val">Audio AI</span>
                    <span className="t-lbl">MFCC &amp; Signal Processing</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Focus & Disciplines */}
          <div className="about-right">
            <div className="about-interests-wrap">
              <div className="interests-heading">
                <div>
                  <h3 className="interests-title">Focus &amp; Disciplines</h3>
                  <p className="interests-subtitle">Active creative and engineering pursuits</p>
                </div>
                <span className="interests-badge">Active</span>
              </div>

              <div className="hobby-list">
                {HOBBIES.map((hobby, idx) => (
                  <div className="hobby-item" key={idx}>
                    <div className="hobby-icon">{renderHobbyIcon(hobby.title)}</div>
                    <div className="hobby-text">
                      <strong>{hobby.title}</strong>
                      <span>{hobby.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Info & Verified Metrics Card */}
              <div className="about-profile-snapshot">
                <div className="snapshot-header">
                  <i className="fas fa-user-check" style={{ color: 'var(--clr-accent)' }}></i>
                  <span>Candidate Snapshot</span>
                </div>
                <div className="snapshot-rows">
                  <div className="snapshot-row">
                    <span className="s-label">Degree</span>
                    <span className="s-val">B.Tech ECE (2023–27)</span>
                  </div>
                  <div className="snapshot-row">
                    <span className="s-label">College</span>
                    <span className="s-val">BTKIT Dwarahat</span>
                  </div>
                  <div className="snapshot-row">
                    <span className="s-label">Schooling</span>
                    <span className="s-val">Nirmala Convent (84%)</span>
                  </div>
                  <div className="snapshot-row">
                    <span className="s-label">Art Form</span>
                    <span className="s-val">Tabla Visharad</span>
                  </div>
                  <div className="snapshot-row">
                    <span className="s-label">Location</span>
                    <span className="s-val">Uttarakhand, India</span>
                  </div>
                  <div className="snapshot-row">
                    <span className="s-label">Status</span>
                    <span className="s-val-highlight">Open for Opportunities</span>
                  </div>
                </div>

                <div className="snapshot-actions">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="snapshot-cv-btn"
                  >
                    <i className="fas fa-file-pdf"></i>
                    <span>View Official Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
