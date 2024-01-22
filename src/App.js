
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Portfolio from './components/portfolio';
import AboutMe from './components/about-me';
import ContactMe from './components/contact-me';
import Home from './components/home';
import CustomNavbar from './components/navbar';




function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
