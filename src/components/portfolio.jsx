import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css';

import projects from './projectData.jsx';
import Project from './project.jsx';

import '../styles/portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';





const Portfolio = () => {
  return (
    <div className="portfolio-page d-flex justify-content-center align-items-center" name="portfolio">
      <h1 id="title-portfolio">My Portfolio</h1>
      <div className="swiper-container">
        <Swiper
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return <span className={className}>🟢</span>;
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="custom-prev-button">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <Project
                title={project.title}
                technologies={project.technologies}
                description={project.description}
                image={project.image}
                link={project.link}
              />
              <div className="custom-next-button">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;