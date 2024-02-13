import React from 'react';
import SocialIcons from './icons';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" name="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <Link to="/" className="footer-brand">
              <img
                src="/images/logo-movi-dev.png"
                alt="logo"
                className="img-fluid"
              />
            </Link>
          </div>

          <div className="col-md-6">
            <p className="text-center">
              &copy; 2024 All rights reserved.
            </p>
          </div>

          <div className="col-md-3">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

