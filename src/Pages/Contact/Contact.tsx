import React from 'react'
import Styles from "./Contact.module.css"
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content'>
                    <h1>Contact Us!</h1>
                    <form className={Styles.formContainer}>
                        <p className={Styles.subhead}>CONTACT</p>
                        <div>
                            <label for="email">Email:</label>
                            <input type='text' id='email' name='email' className={Styles.emailLine} />
                        </div>
                        <div>
                            <label for="subject">Subject:</label>
                            <input type='text' id='subject' name='subject' className={Styles.subjectLine} />
                        </div>
                        <div>
                            <label for="message">Message:</label>
                            <textarea type='text' id='message' name='message' className={Styles.messageLine} />
                        </div>
                        <button className={Styles.btnSend}>Send</button>
                    </form>
                    <div className='mt-5'>
                        <h1 className=''>We're also here!</h1>
                        <div className='mt-3'>
                            <SocialIcon url="https://x.com" bgColor='none' />
                            <SocialIcon url="https://tiktok.com" bgColor='none' />
                            <SocialIcon url="https://twitch.tv" bgColor='none' />
                            <SocialIcon url="https://youtube.com" bgColor='none' />
                            <SocialIcon url="https://instagram.com" bgColor='none' />
                            <SocialIcon url="https://spotify.com" bgColor='none' />
                        </div>
                    </div>

                </div>
            </body>
        </>
    )
}