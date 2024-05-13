
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Route, Router } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
