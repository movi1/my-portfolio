import React from 'react';
import '../styles/portfolio.css';
import { Col } from 'react-bootstrap';

const Project = ({ id, title, technologies, description, image, link }) => {
  return (

    <Col xs={12} sm={6} md={6} lg={6} xl={6}  className="d-flex justify-content-center align-items-center">

      <div className="project">
        <div className="project-inner">
          <div className="project-info">
            <div className="project-front">
              <h2 className="project-title">{title}</h2>
              <div className="technologies">{technologies}</div>



              <img src={image} alt={title} className="project-image" />
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

