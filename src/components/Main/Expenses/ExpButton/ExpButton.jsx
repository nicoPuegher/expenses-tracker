import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpTransition from './ExpTransition';

function ExpButton({ expData }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-full rounded bg-neutral-50 px-5 py-2.5 shadow-sm shadow-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-100 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400 lg:px-6">
        <ExpenseItem expData={expData} />
      </Menu.Button>
      <ExpTransition expData={expData} />
    </Menu>
  );
}

ExpButton.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
};

export default ExpButton;
