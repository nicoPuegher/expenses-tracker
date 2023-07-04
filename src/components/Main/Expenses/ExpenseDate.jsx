import React from 'react';
import PropTypes from 'prop-types';

function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="flex flex-col items-center justify-center rounded bg-gray-400 px-2 py-0.5 text-xs">
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>
  );
}

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseDate;
