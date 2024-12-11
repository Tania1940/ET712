import React from 'react';
import ModalWindow from './modalwindow';

function Card({ name, image, description, price, brand }) {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={toggleModal}>View Details</button>

      {showModal && <ModalWindow name={name} image={image} description={description} brand={brand} toggleModal={toggleModal} />}
    </div>
  );
}

export default Card;