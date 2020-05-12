import React, { Component } from 'react';
import Project from "../Project";
import projects from "../../projects.json";

class Portfolio extends Component {
    state = {
        projects
    }

    render() {
        return (
            <>
                <h2>Portfolio</h2>
                <hr />
                    {/* <div className="col-md-5"> */}

                        {this.state.projects.map(project => (
                            <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            deployed={project.deployed}
                            repo={project.repo}
                            image={project.image}
                            tech={project.tech}
                            />
                        ))}

                    {/* </div> */}

            </>
        );
    }
};

export default Portfolio;