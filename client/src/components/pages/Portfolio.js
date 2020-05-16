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
                <h2 className="pageTitle">Portfolio</h2>
                <hr />
                {this.state.projects.map(project => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        deployed={project.deployed}
                        repo={project.repo}
                        image={project.image}
                        techs={project.techs}
                    />
                ))}
            </>
        );
    }
};

export default Portfolio;