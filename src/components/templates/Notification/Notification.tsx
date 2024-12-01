import React, { useEffect, useState } from "react"
import styles from "./Notification.module.css"

export default function Notification({ message }) {
    const [notiStyle, setNotiStyle] = useState("")

    //animation doesnt work
    useEffect(() => {
        if (message) {
            setNotiStyle("visible")
        } else {
            setNotiStyle("invisible")
        }
    }, [message])

    return (
        <div className="overflow-hidden w-full h-full">
            <div className={`${styles.notificationBorder} ${styles[notiStyle]}`} >
                <div> {message} </div>
            </div>
        </div>
    )
}