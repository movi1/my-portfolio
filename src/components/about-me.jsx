import React from 'react';
import '../styles/about-me.css';

const AboutMe = () => {
  return (
    <div className="container-about ">
      <h2>About Me</h2>
      <p>
        Hey, I'm Moira, a Full Stack Developer who tries to turn ideas into cool web stuff.
        Recently earned my Full Stack Nano Degree with a solid 91%—yes, I love both the front and the back!
        Proud graduate of a Web Development Bootcamp, where I got hands-on with 
        <span className="font-weight-bold"> HTML, CSS, Bootstrap, JavaScript, React, and APIs.</span>
        Certified by FreeCodeCamp in Responsive Web Design and JavaScript Algorithms.
        Explored the world of Data & SQL with Code First Girls.
        Fluent in both English and Italian—I believe coding languages aren't the only ones worth mastering.
        When I'm not coding, you'll catch me <span className="font-italic">painting on canvas, hitting the weights for a bit of mind-body balance,</span>
        and baking treats for my two children.
        Still in the early stages of my coding adventure, but passionate about continuous learning. 
        Let's build cool stuff together! 🚀
      </p>
      <h1 className="mt-4">Current Tech Toolbox:</h1>
      <p>
        HTML, React, CSS, Python, JavaScript, PHP
        (and a toolkit of Bootstrap, Node.js, SQL, Jest, Git, Jira)
      </p>
    </div>
  );
};

export default AboutMe;

