import React from "react";

function About() {
    return (
        <>
            <h1 className="pageTitle">About</h1>
            <hr />
            <img className="img-fluid" id="me" src="/images/me.jpg" alt="Kayla Gordon" />
            <h3>Hey, I'm Kayla.</h3>
            <p>Full Stack Web Developer leveraging a background in psychology and one-on-one customer service/guest
            relations. Recently earned a certificate in Full Stack Development from Southern Methodist University with
            skills in HTML, CSS, JavaScript, responsive web design, jQuery, Node.js, Express.js, and MySQL. Strengths in
            problem-solving, attention to detail, team-work and leadership. As a lead server in one of the most in-demand
            brewpubs in the DFW, I showcased my ability to handle a large work volume while maintaining quality output,
            and improved upon my already excellent task-management skills. Known as an enthusiastic and highly reliable
            individual, I was entrusted with training new employees as well as designing and implementing new protocols
            that successfully strengthened company growth and team morale. Excited to combine my natural creativity,
            curiosity, and passion with web development skills in order to generate meaningful, aesthetic, user-friendly
            apps and websites.
        </p>

        <div className="online row">
            <div className="linkedin col-md-4">
                <a href="https://www.linkedin.com/in/kayla-gordon/" target="blank">
                <i className="fab fa-linkedin fa-lg icon"></i></a>
            </div>

            <div className="github col-md-4">
                <a href="https://github.com/kayla8693" target="blank">
                <i className="fab fa-github icon"></i></a>
            </div>

            <div className="resume col-md-4">
                <a href="/resume/KaylaGordonResume.pdf" target="blank">
                <i className="far fa-file icon"></i></a>
            </div>
        </div>
        </>
    );
};

export default About;