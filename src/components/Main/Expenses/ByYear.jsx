import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

function ByYear({ expenses, hash }) {
  let expensesByYear = [];
  const months = expenses[hash];

  months.forEach((month) => {
    expensesByYear = [...expensesByYear, ...month.arr];
  });

  expensesByYear.sort(
    (a, b) => dayjs(b.date) - dayjs(a.date) || a.title.localeCompare(b.title)
  );

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
  expenses: PropTypes.instanceOf(Array).isRequired,
  hash: PropTypes.number.isRequired,
};

export default ByYear;
