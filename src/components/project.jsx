import React from 'react';
import '../styles/portfolio.css';
import { Col } from 'react-bootstrap';

const Project = ({  title, technologies, description, image, link }) => {
  
  return (

    <Col xs={12} sm={12} md={12} lg={12} xl={12}  className="d-flex justify-content-center align-items-center mb-4">

<div className="project projects-container">
        <div className="project-inner">
          <div className="project-info">
            <div className="project-front">
              <h2 className="project-title">{title}</h2>
              <div className="technologies">{technologies}</div>



              <img src={image} alt={title} className="project-image img-fluid" />

            </div>
          </div>
          <div className="project-back">
            <h2 className="project-title">{title}</h2>
            <div className="technologies">{technologies}</div>
            <p className="project-details">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Project;
