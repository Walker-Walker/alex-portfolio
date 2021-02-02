import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import "./portfolio.css";
import Projectcard from "../Projectcard";

export default function Portfolio() {
  const projects = [
    {
      title: "Shelter Connect",
      image: "screenshot.jpg", //default image paths in public are recognized by React so no need to write path if image is in public
      tools: "NodeJs, Mysql2, Sequelize, Bootstrap ",
      Github: " https://github.com/Walker-Walker/Shelter_App",
      link: "https://shelter-connection.herokuapp.com/",
      description:"Shelter Connect is a blogging application that enables users to post details about their shelter location as well as help people reconnect with friends and family in the event of a natural disaster."
    },
    {
      title: "Covid-19 Data",
      image: "screenshot2.png",
      tools: "NodeJs, Express Js, Heroku",
      Github:"https://github.com/Walker-Walker/Covid-19-Data-",
      link: "https://covid-19-data-data.herokuapp.com/",
      description:"Application to check Covid-19 data by state, including rates of infection , death, and recovery."
    },
    {
      title: "What's in your Fridge?",
      image: "fridgescaled.png",
      tools: "NodeJs, MERN, Bootstrap, GraphQL, Mongoose, MongoDB",
      Github:"https://github.com/TheresaRutledge/whats-in-your-fridge",
      link: "https://whats-in-your-fridge-project3.herokuapp.com/",
      description:"We want to provide a single site for users to post and share their favorite recipes with all our subscribers."
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
      {projects.map((project) => {
        return <Projectcard {...project} key={project.title} />;
      })}
    </div>
  );

  // jsx img src links href and css grid
  // return div cards  in responsive grid layout
}
