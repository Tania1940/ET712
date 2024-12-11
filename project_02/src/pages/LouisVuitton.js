import React from 'react';
import Card from '../card';
import { Link } from 'react-router-dom'; 
import LouisVuittion1 from '../images/lv-backpack.jpg';
import LouisVuittion2 from '../images/lv-handbag.jpg';
import LouisVuittion3 from '../images/lv-luggage.jpg';
import LouisVuittion4 from '../images/lv-shoes.jpg';
import LouisVuittion5 from '../images/lv_jacket.jpg';
import LouisVuittion6 from '../images/lv_wallet.jpg';

function LouisVuittion() {
  const LouisVuittionItems = [
    { name: 'Louis Vuittion Backpack', image: LouisVuittion1, price: 200, brand: 'Louis Vuittion' },
    { name: 'Louis Vuittion Handbag', image: LouisVuittion2, price: 700, brand: 'Louis Vuittion' },
    { name: 'Louis Vuittion Luggage', image: LouisVuittion3, price: 1000, brand: 'Louis Vuittion' },
    { name: 'Louis Vuittion Shoe', image: LouisVuittion4, price: 1300, brand: 'Louis Vuittion' },
    { name: 'Louis Vuittion Jacket', image: LouisVuittion5, price: 2000, brand: 'Louis Vuittion' },
    { name: 'Louis Vuittion Wallet', image: LouisVuittion6, price: 1100, brand: 'Louis Vuittion' },
  ];

  return (
    <>
      <h1 className="page-title">Louis Vuittion Collection</h1>
      <hr/>

      <div className="product-page">
        {LouisVuittionItems.map((item) => (
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

export default LouisVuittion;
