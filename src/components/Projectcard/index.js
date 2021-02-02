import React from "react";
import "./Projectcard.css";
import Card from 'react-bootstrap/Card'

export default function Projectcard({ title, tools, image, link, Github, description }) {
  return (
    <div className="grid-container1">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Tools used:{tools}
    </Card.Text>
    {description}
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup> */}
  <Card.Body>
    <Card.Link href={link}>{title}</Card.Link>
    <Card.Link href={Github}>Github</Card.Link>
  </Card.Body>
</Card>
      

      
{/* 
      <div className="card card-1">

      
        {title}
        
      </a>
        <img className="img" src={image}/>
        <br></br>
        Technologies:{tools}
        <br></br>
        <a href={Github} className="git-style">
          Github Repository
        </a>
      </div> */}
      
    
    </div>
  );
}
