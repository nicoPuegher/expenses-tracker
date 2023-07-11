import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import dayjs from 'dayjs';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import ByYear from './ByYear';
import ByMonth from './ByMonth';

function Expenses() {
  const {
    expenses,
    currentView: {
      filter: { current: currentYear },
      month: { current: currentMonth, name: currentMonthName },
    },
  } = useContext(ExpensesContext);

  const activeExpenses = [];

  const hash = yearHash(currentYear);

  // const byYear = <ByYear expensesArr={expenses[hash]} />;
  // const byMonth = <ByMonth expensesObj={expenses[hash][month]} />;

  // console.log(activeExpenses.length);
  if (activeExpenses.length === 0) {
    if (currentMonth !== null) {
      return (
        <Alert severity="error">
          No transactions found in {currentMonthName}.
        </Alert>
      );
    }
    return (
      <Alert severity="error">No transactions found in {currentYear}.</Alert>
    );
  }

  return (
    <section className="overflow-y-scroll rounded bg-gray-300 px-2">
      <ul className="divide-y divide-gray-100">{activeExpenses}</ul>
    </section>
  );
}

export default Expenses;
