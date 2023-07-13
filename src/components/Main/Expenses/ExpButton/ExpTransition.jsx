import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpOptions from './ExpOptions';

function ExpTransition({ expData }) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 top-0 z-10 h-full w-full rounded bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <div className="w-full py-1">
          <ExpOptions expData={expData} />
        </div>
      </Menu.Items>
    </Transition>
  );
}

ExpTransition.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
};

export default ExpTransition;