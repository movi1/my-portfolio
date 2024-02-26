import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
 import '../styles/about-me.css';


const SkillBar = ({ name, level }) => {
  
      useEffect(() => {
    const bar = document.getElementById(name);
    bar.animate([{width: '0%'}, {width: level + '%'}], {
      duration: 1500,
      fill: 'forwards' 
    });
  }, []);

    return (
     <div className="skill mb-4">
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
