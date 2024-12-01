import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { useState, useEffect } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import gsap from 'gsap';

function App() {
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const navItems = document.querySelectorAll('.navBarCategories > *');

    gsap.fromTo(navItems, 
      {
        opacity: 0,
        // x: '-80rem',
      },
      {
        delay: 1,
        duration: 2,
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <div>
      <div className='mobileNavTab'>
        <img src='/TURNTABLE.svg' className='w-64 m-auto' />
        <FaBars size={"2rem"} onClick={() => setMobileNav(!mobileNav)} />
      </div>
      <div className='mobileNav flex items-center content-center'>
        {mobileNav ? (
          <div className='navBar'>
            <div className='navBarCategories'>
              <div className='mobileNavTab'>
                <FaX size={"2rem"} onClick={() => setMobileNav(false)} />
              </div>
              <Link to="." className={"appRouter navLeft"}>Home</Link>
              <Link to="playlists" className={"appRouter nav"}>Playlists</Link>
              <Link to="about" className={"appRouter nav"}>About</Link>
              <Link to="contact" className={"appRouter navRight"}>Contact</Link>
            </div>
          </div>
        ) : ""}
      </div>
      <div className='navBar desktopNav'>
        <div className='navBarCategories'>
          <Link to="." className={"appRouter navLeft"}>Home</Link>
          <Link to="playlists" className={"appRouter nav"}>Playlists</Link>
          <Link to="about" className={"appRouter nav"}>About</Link>
          <Link to="contact" className={"appRouter navRight"}>Contact</Link>
          <img src='/TURNTABLE.svg' className='w-64 ml-auto mr-32 class' />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}

export default App;
