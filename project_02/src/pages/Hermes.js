import React from 'react';
import Card from '../card';
import { Link } from 'react-router-dom'; 
import Hermès1 from '../images/hermes-belt.jpg';
import Hermès2 from '../images/hermes-sandals.jpg';
import Hermès3 from '../images/hermes-wallet.jpg';
import Hermès4 from '../images/hermes-watch.jpg';
import Hermès5 from '../images/hermes_scarf.jpg';
import Hermès6 from '../images/Hermès_Birkin.jpg';

function Hermès() {
  const HermèsItems = [
    { 
      name: 'Hermès Belt', 
      image: Hermès1,  
      description: 'A luxurious belt designed with Hermès signature craftsmanship, perfect for adding elegance to any outfit.'
    },
    { 
      name: 'Hermès Sandals', 
      image: Hermès2, 
      description: 'Stylish and comfortable, these Hermès sandals are made with premium leather for a sophisticated look.'
    },
    { 
      name: 'Hermès Wallet', 
      image: Hermès3,  
      description: 'A sleek and durable wallet that combines style with functionality, crafted from the finest leather.'
    },
    { 
      name: 'Hermès Watch', 
      image: Hermès4,  
      description: 'A refined timepiece that embodies Hermès’ elegance and attention to detail, perfect for any occasion.'
    },
    { 
      name: 'Hermès Scarf', 
      image: Hermès5, 
      description: 'A luxurious silk scarf featuring intricate designs that elevate any outfit with timeless charm.'
    },
    { 
      name: 'Hermès Birkin', 
      image: Hermès6, 
      description: 'The iconic Hermès Birkin bag, crafted from the finest leather, renowned for its elegance and exclusivity.'
    },
  ];

  return (
    <>
      <h1 className="page-title">Hermès Collection</h1>
      <hr/>

      <div className="product-page">
        {HermèsItems.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>

     {/* Back to Home Button */}
     <div className="back-to-home">
        <Link to="/">
          <button className="back-home-btn">Back to Home</button>
        </Link>
      </div>

      <hr/>
      <footer className="footer">
        <p>Created by Tania Akthar @ 2024</p>
      </footer>

    </>
  );
}

export default Hermès;
