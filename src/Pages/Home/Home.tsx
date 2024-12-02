import React, { useEffect, useState } from 'react';
import "./home.css"
import Song from '../../components/molecules/song';
import Focus from '../../components/molecules/Focus';
import { FaPlus, FaBars } from "react-icons/fa";
import { CgPlayListAdd } from 'react-icons/cg';
import { nanoid } from 'nanoid';
import Filter from '../../components/templates/Filter/Filter';
import AddSong from '../../components/templates/AddSong/AddSong';
import EditSong from '../../components/templates/EditSong/EditSong';
import Notification from '../../components/templates/Notification/Notification';
import { BiFilter } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa6';
import ReactPlayer from 'react-player'
import Disc from '../../components/molecules/disc/Disc';
import Preloader from '../../components/templates/Preloader/Preloader';

export default function Home() {
    const [songs, setSongs] = useState(() => {
        const savedSongs = localStorage.getItem("song");
        return savedSongs ? JSON.parse(savedSongs) : [
            {
                id: nanoid(),
                title: 'Just the Two of Us (feat. Bill Withers)',
                image_link: "https://i.ytimg.com/vi/6POZlJAZsok/maxresdefault.jpg",
                author: "Grover Washington, Jr. · Bill Withers (feat. Bill Withers)",
                song_link: "https://www.youtube.com/watch?v=6POZlJAZsok",
                song_desc: "Provided to YouTube by Rhino/ElektraJust the Two of Us (feat. Bill Withers) · Grover Washington, Jr. · Bill WithersAnthology"
            },
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
                title: 'christmas lofi radio 🎄cozy beats to get festive to',
                image_link: "https://i.ytimg.com/vi/pfiCNAc2AgU/sddefault.jpg?v=6728fa9a",
                author: "Lofi Girl",
                song_link: "https://www.youtube.com/watch?v=pfiCNAc2AgU",
                song_desc: ""
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
    const [focus, setFocus] = useState(false)

    const [selectedSong, setSelectedSong] = useState(songs[0]);
    const [newSong, setNewSong] = useState({
        title: '',
        author: '',
        song_desc: '',
        image_link: '',
        song_link: ''
    });
    const [editingSong, setEditingSong] = useState(null);
    const [addSongOverlay, setAddSongOverlay] = useState(false);
    const [message, setMessage] = useState(null);
    const [filter, setFilter] = useState(null)
    const [filteredSongs, setFilteredSongs] = useState(songs)
    const [filterOverlay, setFilterOverlay] = useState(false)

    useEffect(() => {
        localStorage.setItem("song", JSON.stringify(songs));
    }, [songs]);

    useEffect(() => {
        ApplyFilters();
    }, [filter, songs]);

    const handleSongClick = (song) => {
        setSelectedSong(song);

        //Resetting code to trigger animation
        if (focus) {
            setFocus(false)
            setTimeout(() => setFocus(true), 100)
        } else {
            setFocus(true)
        }
    };

    const deleteSong = (id) => {
        setSongs(songs.filter((song) => song.id !== id));
    };

    const handleEdit = (song) => {
        setEditingSong(song);
        setAddSongOverlay(false)
        setFilterOverlay(false)
    };

    const handleEditInput = (e) => {
        const { name, value } = e.target;
        setEditingSong({ ...editingSong, [name]: value });
    };

    const handleSongUpdate = (e) => {
        e.preventDefault();
        setSongs(songs.map((song) => (song.id === editingSong.id ? editingSong : song)));
        setEditingSong(null);
        setMessage("Song Edited!");
        setTimeout(() => setMessage(null), 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
    };

    const handleAddSong = (e) => {
        e.preventDefault();
        const songToAdd = { ...newSong, id: nanoid() };
        setSongs([...songs, songToAdd]);
        setNewSong({ title: '', author: '', song_desc: '', image_link: '', song_link: '' });
        setMessage("Song Added!");
        setTimeout(() => setMessage(null), 2000);
    };

    const toggleAddSong = () => {
        setAddSongOverlay(!addSongOverlay);
        setFilterOverlay(false);
        setEditingSong(null)
    };

    const closeEditSong = () => {
        setEditingSong(null);
    };

    const ApplyFilters = () => {
        let updatedSongs = [...songs];

        if (filter === "reversealpha") {
            updatedSongs.sort((a, b) => b.title.localeCompare(a.title));
            setFilterOverlay(false);
        } else if (filter === "alpha") {
            updatedSongs.sort((a, b) => a.title.localeCompare(b.title));
            setFilterOverlay(false);
        }

        setFilteredSongs(updatedSongs);
    };

    const closeFilter = () => {
        setFilterOverlay(false)
    }

    return (
        <div>
            <Disc focus={focus} />
            <div className='content'>
                {message && <Notification message={message} />}
                <EditSong
                    handleSongUpdate={handleSongUpdate}
                    editingSong={editingSong}
                    handleEditInput={handleEditInput}
                    closeEditSong={closeEditSong}
                />
                {filterOverlay &&
                    <Filter
                        ReverseAlpha={() => setFilter("reversealpha")}
                        Alphabetical={() => setFilter("alpha")}
                        closeFilter={closeFilter}
                    />}
                {addSongOverlay && (
                    <AddSong handleAddSong={handleAddSong} handleInputChange={handleInputChange} newSong={newSong} closeAddSong={toggleAddSong} />
                )}
                <div className='main-container'>
                    <div className='flex left-content'>
                        <div className='playlist-icons'>
                            <FaFilter size={"2.5rem"} className='playlist-icon icon'
                                onClick={() => {
                                    setFilter("editing");
                                    setFilterOverlay(true);
                                    setAddSongOverlay(false);
                                    setEditingSong(null)
                                }} />
                            <CgPlayListAdd size={"4rem"} className='playlist-icon mt-3 icon' onClick={toggleAddSong} />
                        </div>
                        <div className='left-container'>
                            <Song handleSongClick={handleSongClick} songs={filteredSongs} deleteSong={deleteSong} handleEdit={handleEdit} />
                        </div>
                    </div>
                    <div className='right-container'>
                        {focus && <Focus selectedSong={selectedSong} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
