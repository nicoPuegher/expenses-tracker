import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import ByYear from './ByYear';
import ByMonth from './ByMonth';

function Expenses() {
  const {
    expenses,
    currentYearFilter,
    currentView: { current: month },
  } = useContext(ExpensesContext);

  let activeExpenses = [];

  const hash = yearHash(currentYearFilter);

  if (!month) activeExpenses = <ByYear expensesArr={expenses[hash]} />;
  if (month) activeExpenses = <ByMonth expensesArr={expenses[hash][month]} />;

  // if (displayExpenses.length === 0) {
  //   if (visibility) {
  //     const date = dayjs().month(current).$d;
  //     const monthName = date.toLocaleString('en-US', { month: 'short' });

  //     return (
  //       <Alert severity="error">No transactions found in {monthName}.</Alert>
  //     );
  //   }
  //   return (
  //     <Alert severity="error">
  //       No transactions found in {currentYearFilter}.
  //     </Alert>
  //   );
  // }

  return (
    <section className="overflow-y-scroll rounded bg-gray-300 px-2">
      <ul className="divide-y divide-gray-100">{activeExpenses}</ul>
    </section>
  );
}

export default Expenses;
