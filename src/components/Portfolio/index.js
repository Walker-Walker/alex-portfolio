import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Card from "../Card";

export default function Portfolio() {
  const projects = [
    {
      title: "card-1",
      image: "path here",
      tools: "tools used ex. MERN",
    },
    {
      title: "card-2",
      image: "path here",
      tools: "tools used ex. MERN",
    },
    {
      title: "card-3",
      image: "path here",
      tools: "tools used ex. MERN",
    },
  ];
  return (


        projects.map(project => {
            return <Card {...project} key={project.title} />
            
            
        })
    
  )

  // jsx img src links href and css grid
  // return div cards  in responsive grid layout
}
