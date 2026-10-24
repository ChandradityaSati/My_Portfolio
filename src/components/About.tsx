import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { EducationItem } from '../types';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="section-inner">
        {/* Editorial Section Header */}
        <div className="about-header">
          <div className="section-tag">
            <span>01 · Biography &amp; Credentials</span>
          </div>
          <h2 className="section-title">
            Who I <span className="highlight">Am</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Undergraduate engineer at Bipin Tripathi Kumaon Institute of Technology, synthesizing Machine Learning, Embedded Hardware, and Classical Indian Rhythm.
          </p>
        </div>

        {/* TOP TIER: Executive Narrative + Candidate Dossier */}
        <div className="about-main-grid">
          {/* LEFT: Biographical Narrative & Engineering Pillars */}
          <div className="about-narrative-col">
            <div className="about-lead-quote">
              "Engineering and classical Indian music share an identical foundation: <strong>mathematical symmetry, temporal precision, and creative expression</strong>."
            </div>

            <div className="about-prose">
              <p>
                I am <strong>{PERSONAL_INFO.name}</strong>, an Electronics &amp; Communication Engineering scholar at <strong>Bipin Tripathi Kumaon Institute of Technology (BTKIT Dwarahat)</strong>, Uttarakhand. My engineering practice centers on building practical, dependable systems where physical hardware and computational intelligence intersect.
              </p>
              <p>
                From designing motion-sensing GSM security circuits with microcontrollers to engineering audio classification models using Mel-Frequency Cepstral Coefficients (MFCC) and deep neural networks in TensorFlow, I prioritize clean architectural design, rigorous testing, and measurable real-world utility.
              </p>
              <p>
                Anchoring this analytical work is my background as a certified <strong>Tabla Visharad</strong>. Over eight years of formal training in Indian classical rhythm taught me that cyclical time structures, complex tempo subdivisions (<em>Layakari</em>), and mathematical symmetry are the exact principles governing digital signal processing, Fourier analysis, and algorithmic timing.
              </p>
            </div>

            {/* Core Engineering Disciplines */}
            <div className="about-disciplines-section">
              <h4 className="about-disciplines-title">Core Engineering Disciplines</h4>
              <div className="about-disciplines-grid">
                <div className="discipline-card">
                  <div className="discipline-icon-wrap icon-ai">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
                      <path d="M18 10a6 6 0 0 1-12 0" />
                      <line x1="12" y1="16" x2="12" y2="22" />
                      <line x1="8" y1="22" x2="16" y2="22" />
                    </svg>
                  </div>
                  <div className="discipline-content">
                    <h5 className="discipline-name">Edge AI &amp; Audio DSP</h5>
                    <p className="discipline-desc">
                      Audio feature extraction (MFCCs, spectral roll-off), deep learning classification, and model training in TensorFlow.
                    </p>
                  </div>
                </div>

                <div className="discipline-card">
                  <div className="discipline-icon-wrap icon-embedded">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" />
                      <line x1="20" y1="14" x2="23" y2="14" />
                      <line x1="1" y1="9" x2="4" y2="9" />
                      <line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                  </div>
                  <div className="discipline-content">
                    <h5 className="discipline-name">Embedded Hardware &amp; IoT</h5>
                    <p className="discipline-desc">
                      Microcontroller programming (Arduino, C++), sensor interfacing, GSM telemetry alerts, and hardware-software integration.
                    </p>
                  </div>
                </div>

                <div className="discipline-card">
                  <div className="discipline-icon-wrap icon-algo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </div>
                  <div className="discipline-content">
                    <h5 className="discipline-name">Algorithmic Foundations</h5>
                    <p className="discipline-desc">
                      Strong data structures, problem-solving, discrete mathematics, and time-complexity optimization in C++ and Python.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Candidate Dossier & Verified Credentials */}
          <div className="about-dossier-col">
            <div className="dossier-card">
              <div className="dossier-header">
                <div>
                  <span className="dossier-kicker">Verified Dossier</span>
                  <h3 className="dossier-title">{PERSONAL_INFO.name}</h3>
                  <p className="dossier-role">Electronics &amp; Communication Engineering</p>
                </div>
                <div className="dossier-status-pill">
                  <span className="status-dot-pulse"></span>
                  <span>Active Candidate</span>
                </div>
              </div>

              <div className="dossier-table">
                <div className="dossier-row">
                  <span className="d-label">Academic Status</span>
                  <span className="d-val">B.Tech ECE · 3rd Year</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Current Institute</span>
                  <span className="d-val">BTKIT Dwarahat (Govt.)</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Schooling &amp; Board</span>
                  <span className="d-val">Nirmala Convent (84% CBSE)</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Classical Distinction</span>
                  <span className="d-val highlight-val">Tabla Visharad (Degree)</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Geographic Base</span>
                  <span className="d-val">Uttarakhand, India</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Primary Languages</span>
                  <span className="d-val">Python, C++, JavaScript</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Core Frameworks</span>
                  <span className="d-val">TensorFlow, Scikit-Learn, React</span>
                </div>
                <div className="dossier-row">
                  <span className="d-label">Availability</span>
                  <span className="d-val status-open">Open for Opportunities</span>
                </div>
              </div>

              {/* Verified Action CTAs */}
              <div className="dossier-actions">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-btn-primary"
                  aria-label="Download Official Curriculum Vitae"
                >
                  <i className="fas fa-file-pdf" aria-hidden="true"></i>
                  <span>Download Curriculum Vitae</span>
                </a>
                <a
                  href="#contact"
                  className="dossier-btn-secondary"
                  aria-label="Contact Chandraditya"
                >
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <span>Initiate Discussion</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE TIER: Academic Credentials Dossier (BTKIT & Nirmala) */}
        <div className="about-academic-wrapper">
          <div className="academic-section-header">
            <div>
              <span className="academic-kicker">Academic Accreditation</span>
              <h3 className="academic-title">Formal Education &amp; Institutional Credentials</h3>
              <p className="academic-subtitle">
                Accredited institutions providing formal training in physical sciences, computing, and electronic engineering.
              </p>
            </div>
            <div className="academic-counter">
              <span className="counter-num">2</span>
              <span className="counter-text">Verified Institutions</span>
            </div>
          </div>

          <div className="academic-dual-grid">
            {EDUCATION.map((edu: EducationItem) => (
              <div className="academic-card" key={edu.id}>
                {/* Header: Logo, Institutional Details & Score */}
                <div className="card-top-header">
                  <div className="inst-crest-box">
                    <img
                      src={edu.logo}
                      alt={edu.logoAlt}
                      className="inst-crest-img"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="inst-crest-fallback" style={{ display: 'none' }}>
                      <i className="fas fa-university"></i>
                    </div>
                  </div>

                  <div className="inst-info-block">
                    <div className="inst-meta-tags">
                      <span className="inst-period">{edu.year}</span>
                      <span className="inst-dot">·</span>
                      <span className="inst-badge">
                        {edu.levelBadge || (edu.id === 'btkit' ? 'Undergraduate Degree' : 'Senior Secondary')}
                      </span>
                    </div>
                    <h4 className="inst-degree-name">{edu.degree}</h4>
                  </div>

                  <div className="inst-grade-chip" aria-label={`${edu.scoreBadge || 'Academic Score'}: ${edu.score}`}>
                    <div className="grade-badge-kicker">
                      <i className={edu.id === 'btkit' ? 'fas fa-chart-line' : 'fas fa-medal'} aria-hidden="true"></i>
                      <span>{edu.scoreBadge || 'Academic Score'}</span>
                    </div>
                    <div className="grade-value-row">
                      <span className="grade-value">{edu.score}</span>
                    </div>
                    <div className="grade-standing-pill">
                      <span>{edu.statusBadge}</span>
                    </div>
                  </div>
                </div>

                {/* Unified Institutional Metadata: School Name • Affiliation/CBSE • Location */}
                <div
                  className="inst-single-line-meta"
                  aria-label={`Institution: ${edu.school}, Affiliation: ${edu.board || edu.affiliation}, Location: ${edu.location}`}
                >
                  <span className="inst-item-school">
                    <i className={edu.id === 'btkit' ? 'fas fa-university' : 'fas fa-school'} aria-hidden="true"></i>
                    <span className="inst-school-txt">{edu.school}</span>
                  </span>
                  <span className="inst-meta-bullet inst-bullet-primary" aria-hidden="true">•</span>
                  <div className="inst-meta-subrow">
                    <span className="inst-item-board">
                      <span className="inst-board-txt">{edu.board || edu.affiliation}</span>
                    </span>
                    <span className="inst-meta-bullet inst-bullet-secondary" aria-hidden="true">•</span>
                    <span className="inst-item-loc">
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                      <span className="inst-loc-txt">{edu.location}</span>
                    </span>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="card-body-pillars">
                  <span className="pillars-heading">Curriculum Focus &amp; Competencies:</span>
                  <ul className="pillars-list">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Portal Link */}
                {edu.websiteUrl && (
                  <div className="card-footer-action">
                    <a
                      href={edu.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inst-portal-link"
                      aria-label={`Visit official portal for ${edu.school}`}
                    >
                      <span>Official Institute Portal</span>
                      <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM TIER: Tabla Visharad Spotlight (Classical Rhythm & Engineering Symphony) */}
        <div className="about-tabla-spotlight">
          <div className="tabla-spotlight-inner">
            <div className="tabla-banner-header">
              <div className="tabla-symbol-wrap" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="7.5" cy="14" rx="5" ry="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                  <ellipse cx="7.5" cy="13.5" rx="3.5" ry="2" fill="#FDE68A" />
                  <circle cx="7.5" cy="13.5" r="1.4" fill="#1C1917" />
                  <ellipse cx="16.5" cy="12" rx="5.5" ry="4" fill="#B45309" stroke="#78350F" strokeWidth="1" />
                  <ellipse cx="16.5" cy="11.5" rx="4" ry="2.4" fill="#FEF3C7" />
                  <circle cx="16.5" cy="11.5" r="1.7" fill="#1C1917" />
                </svg>
              </div>
              <div className="tabla-header-text">
                <span className="tabla-super-title">Classical Heritage &amp; Algorithmic Discipline</span>
                <h3 className="tabla-main-title">Tabla Visharad — The Symphony of Mathematics, Time &amp; Signal Processing</h3>
              </div>
            </div>

            <p className="tabla-description">
              In Indian classical music, the <strong>Tabla</strong> is not merely an instrument; it is an exacting mathematical science. Earning the formal <strong>Visharad Degree</strong> required over eight years of mastering cyclical time structures (<em>Taals</em> like 16-beat Teentaal), complex fractional subdivisions (<em>Layakari</em>: Dugun, Tigun, Chaugun), and cyclical closures (<em>Tihai</em>). This rigorous discipline provides an innate, intuitive framework for digital signal processing, Fourier frequency decomposition, and temporal pattern recognition in audio machine learning.
            </p>

            <div className="tabla-metrics-row">
              <div className="tabla-metric-item">
                <span className="metric-number">8+</span>
                <span className="metric-title">Years Classical Riyaaz</span>
                <span className="metric-detail">Formal institutional training</span>
              </div>
              <div className="tabla-metric-item">
                <span className="metric-number">Visharad</span>
                <span className="metric-title">Degree Certification</span>
                <span className="metric-detail">Bachelor-equivalent distinction</span>
              </div>
              <div className="tabla-metric-item">
                <span className="metric-number">Audio AI</span>
                <span className="metric-title">Signal Processing</span>
                <span className="metric-detail">MFCCs &amp; Acoustic ML pipelines</span>
              </div>
            </div>

            <div className="tabla-footer-facets">
              <span className="facet-label">Interdisciplinary Foundations:</span>
              <div className="facet-tags">
                <span className="facet-tag">Cyclical Time (Taal)</span>
                <span className="facet-sep">·</span>
                <span className="facet-tag">Layakari Subdivisions</span>
                <span className="facet-sep">·</span>
                <span className="facet-tag">Audio DSP Pipelines</span>
                <span className="facet-sep">·</span>
                <span className="facet-tag">MFCC Feature Engineering</span>
                <span className="facet-sep">·</span>
                <span className="facet-tag">Algorithmic Precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
