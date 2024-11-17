import styles from "./Filter.module.css"
import React from "react"

export default function Filter({ ReverseAlpha, Alphabetical }) {
    return (
        <>
            <div className={`${styles.filterContainer}`}>
                <h1>Current Filter</h1>
                <button onClick={Alphabetical} className={`${styles.filterChip}`}>A-Z</button>
                <button onClick={ReverseAlpha} className={`${styles.filterChip}`}>Z-A</button>
            </div>
        </>
    )
}