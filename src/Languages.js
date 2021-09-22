import React from "react";
import "./Languages.css";

const Languages = () => {
  return (
    <div>
      <div className="body_heading">
        <h3>Languages</h3>
      </div>
      <div className="language_data">
        <div className="language_name">
          <p>English</p>
          <p>Hindi</p>
        </div>
        <div className="language_ratting">
          <p>★★★★☆</p>
          <p>★★★★★</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
