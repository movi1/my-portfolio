

import React from 'react';


const SkillBar = ({ name, level }) => {
    return (
        <div className="skill-bar">
            <div className="skill-name">{name}</div>
            <div className="skill-level" style={{ width: `${level}%` }}>    {level}%


            </div>
        </div>
    );
};


export default SkillBar;
