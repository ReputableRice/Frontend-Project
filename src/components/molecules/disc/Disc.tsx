import React, { useEffect } from "react"
import { useState } from "react"
import styles from "./disc.module.css"
import playing from "../../../../public/playing.png"
import paused from "../../../../public/playing.png"


export default function Disc({ focus }) {
    const [isPlaying, setIsPlaying] = useState("")

    useEffect(() => {
        if (focus) {
            setIsPlaying(playing)
        } else {
            setIsPlaying(paused)
        }
    }, [focus])

    return (
        <>
            <img src={isPlaying} className={`fixed z-50 w-11 absolute ${styles.discPosition}`} alt="a spinning music disc" />
        </>
    )
}