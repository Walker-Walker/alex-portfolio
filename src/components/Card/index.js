import React from "react";
import "./Card.css";
export default function Card({title, tools, image, link }) {
  return (

    <div className="card-container">
    <a href={link}>
      <div className="card card-1 card-grid">
        {/* {title} {image} {tools}  */}
        <img className="img" src={image}/>
      </div>
    </a>

    </div>
  );
}

