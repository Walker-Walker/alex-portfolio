import React from "react";
import "./Card.css";

export default function Card({title, tools, image, link }) {
  return (

    <div className="card-container">
    <a style={{display:"table-cell"}} href={link} target="_blank" rel="noopener noreferrer"> 
      <div className="card card-1 card-grid">
        {/* {title} {image} {tools}  */}
        <img className="img" src={image}/>
      </div>
    </a>
 <Card.Body>
   <section className="card-title">{title}</section>
  <section className="card-tools">{tools}</section>
 </Card.Body>
    </div>
  );
}

