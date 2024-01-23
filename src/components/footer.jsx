// Footer.js
import React from 'react';
import SocialIcons from './icons';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link to="/" className="footer-brand">
          <img
            src="/images/logo-movi-dev.png"
            alt="logo"
           
          />
        </Link>

        <p >
          &copy; 2024 All rights reserved.
        </p>

        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;

