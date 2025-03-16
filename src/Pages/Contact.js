import React from "react";
import './Contact.css'

const Contact = () => {
    return (
    <>
        <div className="contact-container">
            <div className="contact-text">
                <h4>CONTACT US</h4>
            </div>
        </div>

        <div className="contactform-container">
            <form id="contact-form" method="POST">
                <label htmlFor>Full Name</label>
                <input name="name" placeholder="Enter full name.." type="text" className="user-input"/>

                <label htmlFor>Phone Number</label>
                <input name="phone" placeholder="Enter phone number.." type="text" className="user-input"/>

                <label htmlFor>Email</label>
                <input name="email" placeholder="Enter email.." type="text" className="user-input"/>

                <label htmlFor>Message</label>
                <textarea rows="6" placeholder="Please enter message..." required className="user-input"></textarea>
                </form>
            </div>
            <button type="submit" className="send-button">Send Message</button>
    </>
    )
};

export default Contact;
