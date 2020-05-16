import React from 'react';
import { Card } from "react-bootstrap"
// import projects from "../projects.json";


function Project(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className="image img-fulid" variant="top" src={`/images/${props.image}`} />
            <Card.Body>
                <Card.Title className="image-text">
                    <a href={props.deployed} target="blank">
                        {props.title}
                    </a>
                </Card.Title>
                <Card.Text>
                    <a href={props.repo} target="blank">
                        Repository
                        </a><br />
                    <span className="projectDescription">{props.description}</span><br /><br />
                    <strong>Technologies:</strong>

                    {props.techs.map(tech => (
                        <li>{tech}</li>
                    ))}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
};

export default Project;
