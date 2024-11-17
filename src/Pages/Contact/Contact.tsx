import React from 'react'
import { SocialIcon } from 'react-social-icons'
import ContactForm from '../../components/templates/ContactForm/ContactForm'
import Card from '../../components/templates/Card/Card'
import "./Contact.css"

export default function Contact() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <div>
                <div className='content contactPage'>
                    <div className=''>
                        <h1>Contact Us!</h1>
                        <div>
                            <ContactForm />
                            <div className='mt-5 contactSocials'>
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
                    </div>
                    <Card />
                </div>
            </div >
        </>
    )
}