import styles from "./Filter.module.css"
import React from "react"
import { BiX } from "react-icons/bi"

export default function Filter({ ReverseAlpha, Alphabetical, closeFilter }) {
    return (
        <>
            <div className={`${styles.filterContainer}`}>
                <h1 className="flex justify-between">
                    <h1 className="w-1/2">Current Filter</h1>
                    <BiX size={"3rem"} onClick={closeFilter} className={styles.closeFilter}/>
                </h1>
                <button onClick={Alphabetical} className={`${styles.filterChip}`}>A-Z</button>
                <button onClick={ReverseAlpha} className={`${styles.filterChip}`}>Z-A</button>
            </div>
        </>
    )
}