import './song.css'
import { songs } from '../../data/dummy'

export default function Song() {
    return (
        <div className='playlist-container'>
            {songs.map((song, index) => (
                <div className='playlist-song-container flex' key={index}>
                    <div className='song-image'>
                        <img className='song-image'src={song.image_link} alt={song.title} />
                    </div>
                    <div className='song-info flex'>
                        <p className='song-item song-title'>{song.title}</p>
                        <p className='song-item song-author'>{song.author}</p>
                        <p className='song-item song-link'>
                            <a href={song.song_link} target="_blank">Listen</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}