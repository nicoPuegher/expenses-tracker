import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';
import dummyExpenses from '../../../utils/dummy-expenses';

import ExpensesContext from '../../../store/expenses-context';

function Expenses({ currentFilter }) {
  const expensesCtx = useContext(ExpensesContext);

  // const filteredTransactions = dummyExpenses.filter(
  //   (transaction) => transaction.date.getFullYear() === Number(currentFilter)
  // );

  // const transactions = filteredTransactions.map((transaction) => (
  //   <li key={transaction.id} className="py-3">
  //     <div className="flex gap-x-4">
  //       <ExpenseDate date={transaction.date} />
  //       <div className="flex flex-auto items-center justify-between">
  //         <div>
  //           <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
  //             {transaction.name}
  //           </p>
  //           <Tag name={transaction.type} color="bg-gray-50" />
  //         </div>
  //         <p className="text-base text-gray-500">${transaction.amount}</p>
  //       </div>
  //     </div>
  //   </li>
  // ));

  const transactions = [];

  if (transactions.length === 0) {
    return (
      <Alert severity="error">No transactions found in {currentFilter}.</Alert>
    );
  }

  return (
    <section className="overflow-y-scroll rounded bg-gray-300 px-2">
      <ul className="divide-y divide-gray-100">{transactions}</ul>
    </section>
  );
}

Expenses.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};

export default Expenses;
