import React from "react";
// require ("../../images");

function About() {
    return (
        <>
            <h1>About</h1>
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
        </>
    );
};

export default About;