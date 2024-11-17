import "./card.css"
import Image from 'react'
import CardBottom from '../../organisms/CardBottom/CardBottom'
import React from 'react'

export default function Card() {
    return (
        <div className="cardRelative">
            <div className="cardContainer">
                <img className="cardImage"src='https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <CardBottom />
            </div>
        </div>
    )
}