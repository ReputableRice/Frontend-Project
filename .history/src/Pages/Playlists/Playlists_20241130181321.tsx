import React, { useEffect } from 'react'
import './playlists.css'
import Playlist from '../../components/templates/Playlist/Playlist';
import Masonry from 'react-masonry-css';
import { useState } from 'react';

export default function Playlists({ }) {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    const breakpoints = {
        default: 4,
        1500: 3,
        1100: 2,
        700: 1,
    }

    const [songs, setSongs] = useState(() => {
        const savedSongs = localStorage.getItem("song");
        const initialValue = savedSongs ? JSON.parse(savedSongs) : [];
        return initialValue;
    });

    const error = songs.length > 0;
    

    return (
        <>
            <div className='content'>
            <a href="https://accounts.spotify.com/authorize?client_id=your-client-id&response_type=token&redirect_uri=http://localhost:3000/callback&scope=user-library-read">
                Log in with Spotify
              </a>
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {error ? songs.map((song, index) => (
                        <Playlist key={index} artist={song} />
                    )) : "error"}
                </Masonry>
            </div>
        </>
    )
}