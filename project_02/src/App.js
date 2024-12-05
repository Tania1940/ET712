
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import routing files
import Hermès from './components/Hermès'
import LouisVuitton from './components/LouisVuitton'
import Chanel from './components/Chanel'

function App() {
  return (
    <>
     <h1 className='title'>Luxury Bags</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hermès/>}/>
      <Route path='/LouisVuitton' element={<LouisVuitton/>}/>
      <Route path='/Chanel' element={<Chanel/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
