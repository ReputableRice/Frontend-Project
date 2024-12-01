import React, { useState } from 'react';
import './about.css';

export default function About() {
    const [selectedMood, setSelectedMood] = useState(null);
    const [recordImage, setRecordImage] = useState('');

    // Object to map moods to images
    const moodImages = {
        Happy: "https://link-to-happy-record-image.png",  // replace with actual URLs
        Sad: "https://link-to-sad-record-image.png",     // replace with actual URLs
        Chill: "https://link-to-chill-record-image.png", // replace with actual URLs
    };

    const handleMoodChange = (mood) => {
        setSelectedMood(mood);
        setRecordImage(moodImages[mood]);
    };

    return (
        <>
            <div className="content aboutContainer">
                <div className="aboutBox">
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
                        {recordImage && <img src={recordImage} alt="Record for mood" className="turntableGraphic" />}
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
            </div>
        </>
    );
}