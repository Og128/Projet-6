import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/Home'
import About from './pages/Apropos'
import Logement from './pages/Logement/index.jsx'
import Error from './components/Error'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Projet_6_ReactJs' element={<App />} />
        <Route path="/Projet_6_ReactJs/home" element={<App />} />
        <Route path="/Projet_6_ReactJs/about" element={<About />} />
        <Route path='/Projet_6_ReactJs/logement/:id'element={<Logement />} />
        <Route path="/Projet_6_ReactJs/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
