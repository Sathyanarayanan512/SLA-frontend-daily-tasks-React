import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_Day37Task from './App_Day37Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_Day37Task />
  </StrictMode>
)
