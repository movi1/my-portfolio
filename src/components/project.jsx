// Project.jsx
import React from 'react';
import '../styles/portfolio.css';

const Project = ({ title, description, image, link }) => {
  return (
    
    <div className="project">
           <h2 className="project-title">{title}</h2>
      <div className="project-inner">
        <div className="project-front">
          <img src={image} alt={title} className="project-image" />
        </div>
        <div className="project-back">
          <p className="project-details">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
      </div>
   
    </div>
  );
};

export default Project;

