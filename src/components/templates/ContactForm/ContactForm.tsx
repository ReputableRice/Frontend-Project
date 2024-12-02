import "./contactform.css"
import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/send-email', formData);
            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
    };
    return (
        <>
            <form className="formContainer" onSubmit={handleSubmit}>
                <p className="subhead">CONTACT</p>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='text' id='email' name='email' className="emailLine" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type='text' id='subject' name='subject' className="subjectLine" value={formData.subject} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id='message' name='message' className="messageLine" value={formData.message} onChange={handleChange} />
                </div>
                <button className="btnSend" type="submit">Send</button>
            </form>
        </>
    )
}