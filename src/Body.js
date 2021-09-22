import React from "react";
import Achievements from "./Achievements";
import "./Body.css";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="body_content">
      <div className="content_left">
        {/* Education */}
        <Education />
        <br />

        {/* Projects */}
        <Projects />
      </div>

      <div className="content_right">
        {/* Skills */}
        <Skills />
        <br />

        {/* Achievements */}
        <Achievements />
        <br />

        {/* Hobbies */}
        <Hobbies />
        <br />

        {/* Languages */}
        <Languages />
      </div>
    </div>
  );
};

export default Body;
