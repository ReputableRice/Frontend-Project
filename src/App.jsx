import './App.css';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { useEffect, useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import Preloader from './components/templates/Preloader/Preloader';

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileCheck, setMobileCheck] = useState(false);
  const [preloader, setPreloader] = useState(() => {
    const savedPreloader = localStorage.getItem("preloader");
    return savedPreloader ? JSON.parse(savedPreloader) : true;
  });

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 10000)
  }, [])

  useEffect(() => {
    localStorage.setItem("preloader", JSON.stringify(preloader))
    console.log(preloader)
  }, [preloader])

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
    <>
      <Router>
        <div className='mobileNavTab'>
          <img src='/TURNTABLE.svg' className='w-64 m-auto' alt='Turntable logo' />
          <FaBars size={"2rem"} onClick={() => setMobileCheck(true)} alt="navigation" />
        </div>
        <div className='mobileNav flex items-center content-center'>
          {mobileNav && mobileCheck ? (
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
          ) : ""}
        </div>
        <div className='navBar desktopNav'>
          <div className='navBarCategories'>
            <Link to="/" className={"appRouter navLeft"}>Home</Link>
            <Link reloadDocument to="/Playlists" className={"appRouter nav"} >Playlists</Link>
            <Link to="/About" className={"appRouter nav"}>About</Link>
            <Link to="/Contact" className={"appRouter navRight"}>Contact</Link>
            <img src='/TURNTABLE.svg' className='w-64 ml-auto mr-32' />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Playlists" element={<Playlists />} />
        </Routes>
      </Router>
      {preloader && <Preloader />}
      {/* <Preloader /> */}
    </>

  );
}

export default App;
