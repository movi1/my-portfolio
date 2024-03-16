import React, { useEffect, useRef } from 'react';
import '../styles/about-me.css';

const SkillBar = ({ name, level }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const animateSkillBar = () => {
      const bar = document.getElementById(name);
      bar.animate([{ width: '0%' }, { width: level + '%' }], {
        duration: 1500,
        fill: 'forwards'
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBar();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(barRef.current);

    return () => {
      observer.disconnect();
    };
  }, [name, level]);

  return (
    <div className="skill" ref={barRef}>
      <h3>{name}</h3>

      <div className="skill-bar" id={name}>
        <div className="skill-progress">
          <div className="progress-fill" style={{ width: `${level}%` }}></div>
        </div>
      </div>

      <div className="skill-level-number">{level}%</div>
    </div>
  );
};

export default SkillBar;

