import React from 'react';

function ModalWindow({ name, image, description, brand, toggleModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        <h2>{name} ({brand})</h2>
        <img src={image} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
