import React from 'react'

export default function Contact() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content'>
                    <h1>Contact Us!</h1>
                    <form>
                        <div className='flex-col'>
                        <label for="email">Email:</label>
                        <input type='text' id='email' name='email'/>
                        </div>
                        <div>
                        <label for="subject">Subject:</label>
                        <input type='text' id='subject' name='subject'/>
                        </div>
                        <div>
                        <label for="message">Subject:</label>
                        <input type='text' id='message' name='message'/>
                        </div>
                    </form>
                    <h1>We're also here!</h1>
                </div>
            </body>
        </>
    )
}