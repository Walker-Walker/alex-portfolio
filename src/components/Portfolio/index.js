import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import "./portfolio.css"
import Card from "../Card";

export default function Portfolio() {
  const projects = [
    
    {
      title: "Shelter Connect",
      image: "screenshot.jpg", //default image paths in public are recognized by React so no need to write path if image is in public
      tools: "NodeJs, Mysql2",
      link:"https://shelter-connection.herokuapp.com/"
      
    },
    {
      title: "Covid-19 Data",
      image: "screenshot2.png",
      tools: "NodeJs, Express Js, Heroku",
      link:"https://covid-19-data-data.herokuapp.com/"
      
    },
    {
      title: "Whats in your Fridge",
      image: "fridge.jpg",
      tools: "NodeJs,MERN",
      link:"https://whats-in-your-fridge-project3.herokuapp.com/"
      
    },
    // {
    //   title: "Shelter Connect",
    //   image: "path here",
    //   tools: "NodeJs",
    //   link:"https://shelter-connection.herokuapp.com/"
      
    // },
  ];
  return (

<div className="grid">
 {projects.map(project => {
            return <Card {...project} key={project.title} />

            
            
            
  })}
    
          </div>
  )

  // jsx img src links href and css grid
  // return div cards  in responsive grid layout
}
