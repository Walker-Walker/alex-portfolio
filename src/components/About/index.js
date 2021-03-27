import React from "react";
import coverImage from "../../assets/cover/alt-cover-image.JPG";
import profileImage from "../../assets/cover/profilesmall.jpg";
import "./about.css";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="grid-container">
      <div className="hero">
        <div className="img-profile-wrapper">
          <img className="img-profile" src={profileImage} alt="profile" />{" "}
        </div>
        <div className="hero-title">
          <h1>Alex Walker</h1>
        </div>
      </div>

      <section className="intro">
        <h3>About me</h3>

        <p>
          Full Stack Web Developer with experience in political science,
          maritime logistics management, and the consistent ability to adapt new
          challenges. Adept at problem solving, developed and debugged mobile
          friendly applications.
          <br />
          <br />
          Recently learned and applied new and unfamiliar technologies quickly
          within the mern stack e.g. graphql, apollo-server-express & react
          context api.
          <br />
          <br />
          Enthusiastic team player that has demonstrated a strong desire to
          implement new and established technologies.
        </p>
      </section>

      <section className="skills">
        <h3>Skills</h3>

        <p>
          Comfortable with Vanilla Javascript, light experience with Jquery, and
          adept with HTML5, and CSS3.
        </p>

        {/* <section className="languages">
          <ul>
            <li>Javascript</li> add icons here
            <li>JQuery</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </section> */}

        <h3>Applications</h3>
        <p>
          I've contributed to projects and assignments, as well as created web
          applications utilizing the following applications and libraries.
        </p>
        <ul className='apps-list'>
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
      </section>
    </div>
  );
}

export default About;
