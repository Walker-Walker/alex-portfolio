import React from "react";
import coverImage from "../../assets/cover/alt-cover-image.JPG";
import "./about.css";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="grid-container1">
      <section className="about-me-photo">
        <h1 id="about">About Me </h1>
        <img
          src={coverImage}
          className="my-2 cover-image"
          style={{ width: "50%", height: "50%" }}
          alt="cover"
        />
      </section>
      <section className="intro">
        <Card border="primary" style={{ width: "25rem", height: "35rem" }}>
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Full Stack Web Developer with experience in political science,
              maritime logistics management, and the consistent ability to adapt
              new challenges.
              <br />
              <br />
              Adept at problem solving, developed and debugged mobile friendly
              applications.
              <br /> 
              <br />
              Recently learned and applied new and unfamiliar
              technologies quickly within the mern stack e.g. graphql,
              apollo-server-express & react context api. 
              <br />
              <br />
              Enthusiastic team player that has demonstrated a strong desire to
              implement new and established technologies.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="skills">
        <h1>Skills</h1>
        <Card border="primary" style={{ width: "12rem", height: "14rem" }}>
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <section className="languages">
                <h2>Languages</h2>

                <ul>
                  <li>Javascript</li> add icons here
                  <li>JQuery</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </section>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: "18rem", height: "27rem" }}>
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Applications</Card.Title>
            <Card.Text>
              <section className="apps">
                {/* <h2>Applications</h2> */}
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
              </section>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default About;
