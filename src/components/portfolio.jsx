import React from "react";
import { useState, useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/portfolio.css';

// Projects array
const projects = [
  {
    id: 1,
    title: 'Travel Bucket List',
    description: "A React project to organize and track your travel dreams.",
    image: "/images/travel.PNG",
    link: "https://github.com/movi1/travel-bucket-list"
  },
  {
    id: 2,
    title: 'Sum Calculator',
    description: "A Node.js project for basic arithmetic calculations.",
    image: "/images/calculator.PNG",
    link: "https://github.com/movi1/Sum-Calculator"
  },
  {
    id: 3,
    title: 'Login Logout Web App',
    description: "A Node.js web app for user authentication.",
    image: "images/login.PNG",
    link: "https://github.com/movi1/login-logout-web-app"
  },
  {
    id: 4,
    title: 'SQL Project - Lifting Weights',
    description: "A Node.js project related to weightlifting.",
    image: "project2.jpg",
    link: "https://github.com/movi1/sql-project-liftingweights"
  },
  {
    id: 5,
    title: 'My Character Game',
    description: "A Node.js project for character name generation.",
    image: "images/character-name.PNG",
    link: "https://movi1.github.io/My-character-game/"
  },
  {
    id: 6,
    title: 'London Underground App',
    description: "A Node.js project related to the London Underground.",
    image: "project2.jpg",
    link: "https://project2.com"
  }
];

// Inside your Portfolio component
function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
    customPaging: function (i) {
      const handleClick = () => {
        slider.current.slickGoTo(i);
      };

      return (
        <div
          key={i}
          onClick={handleClick}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: i === currentSlide ? "#007bff" : "#ddd",
            borderRadius: "50%",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></div>
      );
    },
  };

  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Projects</h1>

      <Slider
        {...settings}
        className="projects-slider"
        afterChange={handleAfterChange}
        ref={(sliderRef) => (slider.current = sliderRef)}
      >
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default Portfolio;
