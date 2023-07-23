import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import ExpensesContext from '../../../store/expenses-context';
import barSize from '../../../utils/chart/bar-size';
import classes from '../../../utils/chart/classes';
import InactiveBtn from '../../UI/InactiveBtn';

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

  const size = barSize(expenses, yearlyExpenses);
  const { radius, btnSelected, barSelected } = classes(month, current);

  return (
    <InactiveBtn
      className={`inline-flex items-center justify-between rounded-none px-3 py-1 shadow-none focus:outline-offset-0 md:px-4 md:py-2.5 lg:flex lg:flex-col-reverse lg:px-6 ${radius} ${btnSelected}`}
      onClick={clickHandler}
    >
      <div className="">{name}</div>
      <div className="w-9/12 bg-neutral-200 lg:w-3 lg:grow">
        <div
          className={twMerge('h-2 bg-neutral-400 lg:h-full', barSelected)}
          style={{ width: size }}
        />
      </div>
    </InactiveBtn>
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
