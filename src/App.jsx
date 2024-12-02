import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { useEffect, useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileCheck, setMobileCheck] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    if (window.innerWidth < 820) {
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }
  }


  return (
    <div>
      <div className='mobileNavTab'>
        <img src='/TURNTABLE.svg' className='w-64 m-auto' alt='Turntable logo' />
        <FaBars size={"2rem"} onClick={() => setMobileCheck(true)} alt="navigation"/>
      </div>
      <div className='mobileNav flex items-center content-center'>
        {mobileNav && mobileCheck ? (
          <div className='navBar'>
            <div className='navBarCategories'>
              <div className='mobileNavTab'>
                <FaX size={"2rem"} onClick={() => setMobileCheck(false)} />
              </div>
              <Link to="home" className={"appRouter navLeft"}>Home</Link>
              <Link to="playlists" className={"appRouter nav"}>Playlists</Link>
              <Link to="about" className={"appRouter nav"}>About</Link>
              <Link to="contact" className={"appRouter navRight"}>Contact</Link>
            </div>
          </div>
        ) : ""}
      </div>
      <div className='navBar desktopNav'>
        <div className='navBarCategories'>
          <Link to="home" className={"appRouter navLeft"}>Home</Link>
          <Link to="playlists" className={"appRouter nav"}>Playlists</Link>
          <Link to="about" className={"appRouter nav"}>About</Link>
          <Link to="contact" className={"appRouter navRight"}>Contact</Link>
          <img src='/TURNTABLE.svg' className='w-64 ml-auto mr-32 class turntableLogo' />
        </div>
      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}

export default App;
