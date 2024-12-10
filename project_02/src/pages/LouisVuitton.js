import React, { useState } from 'react';
import Card from '../components/Card';
import ModalWindow from '../components/ModalWindow';

const items = [
  { title: 'Chanel Bag 1', image: '/images/lv', description: 'Classic quilted bag.' },
  { title: 'Chanel Bag 2', image: '/images/chanel2.jpg', description: 'Timeless tote.' },
  // Add 4 more items
];

function Chanel() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h1>Chanel Collection</h1>
      <p>Discover iconic designs from Chanel.</p>
      <div className="card-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>
      {selectedItem && (
        <ModalWindow
          isOpen={!!selectedItem}
          image={selectedItem.image}
          title={selectedItem.title}
          description={selectedItem.description}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default Chanel;
