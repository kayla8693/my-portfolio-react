import React from "react";

function Contact() {
    return (
        <>
            <h2 className="pageTitle">Contact</h2>
            <hr />
            <form className="form">
                <label>Name</label><br />
                <input
                    type="text"
                    placeholder="John Smith"
                    className="form-control"
                    id="name"
                /><br />
                <label>Email</label><br />
                <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="form-control"
                    id="email"
                /><br />
                <label htmlFor="comment">Message</label><br />
                <textarea
                    rows="5"
                    className="form-control"
                    id="comment"
                /><br />
                <input 
                type="button"
                value="Submit"
                className="rounded"
                id="submit"
                />
    

            </form>

        </>
    );
};

export default Contact;