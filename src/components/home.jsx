import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './home-page.css';

const HomePage = () => {
  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <img
          src="/images/movi-avatar-no-bg.png"
          alt="Moira Corradini"
          className=" img-fluid mb-3"

        />
        <h1>Hi there, I'm Moira!</h1>
        <h4>Web Developer</h4>
        <Link to="/portfolio" className="btn btn-outline-light mt-3">
           Projects
        </Link>

      </div>
    </div>
  );
};

export default HomePage;
