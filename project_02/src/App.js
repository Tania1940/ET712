import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chanel from './pages/Chanel';
import Hermes from './pages/Hermes';
import LouisVuitton from './pages/LouisVuitton';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/chanel">Chanel</Link>
        <Link to="/hermes">Hermès</Link>
        <Link to="/louis-vuitton">Louis Vuitton</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chanel" element={<Chanel />} />
        <Route path="/hermes" element={<Hermes />} />
        <Route path="/louis-vuitton" element={<LouisVuitton />} />
      </Routes>
    </Router>
  );
}

export default App;

