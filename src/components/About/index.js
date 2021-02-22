import React from "react";
import coverImage from "../../assets/cover/alt-cover-image.JPG";
import "./about.css";

function About() {
  return (
    <div className="grid-container2">

      <section className="about-me-photo">
        <h1 id="about">About Me </h1>
        <img
          src={coverImage}
          className="my-2 cover-image"
          style={{ width: "80%", height: "80%"}}
          alt="cover"
        />
      </section>
      <section className="intro">
        Full Stack Web Developer with experience in political science, maritime
        logistics management, and the consistent ability to adapt new
        challenges. Adept at problem solving, developed and debugged mobile
        friendly applications. Recently learned and applied new and unfamiliar
        technologies quickly within the mern stack e.g. graphql,
        apollo-server-express & react context api. Enthusiastic team player that
        has demonstrated a strong desire to implement new and established
        technologies.
      </section>
      <section>
      <h1>Languages</h1>
      <ul>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <h1>Applications</h1>
      <ul>
        <li>NodeJs</li>
        <li>Mysql2</li>
        <li>Sequelize</li>
        <li>Sqlite3</li>
        <li>Bootstrap</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Gitbash</li>
        <li>ExpressJS</li>
        <li>React</li>
        <li>MERN</li>
        <li>GraphQL</li>
      </ul>
    <li>
      <a href="https://drive.google.com/file/d/1eXPHB9eHnkH1zNBDUddnTaMyq_10nI0O/view" target="_blank">My Resume</a>
    </li>

      </section>
      
      
    </div>
  );
}

export default About;
