import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/format-helpers/format-date';

function ExpenseDate({ date }) {
  const { monthShort, day, year } = formatDate(date);

  return (
    <div className="flex flex-col items-center justify-center rounded bg-gray-400 px-2 py-0.5 text-xs">
      <p>{monthShort}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>
  );
}

ExpenseDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ExpenseDate;
