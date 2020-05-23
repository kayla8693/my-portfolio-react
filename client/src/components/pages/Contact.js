import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        from: "",
        subject: "",
        text: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    }


    // function loadBooks() {
    //     API.getBooks()
    //       .then(res => 
    //         setBooks(res.data)
    //       )
    //       .catch(err => console.log(err));
    //   };


    async function handleSubmit() {
        console.log(formData);

        axios.post("/mail", formData)
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));




    }

    return (
        <>
            <h2 className="pageTitle">Contact</h2>
            <hr />
            <form className="form">
                <label>Name</label><br />
                <input
                    type="text"
                    placeholder="John Smith"
                    className="form-control userName"
                    name="subject"
                    id="name"
                    onChange={handleChange}
                /><br />
                <label>Email</label><br />
                <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="form-control userEmail"
                    name="from"
                    id="email"
                    onChange={handleChange}
                /><br />
                <label htmlFor="comment">Message</label><br />
                <textarea
                    rows="5"
                    className="form-control"
                    name="text"
                    id="comment"
                    onChange={handleChange}
                /><br />
                <input 
                    type="button"
                    value="Submit"
                    className="rounded"
                    id="submit"
                    onClick={handleSubmit}
                />
    

            </form>

        </>
    );
};

export default Contact;