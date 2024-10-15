import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Song from '../../components/molecules/song';
import Focus from '../../components/molecules/Focus';
import { songs } from '../../data/dummy';

import '../../../src/App.css';

export default function Home() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    const [selectedSong, setSelectedSong] = useState(songs[0]); // Set the first song by default

    const handleSongClick = (song) => {
        setSelectedSong(song); // this updates the song to the clicked one
    };

    return (
        <>
            <body>
                <div className='content'>
                    {/* <div>Home</div> */}
                    <div className='main-container'>
                        <div className='left-container'>
                            <div className='filter'></div>
                            <Song handleSongClick={handleSongClick} /> 
                        </div>
                        <div className='right-container'>
                            <Focus selectedSong={selectedSong} />
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
