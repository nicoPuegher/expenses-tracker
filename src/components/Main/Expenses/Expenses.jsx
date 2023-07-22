import React, { useContext } from 'react';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import Empty from './Displays/Empty';
import ByYear from './Displays/ByYear';
import ByMonth from './Displays/ByMonth';

function Expenses() {
  const {
    expenses: exp,
    currentView: {
      filter: { active: fActive, current: currYear },
      month: { active: mActive, current: currMonth, long: currLong },
    },
    total,
  } = useContext(ExpensesContext);

  const hash = yearHash(currYear);

  let isEmpty = null;
  isEmpty = fActive ? total[hash] === 0 : exp[hash][currMonth].total === 0;

  const alert = { month: currMonth, long: currLong, year: currYear };
  if (isEmpty) return <Empty type="info" alert={alert} />;

  return (
    <section className="overflow-y-scroll rounded bg-neutral-800 px-2">
      <ul className="divide-y divide-neutral-900">
        {fActive && !isEmpty && <ByYear expsArr={exp[hash]} />}
        {mActive && !isEmpty && <ByMonth expsObj={exp[hash][currMonth]} />}
      </ul>
    </section>
  );
}

export default Expenses;
