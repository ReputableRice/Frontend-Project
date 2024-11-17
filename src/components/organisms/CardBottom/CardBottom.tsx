import '../../templates/Card/card.css'
import React from 'react'

export default function CardBottom() {
    return(
    <div className="cardInformation">
        <div className="cardNameContainer">
            <img className="cardProfile" src='https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="a cute puppy!" />
            <div className="cardName">
                Turntable Team
            </div>
        </div>
        <div className="cardLine"></div>
        <p className="cardText">
            If you need anything from us just contact us!
        </p>
    </div>
    )
}