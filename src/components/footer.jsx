import React from 'react';
import SocialIcons from './icons';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark-footer text-light-footer text-center py-3">
      <div className="footer-container">
        <img
          src="/images/logo-movi-dev.png"
          alt="logo"
          className="logo-img"
        />
        <p className='copyright'>&copy; 2024 All Rights Reserved.</p>
        <div className="social-icons-container">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

