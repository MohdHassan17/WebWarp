import { React, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer'
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
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      
      </BrowserRouter>


    
   
      <Footer/>
    </div>
  );
}

export default App;
