import React, { useState } from 'react';
import './about.css';

export default function About() {
    const [currentStep, setCurrentStep] = useState(0);
    
    const steps = [
        {
            title: 'Curate Your Music',
            description: 'Save and organize your favorite tracks into custom playlists.',
            image: 'https://pngimg.com/uploads/vinyl/vinyl_PNG48.png',
        },
        {
            title: 'Explore Songs',
            description: 'Preview songs directly within the app before adding to your collection.',
            image: 'https://pngimg.com/uploads/vinyl/vinyl_PNG48.png',
        },
        {
            title: 'Moodboard Your Songs',
            description: 'Create moodboards to visually capture the emotions tied to each track.',
            image: 'https://pngimg.com/uploads/vinyl/vinyl_PNG48.png',
        },
    ];

    return (
        <>
            <div className="content aboutContainer">
                <div>
                    <h1 className="aboutTitle mb-3">About Turntable</h1>
                    <p className="aboutDescription">
                        <span className="highlight">Turntable</span> is a personalized music app designed to help you{' '}
                        <span className="highlight">curate</span> and <span className="highlight">explore</span> your favorite
                        songs in a unique way.
                    </p>
                    <p className="aboutDescription">
                        For an added layer of creativity, you can even <span className="highlight">moodboard</span> your songs,
                        visually capturing the emotions or memories tied to each track.
                    </p>
                </div>
                <div className="aboutGraphic">
                    <div className="timeline">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`timelineStep ${currentStep === index ? 'active' : ''}`}
                                onClick={() => setCurrentStep(index)}
                            >
                                <div className="timelinePoint"></div>
                                {index > 0 && <div className="timelineLine"></div>}
                            </div>
                        ))}
                    </div>
                    <div className="timelineContent">
                        <h2>{steps[currentStep].title}</h2>
                        <p>{steps[currentStep].description}</p>
                        <img src={steps[currentStep].image} alt="Turntable" className="turntableGraphic" />
                    </div>
                </div>
            </div>
        </>
    );
}
