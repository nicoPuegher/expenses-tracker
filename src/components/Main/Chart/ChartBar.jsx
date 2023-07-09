import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ExpensesContext from '../../../store/expenses-context';
import barSize from '../../../utils/chart/bar-size';

function ChartBar({ name, month, expenses, yearlyExpenses }) {
  const {
    currentView: { current },
    changeFilter,
  } = useContext(ExpensesContext);

  const clickHandler = () => {
    changeFilter('Filter by month', month);
  };

  const activeClass = current === month ? 'bg-slate-500' : '';
  const size = barSize(expenses, yearlyExpenses);

  return (
    <button
      type="button"
      className={`${activeClass} mx-2 flex items-center justify-between`}
      onClick={clickHandler}
    >
      <div>{name}</div>
      <div className="flex h-3.5 w-2/3 items-center bg-slate-400">
        <div className="mx-0.5 h-2 bg-black" style={{ width: size }} />
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
