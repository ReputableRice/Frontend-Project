import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {

  return (
    <>
      <Router>
        <div className='navBar'>
          <div className='navBarCategories'>
            <Link to="/" className={"appRouter navLeft"}>Home</Link>
            <Link to="/About" className={"appRouter nav"}>About</Link>
            <Link to="/Contact" className={"appRouter nav"}>Contact</Link>
            <Link to="/Playlists" className={"appRouter navRight"}>Playlists</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Playlists" element={<Playlists />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
