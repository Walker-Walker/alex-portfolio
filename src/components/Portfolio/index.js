import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Card from "../Card";

export default function Portfolio() {
  const projects = [
    
    {
      title: "Shelter Connect",
      image: "screenshot.jpg",
      tools: "NodeJs",
      link:"https://shelter-connection.herokuapp.com/"
      
    },
    // {
    //   title: "Shelter Connect",
    //   image: "path here",
    //   tools: "NodeJs",
    //   link:"https://shelter-connection.herokuapp.com/"
      
    // },
    // {
    //   title: "Shelter Connect",
    //   image: "path here",
    //   tools: "NodeJs",
    //   link:"https://shelter-connection.herokuapp.com/"
      
    // },
    // {
    //   title: "Shelter Connect",
    //   image: "path here",
    //   tools: "NodeJs",
    //   link:"https://shelter-connection.herokuapp.com/"
      
    // },
  ];
  return (


        projects.map(project => {
            return <Card {...project} key={project.title} />
            
            
        })
    
  )

  // jsx img src links href and css grid
  // return div cards  in responsive grid layout
}
