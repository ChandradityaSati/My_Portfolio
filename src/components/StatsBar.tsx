import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const hasAnimated = useRef(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 1000;
          const frames = 25;
          const intervalTime = duration / frames;

          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / frames;
            setCounts(
              STATS.map((s) => Math.min(s.target, Math.round(s.target * progress)))
            );

            if (step >= frames) {
              clearInterval(interval);
              setCounts(STATS.map((s) => s.target));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar" ref={barRef}>
      <div className="stats-inner">
        {STATS.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <div className="stat-number">{counts[idx]}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
