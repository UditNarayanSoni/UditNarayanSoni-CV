import React from "react";

const Education = () => {
  return (
    <div>
      <div className="body_heading">
        <h3>Education</h3>
      </div>
      <div className="body_data">
        <p>
          <b>Babu Banarasi Das University,</b> Lucknow — B.Tech(Computer Science
          Engineering)
        </p>
        <p>
          August 2016 - September 2020
          <ul type="square">
            <li>CGPA - 7.63</li>
            <li>Web development course of 1 month from Netcamp Institute</li>
          </ul>
        </p>
        <p>
          <b>Raj English School,</b> Varanasi — Intermediate(12th)
        </p>
        <p>
          July 2014 - March 2016
          <ul type="square">
            <li>CGPA - 6.1</li>
            <li>Gold medalist in running competition</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Education;
