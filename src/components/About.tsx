import React from 'react';
import { PERSONAL_INFO, ABOUT_TAGS, EDUCATION, HOBBIES } from '../data/portfolioData';

export const About: React.FC = () => {
  const renderHobbyIcon = (title: string) => {
    if (title.includes('Tabla')) {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FFFBEB" />
          <path d="M16 8L20 12L16 16" stroke="#FFA116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8L4 12L8 16" stroke="#FFA116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 5L10 19" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (title.includes('Teaching') || title.includes('Mentoring')) {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#F0FDF4" />
          <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#15803D" opacity="0.85" />
          <path d="M6 10.5V16C6 17.5 8.69 19 12 19C15.31 19 18 17.5 18 16V10.5" stroke="#15803D" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M22 8V15" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    return <span style={{ fontSize: '1.2rem' }}>🎯</span>;
  };

  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-header">
          <div className="section-tag">
            About the Engineer
          </div>
          <h2 className="section-title">
            Who I <span className="highlight">Am</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            An engineering student at Bipin Tripathi Kumaon Institute of Technology, building at the crossroads of artificial intelligence, embedded hardware, and classical art.
          </p>
        </div>

        <div className="about-grid">
          {/* LEFT COLUMN: text + education panel */}
          <div className="about-left">
            <p className="about-lead">
              "Technology and classical music share the same root: <strong>structure, precision, and expressive creativity</strong>."
            </p>
            <p className="about-body">
              Hello! I'm <strong>{PERSONAL_INFO.name}</strong>, pursuing an Electronics &amp; Communication Engineering degree at BTKIT, Uttarakhand. My core focus lies in developing intelligent machine learning models, training neural architectures, and deploying embedded systems on microcontrollers for real-world impact.
            </p>
            <p className="about-body">
              Beyond engineering, I am a trained <strong>tabla artist holding a Visharad degree</strong>. This formal classical training informs my problem-solving approach with rhythmic discipline, deep patience, and attention to nuanced patterns.
            </p>

            <div className="about-tags">
              {ABOUT_TAGS.map((tag, idx) => (
                <span className="tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Clean Terminal/Card-inspired education panel */}
            <div className="edu-panel">
              <div className="edu-panel-bar">
                <span className="edu-panel-label">Academic Background</span>
                <span className="edu-panel-filename">education.json</span>
              </div>
              <div className="edu-panel-body">
                {EDUCATION.map((edu, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <div className="edu-divider"></div>}
                    <div className="edu-row">
                      <span className="edu-row-year">{edu.year}</span>
                      <div className="edu-row-info">
                        <div className="edu-row-degree">{edu.degree}</div>
                        <div className="edu-row-school">{edu.school}</div>
                      </div>
                      <span className="edu-row-score">{edu.score}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: interests */}
          <div className="about-right">
            <div className="about-interests-wrap">
              <div className="interests-heading">
                <span className="interests-title">Focus &amp; Disciplines</span>
                <span className="interests-badge">Active Pursuits</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
