import React, { useContext } from 'react';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import Empty from './Empty';
import ByYear from './ByYear';
import ByMonth from './ByMonth';

function Expenses() {
  const {
    expenses: exp,
    currentView: {
      filter: { active: fActive, current: currYear },
      month: { active: mActive, current: currMonth, name: currName },
    },
    total,
  } = useContext(ExpensesContext);

  const hash = yearHash(currYear);

  const isEmpty = total[hash] === 0 || exp[hash][currMonth].total === 0;
  const alert = { month: currMonth, name: currName, year: currYear };
  if (isEmpty) return <Empty alert={alert} />;

  return (
    <section className="overflow-y-scroll rounded bg-gray-300 px-2">
      <ul className="divide-y divide-gray-100">
        {fActive && !isEmpty && <ByYear expsArr={exp[hash]} />}
        {mActive && !isEmpty && <ByMonth expsObj={exp[hash][currMonth]} />}
      </ul>
    </section>
  );
}

export default Expenses;
