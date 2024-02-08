import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/navbar.css';

 const CustomNavbar = () => {
  return (
    <Navbar className='navbar-custom' variant="light" expand="md">
      <Link to="/" className="navbar-brand">
        <img
          src="/images/logo-movi-dev.png"
          alt="logo"
          style={{ width: '100px', height: 'auto' }}
        />
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <ScrollLink to="about-me" smooth duration={500} className="nav-link ">
            About me
          </ScrollLink>
          <ScrollLink to="portfolio" smooth duration={500} className="nav-link ">
            Projects
          </ScrollLink>
          <ScrollLink to="contact-me" smooth duration={500} className="nav-link ">
            Contact me
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;



