import Styles from "../../../Pages/Contact/Contact.module.css"

export default function ContactForm() {
    return (
        <>
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
        </>
    )
}