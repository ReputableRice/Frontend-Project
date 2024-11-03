import './song.css';
import { songs } from '../../data/dummy'
import { FaTrash } from 'react-icons/fa';

export default function Song({ handleSongClick }) {
    return (
        <div className='playlist-container'>
            {songs.map((song, index) => (
                <div className='playlist-song-container flex' key={index} onClick={() => handleSongClick(song)}> {/* thismakes it clickable  */}
                    <div className='song-image'>
                        <img className='song-image' src={song.image_link} alt={song.title} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='song-info flex'>
                            <p className='song-item song-title'>{song.title}</p>
                            <p className='song-item song-author'>{song.author}</p>
                            {/* <p className='song-item song-author'>{song.date}</p> */}
                        </div>
                        <div className='flex space-x-64 ml-4 h-6'>
                            <a href={song.song_link} className='song-item song-link' target="_blank" rel="noopener noreferrer">Listen</a>
                            <FaTrash size={"1rem"} className='icon mt-auto m-0'/>
                        </div>
                    </div>
                  
                </div>
            ))}
        </div>
    );
}
