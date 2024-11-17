import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { useEffect, useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import Preloader from './components/templates/Preloader/Preloader';

/*
TO DO:
- Adjust Breakpoints on card components
- Submission overlay breakpoints
- Navbar for mobile
- Basically all the component overlay's breakpoints
*/


function App() {
  const viewport = window.innerWidth
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Router className="">
        <div className='mobileNavTab'>
          <FaBars size={"2rem"} onClick={() => setMobileNav(!mobileNav)} />
        </div>
        <div className='mobileNav'>
          {mobileNav ?
            <div className='navBar'>
              <div className='navBarCategories'>
                <div className='mobileNavTab'>
                  <FaX size={"2rem"} onClick={() => setMobileNav(false)} />
                </div>
                <Link to="/" className={"appRouter navLeft"}>Home</Link>
                <Link reloadDocument to="/Playlists" className={"appRouter nav"} >Playlists</Link>
                <Link to="/About" className={"appRouter nav"}>About</Link>
                <Link to="/Contact" className={"appRouter navRight"}>Contact</Link>
              </div>
            </div>
            : ""
          }
        </div>

        <div className='navBar desktopNav'>
          <div className='navBarCategories'>
            <Link to="/" className={"appRouter navLeft"}>Home</Link>
            <Link reloadDocument to="/Playlists" className={"appRouter nav"} >Playlists</Link>
            <Link to="/About" className={"appRouter nav"}>About</Link>
            <Link to="/Contact" className={"appRouter navRight"}>Contact</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Playlists" element={<Playlists />} />
        </Routes>
      </Router>
      <Preloader />
    </>
  )
}

export default App
