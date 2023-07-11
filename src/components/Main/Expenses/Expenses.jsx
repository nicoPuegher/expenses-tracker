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
      filter: { current: currYear },
      month: { current: currMonth, name: currName },
    },
  } = useContext(ExpensesContext);

  let exps = [];
  const hash = yearHash(currYear);
  const isEmpty = exps.length === 0;

  exps = isEmpty && <Empty month={currMonth} name={currName} year={currYear} />;
  exps = currYear && <ByYear expsArr={exp[hash]} />;
  exps = currMonth && <ByMonth expsObj={exp[hash][currMonth]} />;

  return (
    <section className="overflow-y-scroll rounded bg-gray-300 px-2">
      <ul className="divide-y divide-gray-100">{exps}</ul>
    </section>
  );
}

export default Expenses;
