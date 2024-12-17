import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`menu ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/chanel">Chanel</Link></li>
          <li><Link to="/hermes">Hermes</Link></li>
          <li><Link to="/louisvuitton">Louis Vuitton</Link></li>
        </ul>
      </nav>
      <div className="home">
        <h1>Welcome to LuxeHaven</h1>
        
        <p>
        <p>Learn more about the most luxurious brands and their iconic collections.</p>
        Luxury brands are known for their high-quality craftsmanship, exclusivity, and premium pricing. They often symbolize status, elegance, and prestige. Famous brands like Louis Vuitton, Gucci, and Chanel lead in fashion, while Cartier and Rolex dominate jewelry and watches. These brands emphasize heritage, storytelling, and limited availability to maintain desirability. Luxury items are seen as investments in both style and identity.
        </p>
        <Link to="/chanel">
          <button>Explore More</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
