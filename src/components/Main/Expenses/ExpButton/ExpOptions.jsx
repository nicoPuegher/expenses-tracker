import React, { useContext } from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpenseContext from '../../../../store/expenses-context';
import ExpOption from './ExpOption';

function ExpOptions({ expData, onClick }) {
  const { changeExpense } = useContext(ExpenseContext);

  return (
    <Menu.Items className="h-full w-full py-2">
      <div className="flex h-full">
        <ExpOption value="Edit" onClick={onClick} />
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
  onClick: PropTypes.func.isRequired,
};

export default ExpOptions;
