import React, { useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import TransitionIn from './TransitionIn';
import TransitionOut from './TransitionOut';

function Modal({ isOpen, onCloseModal }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          onCloseModal();
        }}
      >
        <TransitionIn />
        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full items-center justify-center p-2 text-center">
            <TransitionOut />
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
