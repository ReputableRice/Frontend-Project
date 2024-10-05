import React from 'react'
import { Link } from 'react-router-dom'

import Song from '../../components/molecules/song'

export default function Home() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE



    return (
        <>
            <body>
                <div className='content'>
                    <div>Home</div>
                    <Song/>
                </div>
            </body>
        </>
    )
}