import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import MkCard from './components/MkCard.jsx'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
                <Route path="/mkcard" element={<MkCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
