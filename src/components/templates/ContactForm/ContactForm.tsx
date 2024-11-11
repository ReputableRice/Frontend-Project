import "./contactform.css"
import React from "react"

export default function ContactForm() {
    return (
        <>
            <form className="formContainer">
                <p className="subhead">CONTACT</p>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='text' id='email' name='email' className="emailLine" />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type='text' id='subject' name='subject' className="subjectLine" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id='message' name='message' className="messageLine" />
                </div>
                <button className="btnSend">Send</button>
            </form>
        </>
    )
}