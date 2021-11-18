import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import logo from './images/PRINSBUD-logo.png';

import About from './Routes/About';
import Gallery from './Routes/Gallery';
import Contact from './Routes/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <NavLink exact to='/'>o nas</NavLink>
          <NavLink to='/galeria'>galeria</NavLink>
          <NavLink to='/kontakt'>kontakt</NavLink>
        </nav>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route path='/galeria' element={<Gallery />} />
          <Route path='/kontakt' element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <p>© 2021 PRINSBUD</p>
      </footer>
    </Router >
  );
}

export default App;
