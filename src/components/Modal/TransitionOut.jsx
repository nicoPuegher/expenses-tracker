import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

function TransitionOut({ children }) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <Dialog.Panel className="mx-auto max-w-xl grow rounded-md bg-neutral-50 px-3 py-6 shadow transition-all md:px-4">
        {children}
      </Dialog.Panel>
    </Transition.Child>
  );
}

TransitionOut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TransitionOut;
