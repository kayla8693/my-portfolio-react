import React from 'react';
import Project from "../Project";

function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <hr />
            <div className="row repRow">
                <div className="col-md-5">
                    <Project />

                </div>

                <div className="col-md-5">
                    <Project />

                </div>

            </div>



            <div className="row repRow">
            <div className="col-md-5">
                    <Project />

                </div>

                <div className="col-md-5">
                    <Project />

                </div>
            </div>

        </>
    );
};

export default Portfolio;