import React from "react";
import "./Card.css"
export default function Card({title, image, tools}) {
  return (
  <div className="card card-1">
      {title} {image} {tools}
  </div>

  );
}
