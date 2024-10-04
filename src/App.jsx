import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './Pages/About/about';
import Contact from './Pages/Contact/Contact';
import Playlists from './Pages/Playlists/Playlists';

function App() {

  return (
    <>
      <Router>
        <div className='navBar'>
          <Link to="/" className={"appRouter"}>Home</Link>
          <Link to="/About" className={"appRouter"}>About</Link>
          <Link to="/Contact" className={"appRouter"}>Contact</Link>
          <Link to="/Playlists" className={"appRouter"}>Playlists</Link>
        </div>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Playlists" element={<Playlists />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
