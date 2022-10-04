import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import MenuContainer from './components/menu/MenuContainer';



function App() {

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <MenuContainer />
    </div>
    </>
  );
}

export default App;
