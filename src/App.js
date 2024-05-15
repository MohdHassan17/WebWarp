import { React, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Route, Router } from 'react-router-dom';
import Landing from './pages/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
