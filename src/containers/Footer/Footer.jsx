import React from "react";
import "./Footer.css";
import gptlogo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="footer_section section_padding">
      <div className="footer_heading">
        <h1 className="gradient_text">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer_bottom">
        <div className="gpt_logo">
          <img src={gptlogo} alt="" srcset="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer_links">
          <div className="link_column links">
            <h1>Links</h1>
            <a href="">Overons</a>
            <a href="">Social Media </a>
            <a href="">Counters</a>
            <a href="">Contact</a>
          </div>
          <div className="link_column company">
            <h1>Company</h1>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy </a>
            <a href="">Contact</a>
          </div>
          <div className="link_column getintouch">
            <h1>Get in touch</h1>
            <a href="">Crechterwoord K12 182 DK Alknjkcb</a>
            <a href="">085-132567 </a>
            <a href="">info@payme.net</a>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <h1>© 2021 GPT-3. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
