import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="title">
      <div className="profile_name">
        <h1>Udit Narayan Soni</h1>
        <p className="profile_title">
          Frontend Developer, Quick Learner, Problem Solver.
        </p>
      </div>
      <div className="address">
        <p>
          K.54/90 Daranagar, Varanasi,
          <br /> Uttar Pradesh, Pin-code:- 221001 <br />
          <span className="phone_no">
            (+91)-8737862994, 8601753356 <br />
            uditseth188@gmail.com
          </span>
        </p>
        <a href="https://www.github.com/UditNarayanSoni">Github</a>
        <a href="https://www.linkedin.com/in/udit-narayan-soni-82b5b7195">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Title;
