import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import ExpensesContext from '../../../store/expenses-context';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

function Expenses({ currentFilter }) {
  const expensesCtx = useContext(ExpensesContext);
  const { expenses } = expensesCtx;

  const yearlyExpenses = Object.values(expenses[Number(currentFilter)]);
  let displayExpenses = [];

  yearlyExpenses.forEach((month) => {
    const monthlyExpenses = month.map((singleExpense) => (
      <li key={singleExpense.id} className="py-3">
        <div className="flex gap-x-4">
          <ExpenseDate date={singleExpense.date} />
          <div className="flex flex-auto items-center justify-between">
            <div>
              <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
                {singleExpense.title}
              </p>
              <Tag name={singleExpense.type} color="bg-gray-50" />
            </div>
            <p className="text-base text-gray-500">
              ${singleExpense.numAmount}
            </p>
          </div>
        </div>
      </li>
    ));

    displayExpenses = [...displayExpenses, ...monthlyExpenses];
  });

  if (displayExpenses.length === 0) {
    return (
      <Alert severity="error">No transactions found in {currentFilter}.</Alert>
    );
  }

  return (
    <section className="overflow-y-scroll rounded bg-gray-300 px-2">
      <ul className="divide-y divide-gray-100">{displayExpenses}</ul>
    </section>
  );
}

Expenses.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};

export default Expenses;
