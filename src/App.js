import React, { useState } from 'react';




import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css';


import Navbar from './Components/Navbar';
// import Image from './Components/Image';
// import Category from './Components/Category';
// import Products from './Components/Products';
// import Sunset from './Components/Sunset';
// import Gear from './Components/Gear';
// import { Leave } from './Components/Leave';
// import Carousel from './Components/Carousel';
// import Companies from './Components/Companies';
// import Snow from './Components/Snow';
// import Help from './Components/Help';
// import Footer from './Components/Footer';
// import Subscribe from './Components/Subscribe';
// import Links from './Components/Links';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Gear from './Components/Gear';

import HomeRouter from './Components/HomeRouter';


import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Carousel } from 'bootstrap/dist/js/bootstrap';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<HomeRouter />} />
          <Route path="/contact" exact element={<Contact />} />
          {/* <Route path="/image-section" exact element={<Products />} />
          <Route path="/tools" exact element={<Gear />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
