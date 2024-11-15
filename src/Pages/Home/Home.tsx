import React, { useEffect, useState } from 'react';
import "./home.css"
import Song from '../../components/molecules/song';
import Focus from '../../components/molecules/Focus';
import { FaPlus, FaBars } from "react-icons/fa";
import { CgPlayListAdd } from 'react-icons/cg';
import { nanoid } from 'nanoid';
import AddSong from '../../components/templates/AddSong/AddSong';
import { json } from 'react-router-dom';

export default function Home() {
    const [songs, setSongs] = useState(() => {
        const savedSongs = localStorage.getItem("song");
        return savedSongs ? JSON.parse(savedSongs) : [
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
            },
        ];
    });

    const [localSongs, setLocalSongs] = useState(() => {
        const savedSongs = localStorage.getItem("song");
        const initialValue = savedSongs ? JSON.parse(savedSongs) : [];
        return initialValue;
    });

    const [selectedSong, setSelectedSong] = useState(songs[0]);
    const [newSong, setNewSong] = useState({
        title: '',
        author: '',
        song_desc: '',
        image_link: '',
        song_link: ''
    });
    const [addSongOverlay, setAddSongOverlay] = useState(false)

    const handleSongClick = (song) => {
        setSelectedSong(song);
    };

    const deleteSong = (id) => {
        setSongs(songs.filter((song) => song.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
    };

    const handleAddSong = (e) => {
        e.preventDefault();
        const songToAdd = {
            ...newSong,
            id: nanoid()
        };
        setSongs([...songs, songToAdd]);
        setNewSong({
            title: '',
            author: '',
            song_desc: '',
            image_link: '',
            song_link: ''
        });
    };

    function toggleAddSong() {
        setAddSongOverlay(!addSongOverlay)
    }

    useEffect(() => {
        return () => localStorage.setItem("song", JSON.stringify(songs))
    }, [songs])


    return (
        <div className='content'>
            {addSongOverlay ?
                <AddSong handleAddSong={handleAddSong} handleInputChange={handleInputChange} newSong={newSong} closeAddSong={toggleAddSong} />
                : null}
            <div className='main-container'>
                <div className='flex left-content'>
                    <div className='playlist-icons'>
                        <FaBars size={"2.5rem"} className='icon' />
                        <CgPlayListAdd size={"4em"} className='icon mt-3' onClick={toggleAddSong} />
                    </div>
                    <div className='left-container'>
                        <Song handleSongClick={handleSongClick} songs={songs} deleteSong={deleteSong} />
                    </div>
                </div>
                <div className='right-container'>
                    {
                        selectedSong ? <Focus selectedSong={selectedSong} /> : null
                    }
                    
                </div>
            </div>
        </div>
    );
}
