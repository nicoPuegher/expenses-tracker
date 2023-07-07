import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import ExpensesContext from '../../../store/expenses-context';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

function Expenses() {
  const expensesCtx = useContext(ExpensesContext);
  const { expenses, currentFilter } = expensesCtx;

  let displayExpenses = [];
  const yearlyExpenses = Object.values(expenses[currentFilter]);

  yearlyExpenses.forEach((month) => {
    const monthlyExpenses = month.expensesArr.map((singleExpense) => (
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

export default Expenses;
