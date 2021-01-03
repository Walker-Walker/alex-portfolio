import React from "react";
import "./Card.css";

export default function Card({title, tools, image, link }) {
  return (

    <div className="grid-container1">
     
    <a style={{display:"table-cell"}} href={link} target="_blank" rel="noopener noreferrer"> 
      <div className="card card-1 card-grid">
        <img className="img" src={image} style={{resizeMode:'stretch',width:"100%",height:'80%'}}/>
        Title:{title} Tools:{tools} 
      </div>
    </a>

 {/* <Card.Body>
   <section className="card-title">{title}</section>
  <section className="card-tools">{tools}</section>
 </Card.Body> */}
    </div>
  );
}

