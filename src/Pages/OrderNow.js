import React, { useState } from 'react';
import 'tachyons/css/tachyons.min.css'; // Import Tachyons CSS
import AddressForm from './AddressForm';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div  className="fixed top-0 left-0 w-100 h-100 flex items-center justify-center bg-black-70">
      <div className="bg-white pa4 br3">
        <AddressForm  />
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
      <button className="f5 link dim br-pill ph3 pv2 mb2 dib white bg-blue" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default OrderNow;
