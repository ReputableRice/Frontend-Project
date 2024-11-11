import "./card.css"
import Image from 'react'
import CardBottom from '../../organisms/CardBottom/CardBottom'
import React from 'react'

export default function Card() {
    return (
        <div className="cardRelative">
            <div className="cardContainer">
                <img className="cardImage"src='https://placehold.co/600x400' />
                <CardBottom />
            </div>
        </div>
    )
}