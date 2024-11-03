import React, { useState } from 'react';
import "./home.css"
import Song from '../../components/molecules/song';
import Focus from '../../components/molecules/Focus';
import { songs } from '../../data/dummy';
import { FaPlus, FaBars, FaTrash } from "react-icons/fa";

export default function Home() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    const [selectedSong, setSelectedSong] = useState(songs[0]); // Set the first song by default

    const handleSongClick = (song) => {
        setSelectedSong(song); // this updates the song to the clicked one
    };

    return (
        <>
            <div>
                <div className='content'>
                    <div className='main-container'>
                        <div className='playlistEdit'>
                            <FaBars size={"2rem"} className='icon'/>
                            <FaPlus size={"2rem"} className='icon'/>
                        </div>
                        <div className='left-container'>
                            <Song handleSongClick={handleSongClick} /> 
                        </div>
                        {/* <div className='right-container'>
                            <Focus selectedSong={selectedSong} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
