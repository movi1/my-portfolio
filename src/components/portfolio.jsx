import React from "react";
import projects from './projectData.jsx';
import Project from './project.jsx';
import { Card } from "react-bootstrap";
import '../styles/portfolio.css';


const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;