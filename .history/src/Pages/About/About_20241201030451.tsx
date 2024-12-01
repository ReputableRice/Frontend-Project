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
                <h2 className="interactiveTitle">Choose Your Mood</h2>
                    <img 
                        src="https://pngimg.com/uploads/vinyl/vinyl_PNG48.png" 
                        alt="Turntable" 
                        className="turntableGraphic" 
                    />
                </div>            
                <div className="aboutInteractive">
                    
                    <div className="moodDescription">
                        {selectedMood && (
                            <p className="moodText">You selected the {selectedMood} mood! Here's a song suggestion:</p>
                        )}
                        {selectedMood === 'Happy' && <p className="highlight">"Happy" by Pharrell Williams 🎶</p>}
                        {selectedMood === 'Sad' && <p className="highlight">"Fix You" by Coldplay 🎧</p>}
                        {selectedMood === 'Chill' && <p className="highlight">"Weightless" by Marconi Union 🌙</p>}
                        {selectedMood === 'Energetic' && <p className="highlight">"Don't Stop the Music" by Rihanna 🎶</p>}
                        {selectedMood === 'Romantic' && <p className="highlight">"All of Me" by John Legend 🎧</p>}
                        {selectedMood === 'Angry' && <p className="highlight">"Break Stuff" by Limp Bizkit🌙</p>}
                        {selectedMood === 'Nostalgic' && <p className="highlight">"Sweet Child O' Mine" by Guns N' Roses 🎶</p>}
                        {selectedMood === 'Motivational' && <p className="highlight">"Eye of the Tiger" by Survivor 🎧</p>}
                        {selectedMood === 'Focused' && <p className="highlight">"Midnight City" by M83 🌙</p>}
                        {selectedMood === 'Relaxed' && <p className="highlight">"Banana Pancakes" by Jack Johnson 🎶</p>}
                        {selectedMood === 'Adventurous' && <p className="highlight">"Send Me On My Way" by Rusted Root🎧</p>}
                        {selectedMood === 'Introspective' && <p className="highlight">"The Sound of Silence" by Simon & Garfunkel 🌙</p>}
                    </div>
                    <div className="moodButtons">
                        <button onClick={() => handleMoodChange('Happy')} className="moodButton">Happy</button>
                        <button onClick={() => handleMoodChange('Sad')} className="moodButton">Sad</button>
                        <button onClick={() => handleMoodChange('Chill')} className="moodButton">Chill</button>
                        <button onClick={() => handleMoodChange('Energetic')} className="moodButton">Energetic</button>
                        <button onClick={() => handleMoodChange('Romantic')} className="moodButton">Romantic</button>
                        <button onClick={() => handleMoodChange('Angry')} className="moodButton">Angry</button>
                        <button onClick={() => handleMoodChange('Nostalgic')} className="moodButton">Nostalgic</button>
                        <button onClick={() => handleMoodChange('Motivational')} className="moodButton">Motivational</button>
                        <button onClick={() => handleMoodChange('Focused')} className="moodButton">Focused</button>
                        <button onClick={() => handleMoodChange('Relaxed')} className="moodButton">Relaxed</button>
                        <button onClick={() => handleMoodChange('Adventurous')} className="moodButton">Adventurous</button>
                        <button onClick={() => handleMoodChange('Introspective')} className="moodButton">Introspective</button>
                    </div>
            </div>                
        </div>

        </>
    );
}