import "./ContactUs.css";
import { useState } from "react";

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit() {

        setName("");
        setEmail("");
        setMessage("Message sent successfully");
    }

    return (
        <div className="contact-us-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="message">Message</label>
            <textarea id="message" cols="30" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ContactUs;
