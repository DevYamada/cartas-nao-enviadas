import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css" // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js" // Importa o JS do Bootstrap
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
