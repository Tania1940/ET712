import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chanel from './pages/Chanel';
import Hermes from './pages/Hermes';
import LouisVuitton from './pages/LouisVuitton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chanel" element={<Chanel />} />
        <Route path="/hermes" element={<Hermes />} />
        <Route path="/louisvuitton" element={<LouisVuitton />} />
      </Routes>
    </Router>
  );
}

export default App;
