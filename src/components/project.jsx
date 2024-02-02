import React from 'react';
import '../styles/portfolio.css';

const Project = ({ id, title, technologies, description, image, link }) => {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <div className="technologies">{technologies}</div>
      <div className="project-inner">
        <div className="project-front">
          {id === 6 ? (
            <>
              <div className="project-details">{description}</div>
            
            </>
          ) : (
            <img src={image} alt={title} className="project-image" />
          )}
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

