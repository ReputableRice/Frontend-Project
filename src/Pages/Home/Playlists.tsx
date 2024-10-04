import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <div>Home</div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Playlists">Playlists</Link>

        
        </>
    )
}