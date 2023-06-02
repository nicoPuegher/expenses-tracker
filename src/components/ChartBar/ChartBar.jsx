import React from 'react';
import PropTypes from 'prop-types';

function ChartBar({ name, expenses, yearlyExpenses }) {
  let barSize = '0%';
  if (yearlyExpenses > 0) {
    barSize = `${Math.floor((expenses / yearlyExpenses) * 100)}%`;
  }

  return (
    <div className="mx-2 flex items-center justify-between">
      <div>{name}</div>
      <div className="flex h-3.5 w-2/3 items-center bg-slate-400">
        <div className="mx-0.5 h-2 bg-black" style={{ width: barSize }} />
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
