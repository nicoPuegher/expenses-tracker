import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ExpensesContext from '../../../store/expenses-context';
import barSize from '../../../utils/bar-size';

function ChartBar({ name, month, expenses, yearlyExpenses }) {
  const { changeFilter } = useContext(ExpensesContext);

  const clickHandler = () => changeFilter('Filter by month', month);

  const size = barSize(expenses, yearlyExpenses);

  return (
    <button
      type="button"
      className="mx-2 flex items-center justify-between"
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
