
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Portfolio from './components/portfolio';
import AboutMe from './components/about-me';
import ContactForm from './components/contact-me';
import Home from './components/home';
import CustomNavbar from './components/navbar';
import Footer from './components/footer';
import SocialIcons from './components/icons';
import SkillBar from './components/skill-bar';
import Certificates from './components/certificate';




function App() {
  return (
    <BrowserRouter>

      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/contact-me" element={ <ContactForm />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}




export default App;
