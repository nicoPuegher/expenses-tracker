import React from 'react';
import PropTypes from 'prop-types';
import combinedSort from '../../../utils/expenses/combined-sort';
import ExpenseBtn from './ExpenseBtn/ExpenseBtn';

function ByMonth({ expsObj }) {
  const expensesByMonth = [...expsObj.arr];

  combinedSort(expensesByMonth);

  return expensesByMonth.map((singleExpense) => (
    <li key={singleExpense.id} className="py-3">
      <ExpenseBtn />
    </li>
  ));
}

ByMonth.propTypes = {
  expsObj: PropTypes.instanceOf(Object),
};

ByMonth.defaultProps = {
  expsObj: { arr: [] },
};

export default ByMonth;
