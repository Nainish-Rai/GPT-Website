import React from "react";
import "./brand.css";
import { google, shopify, slack, dropbox, atlassian } from "./imports";
export default function Brand() {
  return (
    <div className="brands section_padding">
      <div className="brand">
        <img src={google} alt="" srcset="" />
      </div>
      <div className="brand">
        <img src={atlassian} alt="" srcset="" />
      </div>
      <div className="brand">
        <img src={slack} alt="" srcset="" />
      </div>
      <div className="brand">
        <img src={shopify} alt="" srcset="" />
      </div>
      <div className="brand">
        <img src={dropbox} alt="" srcset="" />
      </div>
    </div>
  );
}
