import React, { useEffect, useState } from "react"
import styles from "./Notification.module.css"

export default function Notification({ message }) {
    const [notiStyle, setNotiStyle] = useState("")

    //doesnt work
    useEffect(() => {
        if (message) {
            setNotiStyle("visible")
        } else {
            setNotiStyle("invisible")
        }
    }, [message])

    return (
        <>
            <div className={`${styles.notificationBorder} ${styles[notiStyle]}`}>
                <div> {message} </div>
            </div>
        </>
    )
}