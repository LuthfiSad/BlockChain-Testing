import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './entries/App.jsx'
import './entries/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
