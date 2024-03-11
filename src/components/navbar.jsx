import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/navbar.css';

const sections = ["about-me", "portfolio", "certificate", "contact-me"];

const handleImageClick = () => {
  console.log('Image clicked');
  window.location.href = "/";
};

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Add any additional logic specific to the ScrollLink click
  };

  return (
    <>
    <Navbar className={`navbar-custom ${isMenuOpen ? 'open' : ''}`} variant="light" expand="md">
      <Link to="/" className="navbar-brand" name="logo" onClick={handleImageClick}>
        <img
          src="/images/logo-movi-dev.png"
          alt="logo"
          style={{ width: '100px', height: 'auto' }}
        />
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <ScrollLink
            to={sections[0]} smooth={true} duration={500} className="nav-link" onClick={handleLinkClick}
          >
            About Me
          </ScrollLink>

          <ScrollLink
            to={sections[1]} smooth={true} duration={500} className="nav-link" onClick={handleLinkClick}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to={sections[2]} smooth={true} duration={500} className="nav-link" onClick={handleLinkClick}
          >
            Certificates
          </ScrollLink>

          <ScrollLink
            to={sections[3]} smooth={true} duration={500} className="nav-link" onClick={handleLinkClick}
          >
            Contact Me
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      {/* Close overlay */}
      {isMenuOpen && <div className="close-overlay" onClick={handleCloseClick} />}
    </>
  );
};

export default CustomNavbar;


