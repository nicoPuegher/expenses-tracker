import React, { useState } from 'react';
import Modal from './Modal';
import SubmitForm from './SubmitForm';
import Add from './Add';

function New() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => setIsOpen(() => true);
  const closeModalHandler = () => setIsOpen(() => false);

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModalHandler}>
        <SubmitForm />
      </Modal>
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
