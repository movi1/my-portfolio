import React from "react";
import '../styles/portfolio.css';

// Projects array
const projects = [
  {
    id: 1,
    title: 'travel-bucket-list',
    description: "A React project",
    image: "project1.png",
    link:"https://project1.com" 
  },
  {
    id: 2,
    title: 'Sum-Calculator',
    description: "A Node.js project", 
    image: "project2.jpg",
    link:"https://project2.com"
  },
  {
    id: 3,
    title: 'login-logout-web-app',
    description: "A Node.js project", 
    image: "project2.jpg",
    link:"https://project2.com"
  },
  {
    id: 4,
    title: 'sql-project-liftingweights',
    description: "A Node.js project", 
    image: "project2.jpg",
    link:"https://project2.com"
  },
  {
    id: 5,
    title: 'My-character-game',
    description: "A Node.js project", 
    image: "project2.jpg",
    link:"https://project2.com"
  },  
  {
    id: 6,
    title: 'london-underground-app',
    description: "A Node.js project", 
    image: "project2.jpg",
    link:"https://project2.com"
  }  
];

function Portfolio() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">My Portfolio</h1>

      <div className="row mt-4">
        {projects.map(project => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 export default Portfolio;



