import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Group from './img/Group.svg';

import Footer from './Components/Footer';
import Gallery from './Pages/Gallery.jsx';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Prices from './Pages/Prices.jsx';
import Contact from './Pages/Contact.jsx';
import Error from './Pages/Error';


function App() {

  return (
    <Router>
      <img src={Group} alt="" className='bg-image' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={ <Navigate to="/error" /> } />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;


