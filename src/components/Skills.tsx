import React, { useEffect, useRef, useState } from 'react';
import { SKILLS, TECH_ITEMS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & ML' | 'IoT & Hardware' | 'Web & Software'>('All');
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = SKILLS.filter((skill) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & ML') return skill.name.includes('Python') || skill.name.includes('Machine Learning');
    if (activeFilter === 'IoT & Hardware') return skill.name.includes('IoT');
    if (activeFilter === 'Web & Software') return skill.name.includes('Web') || skill.name.includes('Data Structures') || skill.name.includes('Music');
    return true;
  });

  const renderSkillSymbol = (skill: (typeof SKILLS)[0]) => {
    if (skill.name === 'Music Production') {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="10" width="2.5" height="10" rx="1.25" fill="#8B5CF6" />
          <rect x="6.5" y="5" width="2.5" height="15" rx="1.25" fill="#EC4899" />
          <rect x="11" y="2" width="2.5" height="18" rx="1.25" fill="#F59E0B" />
          <rect x="15.5" y="7" width="2.5" height="13" rx="1.25" fill="#10B981" />
          <rect x="20" y="11" width="2.5" height="9" rx="1.25" fill="#3B82F6" />
        </svg>
      );
    }
    if (skill.logoUrl) {
      return (
        <img
          src={skill.logoUrl}
          alt={skill.name}
          className="skill-brand-img"
          loading="lazy"
        />
      );
    }
    return <i className={skill.icon}></i>;
  };

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-inner">
        <div className="skills-header">
          <div className="section-tag">
            Capabilities &amp; Stacks
          </div>
          <h2 className="section-title">
            Technical <span className="highlight">Arsenal</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            A methodical skill set bridging statistical machine learning, sensor hardware, and modern full-stack web applications.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="skills-filter-bar">
          {(['All', 'AI & ML', 'IoT & Hardware', 'Web & Software'] as const).map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  {renderSkillSymbol(skill)}
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>

              <p className="skill-desc">{skill.desc}</p>

              <div className="skill-progress-wrap">
                <div className="skill-progress-header">
                  <span>Proficiency</span>
                  <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>{skill.proficiency}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: animated ? `${skill.proficiency}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Tech Strip Marquee */}
        <div className="tech-strip">
          <p className="tech-strip-label">Technologies &amp; Tools in Active Use</p>
          <div className="tech-strip-track" aria-hidden="true">
            {/* Set 1 */}
            {TECH_ITEMS.map((item, idx) => (
              <div className="tech-chip" key={`set1-${idx}`}>
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="tc-icon"
                  loading="lazy"
                />
                <span>{item.name}</span>
              </div>
            ))}

            {/* Set 2 - Duplicate for seamless loop */}
            {TECH_ITEMS.map((item, idx) => (
              <div className="tech-chip" key={`set2-${idx}`}>
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="tc-icon"
                  loading="lazy"
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
