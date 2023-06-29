import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import SubmitForm from './SubmitForm';
import Add from './Add';

function New() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => setIsOpen(() => true);
  const closeModalHandler = () => setIsOpen(() => false);

  return (
    <>
      {createPortal(
        <Modal isOpen={isOpen} onCloseModal={closeModalHandler}>
          <SubmitForm />
        </Modal>,
        document.getElementById('modal')
      )}
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
