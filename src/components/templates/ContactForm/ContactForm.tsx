import Styles from "./ContactForm.module.css"
import React from "react"

export default function ContactForm() {
    return (
        <>
            <form className={Styles.formContainer}>
                <p className={Styles.subhead}>CONTACT</p>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='text' id='email' name='email' className={Styles.emailLine} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type='text' id='subject' name='subject' className={Styles.subjectLine} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id='message' name='message' className={Styles.messageLine} />
                </div>
                <button className={Styles.btnSend}>Send</button>
            </form>
        </>
    )
}