import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/Home'
import About from './pages/Apropos'
import Logement from './pages/Logement'
import Error from './components/Error'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/logement/:id'element={<Logement />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
