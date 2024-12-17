import React from 'react';
import Card from '../card';
import { Link } from 'react-router-dom'; 
import LouisVuitton1 from '../images/lv-backpack.jpg';
import LouisVuitton2 from '../images/lv-handbag.jpg';
import LouisVuitton3 from '../images/lv-luggage.jpg';
import LouisVuitton4 from '../images/lv-shoes.jpg';
import LouisVuitton5 from '../images/lv_jacket.jpg';
import LouisVuitton6 from '../images/lv_wallet.jpg';

function LouisVuitton() {
  const LouisVuittonItems = [
    { 
      name: 'Louis Vuitton Backpack', 
      image: LouisVuitton1,  
      description: 'A luxury backpack made from signature Louis Vuitton monogram canvas. Perfect for both casual and formal looks.'
    },
    { 
      name: 'Louis Vuitton Handbag', 
      image: LouisVuitton2, 
      description: 'A timeless Louis Vuitton handbag designed to elevate your style with its elegant design and premium craftsmanship.'
    },
    { 
      name: 'Louis Vuitton Luggage', 
      image: LouisVuitton3,  
      description: 'Travel in style with Louis Vuitton luggage, crafted from high-quality materials for durability and elegance.'
    },
    { 
      name: 'Louis Vuitton Shoes', 
      image: LouisVuitton4,  
      description: 'Luxury shoes from Louis Vuitton that combine comfort and style with a sophisticated design.'
    },
    { 
      name: 'Louis Vuitton Jacket', 
      image: LouisVuitton5, 
      description: 'An exclusive Louis Vuitton jacket designed for both luxury and functionality, perfect for any occasion.'
    },
    { 
      name: 'Louis Vuitton Wallet', 
      image: LouisVuitton6, 
      description: 'A stylish Louis Vuitton wallet made from premium leather, offering both elegance and practicality.'
    },
  ];

  return (
    <>
      <h1 className="page-title">Louis Vuitton Collection</h1>
      <p className='info'>Louis Vuitton is a global symbol of luxury, innovation, and craftsmanship. Founded in 1854 by Louis Vuitton in Paris, the brand began by creating high-quality, durable travel trunks. Known for its iconic monogram canvas and timeless designs, Louis Vuitton offers handbags,luggage, ready-to-wear fashion, and accessories that blend style with functionality. The brand remains synonymous with elegance, status, and modern sophistication.</p>
      <hr/>

      <div className="product-page">
        {LouisVuittonItems.map((item) => (
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

export default LouisVuitton;
