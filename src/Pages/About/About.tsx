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
                <h2 className="interactiveTitle">Choose Your <span className="highlight">Mood</span></h2>
            <div className="aboutGraphic">
                    <img 
                        src="https://pngimg.com/uploads/vinyl/vinyl_PNG48.png" 
                        alt="Turntable" 
                        className="turntableGraphic" 
                    />
                </div>            
                <div className="aboutInteractive">
                    
                    <div className="moodDescription">
                        {selectedMood && (
                            <p className="moodText">You selected the <span className="highlight">{selectedMood}</span> mood! Here's a song suggestion:</p>
                        )}
                        {selectedMood === 'Happy' && <a href="https://youtu.be/ZbZSe6N_BXs?si=eo5zg15OnVdEU6bc" target="_blank" rel="noopener noreferrer"><p className="highlight">"Happy" by Pharrell Williams 🎶</p></a> }
                        {selectedMood === 'Sad' && <a href="https://www.youtube.com/watch?v=k4V3Mo61fJM" target="_blank" rel="noopener noreferrer"><p className="highlight">"Fix You" by Coldplay 🎧</p></a>}
                        {selectedMood === 'Chill' && <a href="https://www.youtube.com/watch?v=UfcAVejslrU" target="_blank" rel="noopener noreferrer"><p className="highlight">"Weightless" by Marconi Union 🌙</p></a>}
                        {selectedMood === 'Energetic' && <a href="https://www.youtube.com/watch?v=yd8jh9QYfEs" target="_blank" rel="noopener noreferrer"><p className="highlight">"Don't Stop the Music" by Rihanna 🎶</p></a>}
                        {selectedMood === 'Romantic' && <a href="https://www.youtube.com/watch?v=450p7goxZqg" target="_blank" rel="noopener noreferrer"><p className="highlight">"All of Me" by John Legend 🎧</p></a>}
                        {selectedMood === 'Angry' && <a href="https://www.youtube.com/watch?v=ZpUYjpKg9KY" target="_blank" rel="noopener noreferrer"><p className="highlight">"Break Stuff" by Limp Bizkit🌙</p></a>}
                        {selectedMood === 'Nostalgic' && <a href="https://www.youtube.com/watch?v=1w7OgIMMRc4" target="_blank" rel="noopener noreferrer"><p className="highlight">"Sweet Child O' Mine" by Guns N' Roses 🎶</p></a>}
                        {selectedMood === 'Motivational' && <a href="https://www.youtube.com/watch?v=j5-yKhDd64s&list=PLgzTt0k8mXzH4S1z0Ny3y2mTkIMSf7APH" target="_blank" rel="noopener noreferrer"><p className="highlight">"Not Afriad" by Eminem 🎧</p></a>}
                        {selectedMood === 'Focused' && <a href="https://www.youtube.com/watch?v=dX3k_QDnzHE" target="_blank" rel="noopener noreferrer"><p className="highlight">"Midnight City" by M83 🌙</p></a>}
                        {selectedMood === 'Relaxed' && <a href="https://www.youtube.com/watch?v=m-v-LGOfaKo" target="_blank" rel="noopener noreferrer"><p className="highlight">"Banana Pancakes" by Jack Johnson 🎶</p></a>}
                        {selectedMood === 'Adventurous' && <a href="https://www.youtube.com/watch?v=IGMabBGydC0" target="_blank" rel="noopener noreferrer"><p className="highlight">"Send Me On My Way" by Rusted Root🎧</p></a>}
                        {selectedMood === 'Introspective' && <a href="https://www.youtube.com/watch?v=l0q7MLPo-u8" target="_blank" rel="noopener noreferrer"><p className="highlight">"The Sound of Silence" by Simon & Garfunkel 🌙</p></a>}
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