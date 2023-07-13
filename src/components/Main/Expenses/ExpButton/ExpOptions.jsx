import React, { useContext } from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpenseContext from '../../../../store/expenses-context';
import ExpOption from './ExpOption';

function ExpOptions({ expData }) {
  const { changeExpense } = useContext(ExpenseContext);

  return (
    <Menu.Items className="absolute right-0 top-0 z-10 h-full w-full rounded bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <div className="flex h-full w-full">
        <ExpOption
          value="Edit"
          onClick={(e) => changeExpense(e.target.textContent, expData)}
        />
        <ExpOption
          value="Delete"
          onClick={(e) => changeExpense(e.target.textContent, expData)}
        />
      </div>
    </Menu.Items>
  );
}

ExpOptions.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
};

export default ExpOptions;
