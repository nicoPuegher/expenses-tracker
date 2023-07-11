import React from 'react';
import PropTypes from 'prop-types';
import combinedSort from '../../../utils/expenses/combined-sort';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

function ByYear({ expsArr }) {
  let expensesByYear = [];

  expsArr.forEach((month) => {
    expensesByYear = [...expensesByYear, ...month.arr];
  });

  combinedSort(expensesByYear);

  return expensesByYear.map((singleExpense) => (
    <li key={singleExpense.id} className="py-3">
      <div className="flex gap-x-4">
        <ExpenseDate date={singleExpense.date} />
        <div className="flex flex-auto items-center justify-between">
          <div>
            <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
              {singleExpense.title}
            </p>
            <Tag name={singleExpense.type} color="bg-gray-50" />
          </div>
          <p className="text-base text-gray-500">${singleExpense.amount}</p>
        </div>
      </div>
    </li>
  ));
}

ByYear.propTypes = {
  expsArr: PropTypes.instanceOf(Array).isRequired,
};

export default ByYear;
