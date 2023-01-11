import React from "react";
import "./article.css";
export default function Article({ img, date, title }) {
  return (
    <div className="article_container">
      <div className="article_image">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="article_info">
        <h2>{date}</h2>
        <h1>{title}</h1>
      </div>
      <h2 className="bot_line">Read Full Article</h2>
    </div>
  );
}
