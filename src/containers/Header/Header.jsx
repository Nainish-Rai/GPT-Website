import React from "react";
import "./Header.css";
import peopleimg from "../../assets/people.png";
import aiface from "./../../assets/ai.png";
const Header = () => {
  return (
    <div className="header section_padding" id="home">
      <div className="header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header_input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
          />
          <button id="getstarted">Get Started</button>
        </div>
        <div className="header_people">
          <img src={peopleimg} alt="" srcset="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_image">
        <img src={aiface} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Header;
