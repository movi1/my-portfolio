import React, { useEffect, useRef } from 'react';
import '../styles/about-me.css';

const SkillBar = ({ name, level }) => {
  // Create a reference to the skill bar element
  const barRef = useRef(null);

  useEffect(() => {
    // Define options for the IntersectionObserver
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Define a callback function to handle intersection events
    const callback = (entries) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting with the viewport
        if (entry.isIntersecting) {
          // If the element is intersecting, trigger the animation
          animateSkillBar();
        }
      });
    };
    


    // Create a new IntersectionObserver instance with the callback and options
    const observer = new IntersectionObserver(callback, options);
    
    // Start observing the skill bar element
    observer.observe(barRef.current);

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  // Function to animate the skill bar
  const animateSkillBar = () => {
    const bar = document.getElementById(name);
    // Use CSS animation to animate the width of the skill bar
    bar.animate([{ width: '0%' }, { width: level + '%' }], {
      duration: 1500, // Animation duration in milliseconds
      fill: 'forwards' // Maintain the final state of the animation
    });
  };

  // Render the SkillBar component
  return (
    <div className="skill" ref={barRef}>
      <h3>{name}</h3>

      <div className="skill-bar" id={name}>
        <div className="skill-progress">
          {/* Render the skill bar with the initial width */}
          <div className="progress-fill" style={{ width: `${level}%` }}></div>
        </div>
      </div>

      {/* Display the skill level percentage */}
      <div className="skill-level-number">{level}%</div>
    </div>
  );
};

export default SkillBar;

