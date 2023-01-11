import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import img01 from "../../assets/blog01.png";
import img02 from "../../assets/blog02.png";
import img03 from "../../assets/blog03.png";
import img04 from "../../assets/blog04.png";
import img05 from "../../assets/blog05.png";

export default function Blog() {
  return (
    <div id="blogs" className="blog_section section_margin">
      <div className="blog_heading">
        <h1 className="gradient_text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog_content">
        <div className="art_large">
          <Article
            img={img01}
            date="Sep 26,2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>

        <Article
          img={img02}
          date="Sep 26,2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          img={img03}
          date="Sep 26,2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          img={img04}
          date="Sep 26,2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          img={img05}
          date="Sep 26,2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  );
}
