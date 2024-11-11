import './song.css';
import { FaTrash } from 'react-icons/fa';

export default function Song({ handleSongClick, songs, deleteSong }) {

    return (
        <div className='playlist-container'>
            {songs.map((song, index) => (
                <div className='playlist-song-container flex' key={index} onClick={() => handleSongClick(song)}> {/* thismakes it clickable  */}
                    <div className='song-image'>
                        <img className='song-image' src={song.image_link} alt={song.title} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='song-info flex '>
                            <p className='song-item song-title'>{song.title}</p>
                            <p className='song-item song-author'>{song.author}</p>
                            <div className='song-interaction'>
                                <a href={song.song_link} className='song-item song-link' target="_blank" rel="noopener noreferrer">Listen</a>
                                <FaTrash 
                                    size={"1.2rem"} 
                                    className='icon mt-auto m-0' 
                                    onClick={(e) => {
                                        deleteSong(song.id);
                                    }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
