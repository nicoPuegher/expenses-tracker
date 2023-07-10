import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import dayjs from 'dayjs';
import ExpensesContext from '../../../store/expenses-context';
import ExpenseDate from './ExpenseDate';
import Tag from './Tag';

import yearHash from '../../../utils/hash/year-hash';
import ByMonth from './ByMonth';
import ByYear from './ByYear';

function Expenses() {
  const {
    expenses,
    currentYearFilter,
    currentView: { current: currentMonth },
  } = useContext(ExpensesContext);

  const activeExpenses = [];
  const hash = yearHash(currentYearFilter);

  // console.log(expenses);
  // <ByMonth expenses={expenses} hash={hash} month={currentMonth} />;
  // <ByYear expenses={expenses} hash={hash} />;

  // if (currentView.month) {
  //   const selectedMonth =
  //     expenses[Number(currentYearFilter)][current].expensesArr;
  //   const monthlyExpenses = selectedMonth.map((singleExpense) => (
  //     <li key={singleExpense.id} className="py-3">
  //       <div className="flex gap-x-4">
  //         <ExpenseDate date={singleExpense.date} />
  //         <div className="flex flex-auto items-center justify-between">
  //           <div>
  //             <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
  //               {singleExpense.title}
  //             </p>
  //             <Tag name={singleExpense.type} color="bg-gray-50" />
  //           </div>
  //           <p className="text-base text-gray-500">
  //             ${singleExpense.numAmount}
  //           </p>
  //         </div>
  //       </div>
  //     </li>
  //   ));
  //   displayExpenses = monthlyExpenses;
  // } else {
  //   const yearlyExpenses = Object.values(expenses[Number(currentYearFilter)]);
  //   yearlyExpenses.forEach((month) => {
  //     const monthlyExpenses = month.expensesArr.map((singleExpense) => (
  //       <li key={singleExpense.id} className="py-3">
  //         <div className="flex gap-x-4">
  //           <ExpenseDate date={singleExpense.date} />
  //           <div className="flex flex-auto items-center justify-between">
  //             <div>
  //               <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
  //                 {singleExpense.title}
  //               </p>
  //               <Tag name={singleExpense.type} color="bg-gray-50" />
  //             </div>
  //             <p className="text-base text-gray-500">
  //               ${singleExpense.numAmount}
  //             </p>
  //           </div>
  //         </div>
  //       </li>
  //     ));

  //     displayExpenses = [...displayExpenses, ...monthlyExpenses];
  //   });
  // }

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
      {/* <ul className="divide-y divide-gray-100">{activeExpenses}</ul> */}
      <ul className="divide-y divide-gray-100">
        {/* <ByMonth expenses={expenses} hash={hash} month={currentMonth} /> */}
        <ByYear expenses={expenses} hash={hash} />
      </ul>
    </section>
  );
}

export default Expenses;
