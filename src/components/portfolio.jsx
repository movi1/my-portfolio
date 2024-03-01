import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import projects from './projectData.jsx';
import Project from './project.jsx';

import '../styles/portfolio.css';






const Portfolio = () => {
  return (
    <div className="portfolio-page d-flex justify-content-center align-items-center" name="portfolio">
      <h1 id="title-portfolio">My Portfolio</h1>
      <div className="swiper-container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
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
        <div className="swiper-button-next">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="swiper-button-prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;