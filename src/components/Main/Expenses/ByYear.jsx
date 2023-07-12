import React from 'react';
import PropTypes from 'prop-types';
import combinedSort from '../../../utils/expenses/combined-sort';
import ExpenseBtn from './ExpenseBtn/ExpenseBtn';

function ByYear({ expsArr }) {
  let expensesByYear = [];

  expsArr.forEach((month) => {
    expensesByYear = [...expensesByYear, ...month.arr];
  });

  combinedSort(expensesByYear);

  return expensesByYear.map((singleExpense) => (
    <li key={singleExpense.id} className="py-3">
      <ExpenseBtn />
    </li>
  ));
}

ByYear.propTypes = {
  expsArr: PropTypes.instanceOf(Array).isRequired,
};

export default ByYear;
