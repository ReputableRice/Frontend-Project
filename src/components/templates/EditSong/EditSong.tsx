import React from "react"
import styles from "./EditSong.module.css"
import { BiX } from "react-icons/bi"

export default function EditSong({ handleSongUpdate, editingSong, handleEditInput, closeEditSong }) {
    return (
        <>
            {editingSong && (
                <form onSubmit={handleSongUpdate} className={`${styles.songForm} flex flex-col`}>
                    <div className={`${styles.editHeader}`}>
                        <h1>Edit Song</h1>
                        <BiX size={"3rem"} className={styles.close} onClick={closeEditSong} />
                    </div>
                    <label className={`${styles.editLabel}`}>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={editingSong.title}
                            onChange={handleEditInput}
                            required
                            className={`${styles.input}`}
                        />
                    </label>
                    <label className={`${styles.editLabel}`}>
                        Artist:
                        <input
                            type="text"
                            name="author"
                            value={editingSong.author}
                            onChange={handleEditInput}
                            required
                            className={`${styles.input}`}
                        />
                    </label>
                    <label className={`${styles.editLabel}`}>
                        Description:
                        <textarea
                            name="song_desc"
                            value={editingSong.song_desc}
                            onChange={handleEditInput}
                            required
                            className={`${styles.input}`}
                        />
                    </label>
                    <label className={`${styles.editLabel}`}>
                        Image Link:
                        <input
                            type="url"
                            name="image_link"
                            value={editingSong.image_link}
                            onChange={handleEditInput}
                            required
                            className={`${styles.input}`}
                        />
                    </label>
                    <label className={`${styles.editLabel}`}>
                        Song Link:
                        <input
                            type="url"
                            name="song_link"
                            value={editingSong.song_link}
                            onChange={handleEditInput}
                            required
                            className={`${styles.input}`}
                        />
                    </label>
                    <button type="submit" className={`bg-zinc-800 p-3 rounded-md ${styles.editButton}`}>Save Changes</button>
                </form>
            )}
        </>
    )
}