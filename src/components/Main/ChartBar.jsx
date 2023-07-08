import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ExpensesContext from '../../store/expenses-context';

function ChartBar({ name, month, expenses, yearlyExpenses }) {
  const expensesCtx = useContext(ExpensesContext);
  const { changeFilter } = expensesCtx;

  let barSize = '0%';
  if (yearlyExpenses > 0) {
    barSize = `${Math.floor((expenses / yearlyExpenses) * 100)}%`;
  }

  const clickHandler = () => changeFilter('month', '', month);

  return (
    <button
      type="button"
      className="mx-2 flex items-center justify-between"
      onClick={clickHandler}
    >
      <div>{name}</div>
      <div className="flex h-3.5 w-2/3 items-center bg-slate-400">
        <div className="mx-0.5 h-2 bg-black" style={{ width: barSize }} />
      </div>
    </button>
  );
}

ChartBar.propTypes = {
  name: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  yearlyExpenses: PropTypes.number.isRequired,
};

export default ChartBar;
