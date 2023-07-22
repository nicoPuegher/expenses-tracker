import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/format/format-date';

function ExpenseDate({ date }) {
  const { month, day, year } = formatDate(date);

  return (
    <div className="flex flex-col items-center justify-center rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
      <p>{month.short}</p>
      <p>{day.one}</p>
      <p>{year.num}</p>
    </div>
  );
}

ExpenseDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ExpenseDate;
