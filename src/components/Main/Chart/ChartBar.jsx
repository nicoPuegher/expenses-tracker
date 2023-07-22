import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import ExpensesContext from '../../../store/expenses-context';
import barSize from '../../../utils/chart/bar-size';
import Button from '../../UI/Button/Button';

function ChartBar({ name, long, month, expenses, yearlyExpenses }) {
  const {
    currentView: {
      month: { current },
    },
    changeFilter,
  } = useContext(ExpensesContext);

  const clickHandler = () => {
    changeFilter('Filter by month', month, name, long);
  };

  const btnActive =
    current === month
      ? 'bg-primary-200 hover:bg-primary-300 text-primary-500 font-semibold'
      : '';

  const barActive = current === month ? 'bg-primary-400' : '';
  const size = barSize(expenses, yearlyExpenses);

  return (
    <Button
      className={`${btnActive} justify-between shadow-none ring-0`}
      type=""
      value={0}
      onClick={clickHandler}
      txt=""
      kind="inactive"
    >
      <div className="w-auto">{name}</div>
      <div className="flex w-10/12 items-center bg-neutral-200">
        <div
          className={twMerge('h-2 bg-neutral-400', barActive)}
          style={{ width: size }}
        />
      </div>
    </Button>
  );
}

ChartBar.propTypes = {
  name: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  yearlyExpenses: PropTypes.number.isRequired,
};

export default ChartBar;
