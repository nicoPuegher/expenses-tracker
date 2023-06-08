import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Add from '../Add/Add';

function New() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(() => true);
  };

  const closeModalHandler = () => {
    setIsOpen(() => false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModalHandler} />
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
