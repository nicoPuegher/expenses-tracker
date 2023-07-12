import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

function ExpenseBtn({ singleExpense }) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="w-full rounded bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <ExpenseItem singleExpense={singleExpense} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-0 z-10 mt-2 w-44 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="w-full py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                  type="button"
                  value="valueTest"
                  onClick="clickHandler"
                >
                  valueTest
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

ExpenseBtn.propTypes = {
  singleExpense: PropTypes.instanceOf(Object).isRequired,
};

export default ExpenseBtn;
