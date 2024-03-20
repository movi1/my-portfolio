import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './icons';
import '../styles/footer.css';


const handleImageClick = () => {
  console.log('Image clicked');
  window.location.href = "/";
};
const Footer = () => {
  return (
    <footer className="bg-light-footer text-light  center-content">
      <div className="footer-container  ">
        <Link to="/" name="logo" onClick={handleImageClick}>
        <img
          src="./images/logo-movi-dev.png"
          alt="logo"
          className="logo-img"
        />
        </Link>
        <p className='copyright'>&copy; 2024 All Rights Reserved.</p>
        <div className="social-icons-container  mb-4">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

