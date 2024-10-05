import React from 'react'
import './about.css'
import Post from '../../components/templates/Post/Post'

export default function About() {
    //DO NOT CHANGE BODY AND CONTENT, MARGINS ARE DEFINED THERE
    return (
        <>
            <body>
                <div className='content aboutBox'>
                    <ol>
                        <li className='faqHeading'>What is this site about?</li>
                        <p>This site is helps you organize your favourite songs into organized playlists</p>
                        <li className='faqHeading'>What is this site about?</li>
                        <p>This site is helps you organize your favourite songs into organized playlists</p>
                        <li className='faqHeading'>What is this site about?</li>
                        <p>This site is helps you organize your favourite songs into organized playlists</p>
                    </ol>
                    <Post />
                </div>
            </body>
        </>
    )
}