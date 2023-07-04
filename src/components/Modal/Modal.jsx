import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import TransitionIn from './TransitionIn';
import TransitionOut from './TransitionOut';

function Modal({ isOpen, onCloseModal, children }) {
  const focusRef = useRef(null);

  const customChildren = React.cloneElement(children, {
    onCloseModal: () => onCloseModal(),
    ref: focusRef,
  });

  return (
    <Transition.Root show={isOpen} as={Fragment} initialFocus={focusRef}>
      <Dialog as="div" className="relative z-10" onClose={() => onCloseModal()}>
        <TransitionIn />
        <div className="fixed inset-0 z-10 flex min-h-full items-center justify-center p-2 text-center">
          <TransitionOut>{customChildren}</TransitionOut>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
