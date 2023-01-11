import React from "react";
import "./Possiblity.css";
import possiblityimage from "../../assets/possibility.png";
const Possiblity = () => {
  return (
    <div id="possiblity" className="possiblity_section section_margin">
      <div className="possiblity_image">
        <img src={possiblityimage} alt="" srcset="" />
      </div>
      <div className="possiblity_content">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h2>Request Early Access to Get Started</h2>
      </div>
    </div>
  );
};

export default Possiblity;
