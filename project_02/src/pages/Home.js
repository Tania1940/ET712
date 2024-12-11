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
        <p>We buy and sell pre-owned luxury items, offering competitive prices for sellers and a curated selection of authenticated products for buyers. From designer handbags to fine jewelry, every piece is guaranteed authentic. Shop sustainably and indulge in luxury at great value while giving high-end items a second life.</p>
        <Link to="/chanel">
          <button>Explore More</button>
        </Link>
      </div>
      
    </div>
    
  );

}

export default Home;
