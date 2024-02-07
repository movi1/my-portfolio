import React from "react";
import projects from './projectData.jsx';
import Project from './project.jsx';
import { Row, Col } from "react-bootstrap";
import '../styles/portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page" name="portfolio">
      <h1 id="title-project">My Portfolio</h1>
      <Row className="projects-container">
        {projects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} lg={4} xl={4}>
            <Project
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
