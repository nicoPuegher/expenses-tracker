import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import Modal from '../../../Modal/Modal';
import Form from '../../../Forms/Form';
import ExpOptions from './ExpOptions';

function ExpTransition({ expData }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => setIsOpen(() => true);
  const closeModalHandler = () => setIsOpen(() => false);

  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={closeModalHandler}>
        <Form type="Edit" expData={expData} onCloseModal={closeModalHandler} />
      </Modal>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-0 h-full w-full focus:outline-none focus:outline-0">
          <ExpOptions expData={expData} onClick={openModalHandler} />
        </Menu.Items>
      </Transition>
    </>
  );
}

ExpTransition.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
};

export default ExpTransition;
