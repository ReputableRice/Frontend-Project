import ReactPlayer from 'react-player';
import './focus.css';
import './song.css';
import { CgPlayPause, CgPlayButton } from 'react-icons/cg';
import React from 'react';
import { useState, useEffect } from 'react';

/*

Only thing missing is spotify

*/

export default function Focus({ selectedSong }) {
    const [pause, setPaused] = useState(true)
    return (
        <div>
            <div className='focus-container flex'>
                <div className='focus-song flex'>
                    <div className='focus-image-link'>
                        <ReactPlayer
                            url={selectedSong.song_link}
                            alt={selectedSong.title}
                            onReady
                            playing={pause}
                            controls
                            width="100%"
                            height="100%"
                            className="youtubePlayer"
                        />
                    </div>
                    <div className='focus-info flex'>
                        <h1 className='flex flex-col leading-8'>
                            Now Playing:
                            <h1 className='focus-item focus-title leading-6 mt-1'>{selectedSong.title}</h1>
                        </h1>
                        <div className='focus-item focus-wide flex'>
                            <p className='focus-item focus-song-author focus-author leading-6 mt-8'>{selectedSong.author}</p>
                            {/* <p className='focus-item focus-author focus-date'>{selectedSong.date}</p>*/}
                        </div>
                        <p className='focus-item focus-desc'>{selectedSong.song_desc}</p>
                        <a className='focus-item song-link focus-link flex items-center' href={selectedSong.song_link} target="_blank">
                            Listen
                        </a>
                    </div>
                </div>
            </div>
            <div className='mobilePlayer'>
                {
                    pause ?
                        <CgPlayPause
                            size={"5rem"}
                            onClick={() => { setPaused(!pause) }}
                            className='playbackIcon'
                        />
                        :
                        <CgPlayButton
                            size={"5rem"}
                            onClick={() => { setPaused(!pause) }}
                            className='playbackIcon'
                        />
                }
            </div>
        </div>
    );
}
