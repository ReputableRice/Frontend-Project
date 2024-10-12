import './focus.css';
import './song.css'

export default function Focus({ selectedSong }) {
    return (
        <div className='focus-container flex'>
            {/* <h2>Highlighted Song</h2> */}
            <div className='focus-song flex'>
                <div className='focus-image flex'>
                    <img 
                        src={selectedSong.image_link} 
                        alt={selectedSong.title} 
                        className='focus-image-link'
                    />
                </div>
                <div className='focus-info flex'>
                    <p className='focus-item focus-title'>{selectedSong.title}</p>
                    <div className='focus-item focus-wide flex'>
                        <p className='focus-item song-author focus-author'>{selectedSong.author}</p>
                        {/* <p className='focus-item focus-author focus-date'>{selectedSong.date}</p>*/}
                        <a className='focus-item song-link focus-link' href={selectedSong.song_link} target="_blank">Listen</a>
                    </div>
                    <p className='focus-item focus-desc'>{selectedSong.song_desc}</p>
                </div>
            </div>
        </div>
    );
}
