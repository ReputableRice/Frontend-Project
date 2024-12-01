import React, { useEffect } from "react"
import { useState } from "react"
import styles from "./disc.module.css"

export default function Disc({ focus }) {
    const [isPlaying, setIsPlaying] = useState("")

    useEffect(() => {
        if (focus) {
            setIsPlaying("../../public/playing.png")
        } else {
            setIsPlaying("../../public/paused.png")
        }
    })

    return (
        <>
            <img src={isPlaying} className={`fixed z-50 w-11 absolute ${styles.discPosition}`}/>
        </>
    )
}