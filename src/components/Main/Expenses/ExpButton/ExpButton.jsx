import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpTransition from './ExpTransition';

function ExpButton({ singleExpense }) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="w-full rounded bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <ExpenseItem singleExpense={singleExpense} />
        </Menu.Button>
      </div>
      <ExpTransition />
    </Menu>
  );
}

ExpButton.propTypes = {
  singleExpense: PropTypes.instanceOf(Object).isRequired,
};

export default ExpButton;
