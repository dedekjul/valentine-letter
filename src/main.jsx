import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoveLetter from './LoveLetter.jsx'
import FloatingHearts from './FloatingHearts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LoveLetter /> */}
    {/* <FloatingHearts /> */}
  </StrictMode>,
)
