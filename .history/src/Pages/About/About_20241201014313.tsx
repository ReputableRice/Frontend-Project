import React from 'react'
import Card from '../../components/templates/Card/Card'
import "./about.css"

export default function About() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <div className="content aboutContainer">
                <div className="aboutText">
                    <h1 className="aboutTitle mb-3">About Turntable</h1>
                    <p className="aboutDescription">
                        <span className="highlight">Turntable</span> is a personalized music app designed to help you{' '}
                        <span className="highlight">curate</span> and <span className="highlight">explore</span> your favorite
                        songs in a unique way. With Turntable, you can save links to tracks that matter to you, preview songs
                        directly within the app, and organize your music into custom playlists.
                    </p>
                    <p className="aboutDescription">
                        For an added layer of creativity, you can even <span className="highlight">moodboard</span> your songs,
                        visually capturing the emotions or memories tied to each track. Whether you're building a playlist for
                        every mood or reminiscing on a special tune, <span className="highlight">Turntable</span> makes managing
                        your music personal and fun.
                    </p>
                </div>
                <div className="aboutGraphic">
                    <img 
                        src="https://pngimg.com/uploads/vinyl/vinyl_PNG48.png" 
                        alt="Turntable" 
                        className="turntableGraphic" 
                    />
                </div>
            </div>
        </>
    );
}