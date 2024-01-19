
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Portfolio from './components/portfolio'; // Assuming the Portfolio component is in the same directory
import CustomNavbar from './components/navbar';
import AboutMe from './components/about-me';
import ContactMe from './components/contact-me';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <CustomNavbar />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <AboutMe />
        <ContactMe />
      </Routes>
    </BrowserRouter>
  );

}





export default App;
