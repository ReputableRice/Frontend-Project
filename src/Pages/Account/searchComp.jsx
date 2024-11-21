import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ token, setSelectedSong }) {
    const [searchTerm, setSearchTerm] = useState("");
    
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        const searchEndpoint = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;
        let token = window.localStorage.getItem("token");
        const response = await fetch(searchEndpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();
        setResults(data.tracks.items);
    };

    const handleSongClick = (track) => {
        setSelectedSong({
            title: track.name,
            image: track.album.images[0]?.url,
        });
        navigate('/');
    };

    return (
        <div className='text-white'>
            <h2 className='text-white'>song search</h2>
            <form 
                className='text-white'
                onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="search for a song"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='text-white' type="submit">search</button>
            </form>
            <div>
                {results.map((track) => (
                    <div className='text-white' key={track.id} onClick={() => handleSongClick(track)} style={{ cursor: 'pointer' }}>
                        <img src={track.album.images[0]?.url} alt={track.name} width="50" />
                        <p className='text-white'>{track.name} by {track.artists[0].name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;