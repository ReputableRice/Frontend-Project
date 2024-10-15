import React from 'react'
import './playlists.css'
import { songs } from '../../data/dummy';

export default function Playlists() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content'>
                    <h1>Playlists</h1>
                    <div className="playlist-container">
                        {songs.map((song, index) => (
                            <Playlist key={index} artist={song} />
                        ))}
                    </div>
                </div>
            </body>
        </>
    )
}