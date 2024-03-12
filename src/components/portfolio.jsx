import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

import 'swiper/css/navigation';
import 'swiper/css';

import projects from './projectData.jsx';
import Project from './project.jsx';

import '../styles/portfolio.css';


const Portfolio = () => {


  return (
    <div className="portfolio-page d-flex justify-content-center align-items-center" name="portfolio">
      <h1 id="title-portfolio">My Portfolio</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiper-container"
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

        <div className="swiper-button-prev custom-prev-button">

          <TiArrowLeftOutline />
        </div>

        <div className="swiper-button-next custom-next-button">
          <TiArrowRightOutline />


        </div>

      </Swiper>

    </div>

  );
};

export default Portfolio;