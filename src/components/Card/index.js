import React from "react";
import "./Card.css";
export default function Card({ title, image, link, tools }) {
  return (
    <a href={link}>
      <div className="card card-1">
        {title} {image} {tools} 
        <img src={image}/>
      </div>
    </a>
  );
}
