import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Add from '../Add/Add';

function New() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  return (
    <>
      {openModal && <Modal onCloseModal={closeModalHandler} />}
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
