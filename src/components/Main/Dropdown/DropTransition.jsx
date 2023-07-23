import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import DropdownItems from './DropdownItems';

function DropTransition({ filterList, clickHandler }) {
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
      <Menu.Items className="relative">
        <div className="absolute right-0 my-1 w-36 rounded bg-neutral-50 py-1 shadow-sm shadow-neutral-300">
          <DropdownItems filterList={filterList} clickHandler={clickHandler} />
        </div>
      </Menu.Items>
    </Transition>
  );
}

DropTransition.propTypes = {
  filterList: PropTypes.instanceOf(Object).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DropTransition;
