import { React, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'


import Footer from './components/Footer'
import Card from './components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>


    
   
      <Footer/>
    </div>
  );
}

export default App;
