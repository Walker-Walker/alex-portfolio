import React from "react";
import "./Projectcard.css";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

export default function Projectcard({
  title,
  tools,
  image,
  link,
  Github,
  description,
}) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>Tools used:{tools}</Card.Text>
              {description}
              <Card.Link className="link-style" href={link} style={{display:"table-cell"}} target="_blank" rel="noopener noreferrer">
                {title}
                
              </Card.Link>
              <Card.Link className="link-style" href={Github} style={{display:"table-cell"}} target="_blank" rel="noopener noreferrer">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
    </Container>

    // <div className="grid-container1">

    //   <div className="card card-1">

    //   <a // used to make the image a and all paramaters passed in one clickable link as well as open in new tab//

    //     style={{ display: "table-cell" }}
    //     href={link}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     >
    //     {title}

    //   </a>
    //     <img className="img" src={image}/>
    //     <br></br>
    //     Technologies:{tools}
    //     <br></br>
    //     <a href={Github} className="git-style">
    //       Github Repository
    //     </a>
    //   </div>

    // </div>
  );
}
