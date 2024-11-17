import React from "react"
import { useState } from "react"
import styles from "./AddSong.module.css"
import { BiX } from "react-icons/bi"

export default function AddSong({ handleAddSong, handleInputChange, newSong, closeAddSong }) {

    return (
        <>
            <form onSubmit={handleAddSong} className={`flex flex-col max-w-96 ${styles.addForm}`}>
                <div className={`${styles.addHeader}`}>
                    <h1>Add A Song</h1>
                    <BiX size={"3rem"} className={styles.close} onClick={closeAddSong} />
                </div>
                <label className="flex flex-col">
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={newSong.title}
                        onChange={handleInputChange}
                        required
                        className={styles.addInput}
                    />
                </label>
                <label className="flex flex-col">
                    Artist:
                    <input
                        type="text"
                        name="author"
                        value={newSong.author}
                        onChange={handleInputChange}
                        required
                        className={styles.addInput}
                    />
                </label>
                <label className="flex flex-col">
                    Description:
                    <textarea
                        name="song_desc"
                        value={newSong.song_desc}
                        onChange={handleInputChange}
                        required
                        className={styles.addTextarea}
                    />
                </label>
                <label className="flex flex-col">
                    Image Link:
                    <input
                        type="url"
                        name="image_link"
                        value={newSong.image_link}
                        onChange={handleInputChange}
                        required
                        className={styles.addInput}
                    />
                </label>
                <label className="flex flex-col">
                    Song Link:
                    <input
                        type="url"
                        name="song_link"
                        value={newSong.song_link}
                        onChange={handleInputChange}
                        required
                        className={styles.addInput}
                    />
                </label>
                <button type="submit" className={`bg-zinc-800 p-3 rounded-md ${styles.addSongButton}`}>Add Song!</button>
            </form>
        </>
    )
}