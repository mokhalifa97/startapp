import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Device from './Device';
import Age from './Age';
import Download from './Download';
import Mobile from './Mobile';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar/>
        <Header/>
        <About/>
        <Device/>
        <Age/>
        <Download/>
        <Mobile/>
        <Footer/>
    </div>
  );
}

export default App;
