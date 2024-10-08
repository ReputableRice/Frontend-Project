import React from 'react'
import Styles from "./Contact.module.css"

export default function Contact() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content'>
                    <h1>Contact Us!</h1>
                    <form className={Styles.formContainer}>
                        <p>CONTACT</p>
                        <div className=''>
                            <label for="email">Email:</label>
                            <input type='text' id='email' name='email' className={Styles.emailLine} />
                        </div>
                        <div>
                            <label for="subject">Subject:</label>
                            <input type='text' id='subject' name='subject' className={Styles.subjectLine} />
                        </div>
                        <div>
                            <label for="message">Message:</label>
                            <input type='text' id='message' name='message' className={Styles.messageLine} />
                        </div>
                        <button>Submit</button>
                    </form>
                    <h1>We're also here!</h1>
                </div>
            </body>
        </>
    )
}