import React from 'react';
import "./Playlist.css"

export default function Playlist({ artist }) {
    return (
        <div className='playlist-item'>
            <img src={artist.image_link} alt={artist.title} className='.playlist-image' />
            <div className="playlist-details">
                <h2 className="playlist-title">{artist.title}</h2>
                <p><strong>Artist:</strong> {artist.author}</p>
                <p>{artist.song_desc}</p>
                <a href={artist.song_link} target="_blank" rel="noopener noreferrer">Listen Now</a>
            </div>
        </div>
    )
}