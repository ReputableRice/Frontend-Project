import './focus.css';

export default function Focus({ selectedSong }) {
    return (
        <div className='focus-container flex'>
            {/* <h2>Highlighted Song</h2> */}
            <div className='focus-song flex'>
                <div className='focus-image flex'>
                    <img src={selectedSong.image_link} alt={selectedSong.title} />
                </div>
                <div className='focus-info flex'>
                    <p className='focus-item focus-title'>{selectedSong.title}</p>
                    <p className='focus-item focus-author'>{selectedSong.author}</p>
                    <a className='focus-item focus-link' href={selectedSong.song_link} target="_blank">Listen</a>
                    <p className='focus-item focus-desc'>{selectedSong.song_desc}</p>
                </div>
            </div>
        </div>
    );
}
