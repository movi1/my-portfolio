// SocialIcons.js

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icon'>
      <a href="https://github.com/movi1" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>

      <a href="https://www.linkedin.com/in/moira-corradini/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
