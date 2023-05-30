import React from 'react';
import PropTypes from 'prop-types';

function ChartBar({ name, expenses, yearlyExpenses }) {
  let barSize = '0%';
  if (yearlyExpenses > 0) {
    barSize = `${Math.floor((expenses / yearlyExpenses) * 100)}%`;
  }

  return (
    <div className="flex items-center">
      <div>{name}</div>
      <div className="h-2 w-full">
        <div className="h-full bg-black" style={{ width: barSize }} />
      </div>
    </div>
  );
}

ChartBar.propTypes = {
  name: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
  yearlyExpenses: PropTypes.number.isRequired,
};

export default ChartBar;
