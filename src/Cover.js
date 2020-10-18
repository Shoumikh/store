import React from "react";
import HomeImg from "./homeimg.png";
import "./Cover.css";

function Cover() {
  return (
    <div className="cover">
      <img className="cover__image" src={HomeImg} alt="" />
    </div>
  );
}

export default Cover;
