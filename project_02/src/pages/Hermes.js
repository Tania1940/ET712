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
    { name: 'Hermès Belt', image: Hermès1, price: 200, brand: 'Hermès' },
    { name: 'Hermès Sandals', image: Hermès2, price: 700, brand: 'Hermès' },
    { name: 'Hermès Wallet', image: Hermès3, price: 1000, brand: 'Hermès' },
    { name: 'Hermès Watch', image: Hermès4, price: 1300, brand: 'Hermès' },
    { name: 'Hermès Scarf', image: Hermès5, price: 2000, brand: 'Hermès' },
    { name: 'Hermès Birkin', image: Hermès6, price: 1100, brand: 'Hermès' },
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
