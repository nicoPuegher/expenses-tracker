import React from 'react';
import PropTypes from 'prop-types';
import singleSort from '../../../utils/expenses/single-sort';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

function ByMonth({ expensesArr }) {
  const expensesByMonth = [...expensesArr.arr];

  singleSort(expensesByMonth);

  return expensesByMonth.map((singleExpense) => (
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

ByMonth.propTypes = {
  expensesArr: PropTypes.instanceOf(Object).isRequired,
};

export default ByMonth;
