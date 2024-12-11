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
    { name: 'Chanel Perfume', image: chanel1, price: 200, brand: 'Chanel' },
    { name: 'Chanel Sunglasses', image: chanel2, price: 700, brand: 'Chanel' },
    { name: 'Chanel Shoe', image: chanel3, price: 1000, brand: 'Chanel' },
    { name: 'Chanel Wallet', image: chanel4, price: 1300, brand: 'Chanel' },
    { name: 'Chanel Watch', image: chanel5, price: 2000, brand: 'Chanel' },
    { name: 'Chanel Men Wallet', image: chanel6, price: 1100, brand: 'Chanel' },
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

