import React, { useState } from 'react';
import 'tachyons/css/tachyons.min.css'; // Import Tachyons CSS
import FormMedi from './FormMedi';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-100 h-100 flex items-center justify-center bg-black-70">
      <div className="bg-gray pa4 br3">
       <FormMedi/>
        <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-red" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const OrderNow = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h3 className="f6 link dim br-pill ph3 pv2 mb2 white bg-blue" onClick={openModal}>
        Open Modal
      </h3>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default OrderNow;
