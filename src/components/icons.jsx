// SocialIcons.js

import React from 'react';
import '../styles/icons.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icon'>
      <a href="https://github.com/movi1" target="_blank" rel="noopener noreferrer">
        <FaGithub size={27} />
      </a>

      <a href="https://www.linkedin.com/in/moira-corradini/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={27} />
      </a>
    </div>
  );
};

export default SocialIcons;
