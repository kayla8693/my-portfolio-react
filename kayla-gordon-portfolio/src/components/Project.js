import React from 'react';
import { Card, Button } from "react-bootstrap"


function Project() {
    return (
        // <div className="wrapper">
        //     <img className="image img-fluid" src={require("../images/tracker.png")} alt="tracker"/>
        // </div>
        <Card style={{ width: '18rem' }}>
            <Card.Img className="image img-fulid" variant="top" src={require("../images/tracker.png")} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Project;
