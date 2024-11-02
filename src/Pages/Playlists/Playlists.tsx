import React from 'react'
import './playlists.css'
import { songs } from '../../data/dummy';
import Playlist from '../../components/templates/Playlist/Playlist';
import Masonry from 'react-masonry-css'


export default function Playlists() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    const breakpoints = {
        default: 5,
        1500: 3,
        1100: 2,
        700: 1,
    }

    return (
        <>
            <div>
                <div className='content'>
                    <h1>Playlists</h1>
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {songs.map((song, index) => (
                            <Playlist key={index} artist={song} />
                        ))}
                    </Masonry>
                </div>
            </div>


        </>
    )
}