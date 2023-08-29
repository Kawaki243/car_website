import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Find from './components/find/Find';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Find />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
