import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Account from './Pages/Account/Account';
import { useEffect, useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import Preloader from './components/templates/Preloader/Preloader';


function App() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <Router className="">
        <div className='mobileNavTab'>
          <img src='/TURNTABLE.svg' className='w-64 m-auto' />
          <FaBars size={"2rem"} onClick={() => setMobileNav(!mobileNav)}/>
        </div>
        <div className='mobileNav flex items-center content-center'>
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
            <Link to="/Account" className={"appRouter navRight"}>Account</Link>
            <img src='/TURNTABLE.svg' className='w-64 ml-auto mr-32 class' />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/Account" element={<Account />}/>
        </Routes>
      </Router>
      <Preloader />
    </>
  )
}

export default App
