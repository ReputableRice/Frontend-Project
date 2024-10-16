import React from 'react'
import Card from '../../components/templates/Card/Card'
import Styles from './About.module.css'


export default function About() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content flex flex-row'>
                    <div>
                        <h1>About Turntable</h1>
                        <p className={Styles.aboutDescription}>
                            Turntable is a personalized music app designed to help you curate and explore your favorite songs in a unique way. With Turntable, you can save links to tracks that matter to you, preview songs directly within the app, and organize your music into custom playlists. For an added layer of creativity, you can even moodboard your songs, visually capturing the emotions or memories tied to each track. Whether you're building a playlist for every mood or reminiscing on a special tune, Turntable makes managing your music personal and fun.
                        </p>
                    </div>
                    <Card />
                </div>
            </body>
        </>
    )
}