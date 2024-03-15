import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/home-page.css';
import Portfolio from './portfolio';
import AboutMe from './about-me';
import ContactForm from './contact-me';
import Certificates from './certificate';
import Resume from './resume';

const HomePage = () => {
  return (
    <>

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-home" name="home">
        <div className="row text-center">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src="/images/movi-avatar-no-bg.png"
              alt="Moira Corradini"
              className="img-fluid mb-3 mx-auto"
            />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
            <h1>Hi there, I'm Moira!</h1>
            <h4 className="mt-2">Web Developer</h4>
            <Link to="/portfolio" className="btn btn-outline-light mt-4">
              Projects
            </Link>
          </div>
        </div>

      </div>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Certificates></Certificates>
      <ContactForm></ContactForm>

    </>
  );
};
export default HomePage;
