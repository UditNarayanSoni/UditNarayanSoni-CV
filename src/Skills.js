import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="body_heading">
        <h3>Skills</h3>
      </div>
      <div className="skill_data">
        <div className="skill_name">
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React Js</p>
          <p>MySQL</p>
          <p>GIT</p>
        </div>
        <div className="skill_ratting">
          <p>★★★☆☆</p>
          <p>★★★★★</p>
          <p>★★★★☆</p>
          <p>★★★☆☆</p>
          <p>★★★☆☆</p>
          <p>★★★☆☆</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
