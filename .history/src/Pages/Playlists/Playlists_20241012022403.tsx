import React from 'react'
import './playlists.css'
import { songs } from '../../data/dummy';
import Playlist from './Playlist'

export default function Playlists() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content'>
                    <p>Playlists</p>
                    <div className="playlist-container">
                        <div className="playlist-grid">
                            {songs.map((song, index) => (
                                <Playlist key={index} artist={song} />
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}