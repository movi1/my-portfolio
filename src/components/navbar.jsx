import React from 'react';
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
  return (
    <Navbar className='navbar-custom' variant="light" expand="md">
      <Link to="/" className="navbar-brand" name="logo" onClick={handleImageClick}>
        <img
          src="/images/logo-movi-dev.png"
          alt="logo"
          style={{ width: '100px', height: 'auto' }}
        />
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
        <ScrollLink 
            to={sections[0]}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About Me
          </ScrollLink>

          <ScrollLink
            to={sections[1]}
            smooth={true}  
            duration={500}
            className="nav-link"
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to={sections[2]}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Certificates
          </ScrollLink>

          <ScrollLink
            to={sections[3]}  
            smooth={true}
            duration={500}
            className="nav-link"  
          >
            Contact Me
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;



