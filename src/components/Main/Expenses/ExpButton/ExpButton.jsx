import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpTransition from './ExpTransition';

function ExpButton({ expData }) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="w-full rounded bg-neutral-50 px-3 py-2 shadow-sm ring-1 ring-inset ring-neutral-200 hover:bg-neutral-100">
          <ExpenseItem expData={expData} />
        </Menu.Button>
      </div>
      <ExpTransition expData={expData} />
    </Menu>
  );
}

ExpButton.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
};

export default ExpButton;
