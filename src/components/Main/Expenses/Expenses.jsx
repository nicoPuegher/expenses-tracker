import React, { useContext } from 'react';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import Container from '../../UI/Container';
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
    <Container className="overflow-y-scroll border-y-14 border-neutral-800 bg-neutral-800  lg:py-0">
      <ul className="flex flex-col gap-y-3">
        {fActive && !isEmpty && <ByYear expsArr={exp[hash]} />}
        {mActive && !isEmpty && <ByMonth expsObj={exp[hash][currMonth]} />}
      </ul>
    </Container>
  );
}

export default Expenses;
