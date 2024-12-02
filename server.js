import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    const { email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: 'smtp.aol.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send(`Error sending email: ${error.message}`);
    }
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});