import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Preloader from './components/templates/Preloader/Preloader.tsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
  </StrictMode>,
)
