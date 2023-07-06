import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

function ExpenseDate({ date }) {
  const { $d: expenseDate } = dayjs(date);
  const month = expenseDate.toLocaleString('en-US', { month: 'short' });
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = expenseDate.getFullYear();

  return (
    <div className="flex flex-col items-center justify-center rounded bg-gray-400 px-2 py-0.5 text-xs">
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>
  );
}

ExpenseDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ExpenseDate;
