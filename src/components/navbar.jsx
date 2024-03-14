import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

const sections = ["about-me", "resume", "portfolio", "certificate", "contact-me"];

const handleImageClick = () => {
  console.log('Image clicked');
  window.location.href = "/";
};

const CustomNavbar = () => {
  

  return (
    <Navbar
      className='navbar-custom'
      variant="light"
      expand="md"
      
    >
      <Link to="/" className="navbar-brand" name="logo" onClick={handleImageClick}>
        <img src="/images/logo-movi-dev.png" alt="logo" style={{ width: '100px', height: 'auto' }} />
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" >
        <FontAwesomeIcon icon={faHamburger} color='#fff' size='lg'/>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
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
            Resume
          </ScrollLink>
          <ScrollLink
     
            to={sections[2]}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Projects
          </ScrollLink>
          <ScrollLink
        
            to={sections[3]}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Certificates
          </ScrollLink>
          <ScrollLink
        
            to={sections[4]}
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