import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import projects from './projectData.jsx';
import Project from './project.jsx';

import '../styles/portfolio.css';




const Portfolio = () => {
  return (
    <div className="portfolio-page d-flex justify-content-center align-items-center">
      <h1 id="title-portfolio">My Portfolio</h1>
      <Swiper
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className="swiper-container" // Add the Bootstrap class to the Swiper container
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>

            <Project
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              image={project.image}
              link={project.link}
            />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
