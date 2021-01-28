import React from "react";
import coverImage from "../../assets/cover/alt-cover-image.JPG";
import "./about.css";

function About() {
  return (
    <div className="grid-container2">

      <section className="about-me-photo">
        <h1 id="about">About me </h1>
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
      
    </div>
  );
}

export default About;
