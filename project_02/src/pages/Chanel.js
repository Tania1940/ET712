import React from 'react';
import Card from '../card';
import { Link } from 'react-router-dom'; 
import chanel1 from '../images/chanel_perfume.jpg';
import chanel2 from '../images/chanel_sunglasses.jpg';
import chanel3 from '../images/chanel_shoe.jpg';
import chanel4 from '../images/chanel_wallet.jpg';
import chanel5 from '../images/chanel_watch.avif';
import chanel6 from '../images/men_wallet.webp';

function Chanel() {
  const chanelItems = [
    { 
      name: 'Chanel Perfume', 
      image: chanel1,  
      description: 'Chanel’s timeless perfume, embodying elegance and sophistication, perfect for any occasion.'
    },
    { 
      name: 'Chanel Sunglasses', 
      image: chanel2, 
      description: 'Chanel sunglasses that combine luxury with style, ideal for those who want to make a bold statement.'
    },
    { 
      name: 'Chanel Shoe', 
      image: chanel3,  
      description: 'A stunning pair of shoes from Chanel, blending comfort with chic fashion for any stylish outing.'
    },
    { 
      name: 'Chanel Wallet', 
      image: chanel4 , 
      description: 'A luxurious leather wallet from Chanel, designed to be both functional and fashionable.'
    },
    { 
      name: 'Chanel Watch', 
      image: chanel5, 
      description: 'A sophisticated Chanel watch, crafted to perfection, perfect for those who appreciate luxury timepieces.'
    },
    { 
      name: 'Chanel Men Wallet', 
      image: chanel6,  
      description: 'A sleek men’s wallet from Chanel, made from premium materials and designed for elegance and utility.'
    },
  ];

  return (
    <>
      <h1 className="page-title">Chanel Collection</h1>
      <hr/>

      <div className="product-page">
        {chanelItems.map((item) => (
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

export default Chanel;
