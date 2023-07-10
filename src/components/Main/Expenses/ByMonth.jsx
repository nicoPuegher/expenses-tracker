import React from 'react';
import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

function ByMonth({ expenses, hash, month }) {
  return expenses[hash][month].arr.map((singleExpense) => (
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
          <p className="text-base text-gray-500">${singleExpense.numAmount}</p>
        </div>
      </div>
    </li>
  ));
}

ByMonth.propTypes = {
  expenses: PropTypes.instanceOf(Array).isRequired,
  hash: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default ByMonth;