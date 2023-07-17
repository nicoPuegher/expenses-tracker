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
      <Dialog.Panel className="relative w-full overflow-hidden rounded bg-main-light px-2 py-3 shadow-xl transition-all">
        {children}
      </Dialog.Panel>
    </Transition.Child>
  );
}

TransitionOut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TransitionOut;
