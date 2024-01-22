import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          <Nav.Link as={Link} to="/about-me" className="nav-link " >
            About me
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="nav-link ">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/contact-me" className="nav-link">
            Contact me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;


