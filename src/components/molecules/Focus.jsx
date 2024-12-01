import './focus.css';
import './song.css';
import { CgMusic } from 'react-icons/cg';
/*

Use Packages for React Spotify Embed and React Youtube
Use functions to assign them based on their origin (YT links or Spotify)
Then hook it up to the frontend

*/

export default function Focus({ selectedSong }) {
    return (
        <div className='focus-container flex'>
            {/* <h2>Highlighted Song</h2> */}
            <div className='focus-song flex'>
                <img
                    src={selectedSong.image_link}
                    alt={selectedSong.title}
                    className='focus-image-link'
                />
                <div className='focus-info flex'>
                    <h1 className='focus-item focus-title'>{selectedSong.title}</h1>
                    <div className='focus-item focus-wide flex'>
                        <p className='focus-item focus-song-author focus-author'>{selectedSong.author}</p>
                        {/* <p className='focus-item focus-author focus-date'>{selectedSong.date}</p>*/}
                    </div>
                    <p className='focus-item focus-desc'>{selectedSong.song_desc}</p>
                    <a className='focus-item song-link focus-link flex' href={selectedSong.song_link} target="_blank">
                        Listen
                        <CgMusic size={"1rem"} className='ml-1 mt-1'/>
                    </a>
                </div>
            </div>
        </div>
    );
}
