import React, { useState } from 'react';
import './about.css';

export default function About() {
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const milestones = [
        { title: "Idea Conception", description: "This is where the core idea for Turntable was born. The goal was to create a music app that lets users explore songs in a personalized way." },
        { title: "Research & Planning", description: "We researched the best way to store, search, and display music data, and created the user flow and design for the app." },
        { title: "First Version", description: "The first version was created with basic features: song preview, playlists, and a simple UI." },
        { title: "Feature Expansion", description: "The app was expanded to include moodboards, personalized recommendations, and a more intuitive design." },
        { title: "Final Release", description: "Turntable is now complete and ready for use, with features like song previews, playlists, and more." },
    ];

    const handleHover = (index) => {
        setSelectedMilestone(index);
    };

    return (
        <div className="content aboutContainer">
            <div>
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

            <div className="timelineContainer">
                <h2>Development Timeline</h2>
                <div className="timeline">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`milestone ${selectedMilestone === index ? 'highlighted' : ''}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => setSelectedMilestone(null)}
                        >
                            <h3>{milestone.title}</h3>
                            {selectedMilestone === index && <p>{milestone.description}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="aboutGraphic">
                <img src="https://pngimg.com/uploads/vinyl/vinyl_PNG48.png" alt="Turntable" className="turntableGraphic" />
            </div>
        </div>
    );
}
