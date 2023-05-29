import React from 'react';
import PropTypes from 'prop-types';

function TransactionDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="flex h-12 w-12 flex-none flex-col items-center justify-center rounded bg-gray-300 text-xs">
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>
  );
}

TransactionDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default TransactionDate;
