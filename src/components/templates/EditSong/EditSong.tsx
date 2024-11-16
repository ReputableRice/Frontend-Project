import React from "react"

export default function EditSong({ handleSongUpdate, editingSong, handleEditInput }) {
    return (
        <>
            {editingSong && (
                <form onSubmit={handleSongUpdate} className="song-form flex flex-col">
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={editingSong.title}
                            onChange={handleEditInput}
                            required
                        />
                    </label>
                    <label>
                        Artist:
                        <input
                            type="text"
                            name="author"
                            value={editingSong.author}
                            onChange={handleEditInput}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="song_desc"
                            value={editingSong.song_desc}
                            onChange={handleEditInput}
                            required
                        />
                    </label>
                    <label>
                        Image Link:
                        <input
                            type="url"
                            name="image_link"
                            value={editingSong.image_link}
                            onChange={handleEditInput}
                            required
                        />
                    </label>
                    <label>
                        Song Link:
                        <input
                            type="url"
                            name="song_link"
                            value={editingSong.song_link}
                            onChange={handleEditInput}
                            required
                        />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            )}
        </>
    )
}