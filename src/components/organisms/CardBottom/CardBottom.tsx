import '../../templates/Card/card.css'
import React from 'react'

export default function CardBottom() {
    return(
    <div className="cardInformation">
        <div className="cardNameContainer">
            <img className="cardProfile" src='https://placehold.co/600x400' alt="Profile" />
            <div className="cardName">
                John Doe
            </div>
        </div>
        <div className="cardLine"></div>
        <p className="cardText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec.
        </p>
    </div>
    )
}