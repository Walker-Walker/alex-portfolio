import React from "react";
import "./Card.css";

export default function Card({ title, tools, image, link, Github }) {
  return (
    <div className="grid-container1">

      

      

      <div className="card card-1">

      <a // used to make the image a and all paramaters passed in one clickable link as well as open in new tab//
      
        style={{ display: "table-cell" }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        >
        {title}
        
      </a>
        <img className="img" src={image}/>
        <br></br>
        Technologies:{tools}
        <br></br>
        <a href={Github} className="git-style">
          Github Repository
        </a>
      </div>
      
    
    </div>
  );
}
