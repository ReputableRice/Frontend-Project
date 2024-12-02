import "./contactform.css"
import React from "react"

export default function ContactForm({ confirmEmailSent }) {
    return (
        <>
            <form className="formContainer">
                <h1 className="subhead">CONTACT</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='text' id='email' name='email' className="emailLine" placeholder="Your Email" />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type='text' id='subject' name='subject' className="subjectLine" placeholder="Subject" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id='message' name='message' className="messageLine" placeholder="Your Message" />
                </div>
                <button className="btnSend" onClick={confirmEmailSent} type="reset">Send</button>
            </form>
        </>
    )
}