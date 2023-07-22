import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import TransitionIn from './TransitionIn';
import Wrapper from '../UI/Wrapper';
import TransitionOut from './TransitionOut';

function Modal({ isOpen, onCloseModal, children }) {
  const focusRef = useRef(null);

  const customChildren = React.cloneElement(children, {
    onCloseModal: () => onCloseModal(),
    ref: focusRef,
  });

  return (
    <Transition.Root show={isOpen} as={Fragment} initialFocus={focusRef}>
      <Dialog onClose={() => onCloseModal()}>
        <TransitionIn />
        <Wrapper className="fixed inset-0 items-center">
          <TransitionOut>{customChildren}</TransitionOut>
        </Wrapper>
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
