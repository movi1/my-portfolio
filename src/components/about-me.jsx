import React from 'react';
import SkillBar from './skill-bar';
import '../styles/about-me.css';
import '../styles/skill-bar.css'; 


const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'React', level: 60 },
  { name: 'Python', level: 40 },
  { name: 'JavaScript', level: 60 },
  { name: 'PHP', level: 30 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Node.js', level: 55 },
  { name: 'SQL', level: 60 },
  { name: 'Jest', level: 30 },
  { name: 'Git', level: 75 },
  { name: 'Jira', level: 65 },
];

const AboutMe = () => {
  return (
    <div className="container-about ">
      <h2>About Me</h2>
      <p>
        Hey, I'm Moira, a Full Stack Developer who tries to turn ideas into cool web stuff.
        Recently earned my Full Stack Nano Degree with a solid 91%—yes, I love both the front and the back!</p>
       <p> Proud graduate of a Web Development Bootcamp, where I got hands-on with
        <span className="font-weight-bold"> HTML, CSS, Bootstrap, JavaScript, React, and APIs.</span>
        <p>Certified by FreeCodeCamp in Responsive Web Design and JavaScript Algorithms.
        Explored the world of Data & SQL with Code First Girls.</p>
        Fluent in both English and Italian—I believe coding languages aren't the only ones worth mastering.
       <p> When I'm not coding, you'll catch me <span className="font-italic">painting on canvas, hitting the weights for a bit of mind-body balance,</span>
        and baking treats for my two children.</p>
        Still in the early stages of my coding adventure, but passionate about continuous learning.
        
      </p>
      <h1 className="mt-4"> Programming Language Skill:</h1>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

