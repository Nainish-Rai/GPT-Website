import React from "react";
import "./feature.css";
export default function Feature({ title, text }) {
  return (
    <div className="feature_container">
      <div className="feature_title">
        <div className="gradient_bar" />
        <h1>{title}</h1>
      </div>
      <div className="feature_text">
        <p>{text}</p>
      </div>
    </div>
  );
}
