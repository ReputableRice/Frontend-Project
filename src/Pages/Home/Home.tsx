import React, { useState } from 'react';
import "./home.css"
import Song from '../../components/molecules/song';
import Focus from '../../components/molecules/Focus';
import { FaPlus, FaBars } from "react-icons/fa";
import { nanoid } from 'nanoid';

export default function Home() {
    const [songs, setSongs] = useState([
        {
            id: nanoid(),
            title: 'Pure Blood',
            image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CIO3epP3But06P9xsDPvknJy59JGCQ9OKQ&s",
            author: "Dareharu",
            song_link: "https://www.youtube.com/watch?v=en78bBw-Ekw",
            song_desc: "달의하루(Dareharu) 『순혈주의자(Pure Blood)"
        },
        {
            id: nanoid(),
            title: 'jschlatt — Santa Claus Is Coming To Town (Official)',
            image_link: "https://i.ytimg.com/vi/hayoY2Ov8PM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCccpnkxaz6_w9igkfcX01UFCAlSQ",
            author: "JSchlatt",
            song_link: "https://www.youtube.com/watch?v=hayoY2Ov8PM",
            song_desc: "MERRY CHRISTMAS BABY!!!!!!"
        },
        {
            id: nanoid(),
            title: 'みゆな - ガムシャラ【Official Music Video】',
            image_link: "https://i.ytimg.com/vi/TciQvQFTzHo/maxresdefault.jpg",
            author: "Miyuna",
            song_link: "https://www.youtube.com/watch?v=TciQvQFTzHo",
            song_desc: "TVアニメ「ブラッククローバー」第５クールオープニングテーマガムシャラ 楽曲配信はこちら ⇒ https://MIYUNA.lnk.to/MIYUNA_GAMUSYARA"
        }
    ]);

    const [selectedSong, setSelectedSong] = useState(songs[0]);

    const handleSongClick = (song) => {
        setSelectedSong(song);
    };

    const deleteSong = (id) => {
        setSongs(songs.filter((song) => song.id !== id));
    };

    return (
        <div className='content'>
            <div className='main-container'>
                <div className='flex'>
                    <div className='playlistEdit'>
                        <FaBars size={"2rem"} className='icon' />
                        <FaPlus size={"2rem"} className='icon mt-3' />
                    </div>
                    <div className='left-container'>
                        <Song handleSongClick={handleSongClick} songs={songs} deleteSong={deleteSong} />
                    </div>
                </div>
                <div className='right-container'>
                    <Focus selectedSong={selectedSong} />
                </div>
            </div>
        </div>
    );
}
