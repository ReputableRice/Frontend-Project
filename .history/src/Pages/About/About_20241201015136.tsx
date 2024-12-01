import React, { useState } from 'react'
import Card from '../../components/templates/Card/Card'
import "./about.css"

export default function About() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodChange = (mood) => {
        setSelectedMood(mood);
    };
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
                <div className="aboutInteractive">
                    <h2 className="interactiveTitle">Choose Your Mood</h2>
                    <div className="moodButtons">
                        <button onClick={() => handleMoodChange('Happy')} className="moodButton">Happy</button>
                        <button onClick={() => handleMoodChange('Sad')} className="moodButton">Sad</button>
                        <button onClick={() => handleMoodChange('Chill')} className="moodButton">Chill</button>
                    </div>
                    <div className="moodDescription">
                        {selectedMood && (
                            <p className="moodText">You selected the {selectedMood} mood! Here's a playlist suggestion:</p>
                        )}
                        {selectedMood === 'Happy' && <p className="moodText">Songs for a cheerful vibe! 🎶</p>}
                        {selectedMood === 'Sad' && <p className="moodText">Songs to match your mood. 🎧</p>}
                        {selectedMood === 'Chill' && <p className="moodText">Relaxing tunes for a calm day. 🌙</p>}
                    </div>
                </div>
            </div>

        </>
    );
}