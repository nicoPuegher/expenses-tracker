import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import Add from '../Add/Add';

function New() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  //   const closeModalHandler = () => setOpenModal(false);

  return (
    <>
      {openModal && createPortal(<Modal />, document.getElementById('modal'))}
      <Add onOpenModal={openModalHandler} />
    </>
  );
}

export default New;
