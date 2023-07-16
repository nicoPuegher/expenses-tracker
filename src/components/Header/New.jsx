import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Form from '../Forms/Form';
import Add from './Add';

function New() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => setIsOpen(() => true);
  const closeModalHandler = () => setIsOpen(() => false);

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModalHandler}>
        <Form type="Add" onCloseModal={closeModalHandler} />
      </Modal>
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
