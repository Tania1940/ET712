import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/chanel">Chanel</Link></li>
          <li><Link to="/hermes">Hermes</Link></li>
          <li><Link to="/louisvuitton">Louis Vuitton</Link></li>
        </ul>
      </nav>
      <div className="home">
        <h1>Welcome to PreLuxe</h1>
        <p>Luxury, pre-loved, always in style.</p>
        <Link to="/chanel">
          <button>Explore More</button>
        </Link>
      </div>
      
    </div>
    
  );

}

export default Home;
