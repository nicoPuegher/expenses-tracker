import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import Form from './Form';
import Add from './Add';

function New() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => setIsOpen(() => true);
  const closeModalHandler = () => setIsOpen(() => false);

  return (
    <>
      {createPortal(
        <Modal isOpen={isOpen} onCloseModal={closeModalHandler}>
          <Form />
        </Modal>,
        document.getElementById('modal')
      )}
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
