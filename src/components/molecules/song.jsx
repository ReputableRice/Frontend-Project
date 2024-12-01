import { FaPencil } from 'react-icons/fa6';
import './song.css';
import { FaTrash } from 'react-icons/fa';

export default function Song({ handleSongClick, songs, deleteSong, handleEdit }) {

    return (
        <div className='playlist-container'>
            {songs.map((song, index) => (
                <div className='playlist-song-container flex' key={index} onClick={() => handleSongClick(song)}> {/* thismakes it clickable  */}
                    <div className='song-image'>
                        <img className='song-image' src={song.image_link} alt={song.title} />
                    </div>
                    <div className='flex flex-col song-info'>
                        <h3 className='song-title'>{song.title}</h3>
                        <p className='song-author'>{song.author}</p>
                        <div className='song-interaction'>
                            <a href={song.song_link} className='song-link' target="_blank" rel="noopener noreferrer">Listen</a>
                            <div className='flex song-icons'>
                                <FaTrash
                                    size={"1.2rem"}
                                    className='icon mt-auto m-0'
                                    onClick={(e) => {
                                        deleteSong(song.id);
                                    }}
                                />
                                <FaPencil onClick={() => handleEdit(song)} className='icon mt-auto m-0' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
