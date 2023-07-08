import React, { useContext } from 'react';
import { uniqueId } from 'lodash';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/expenses-reducer/year-hash';
import monthName from '../../../utils/format-helpers/month-name';
import ChartBar from './ChartBar';

function ChartBars() {
  const { expenses, currentYearFilter, total } = useContext(ExpensesContext);

  const hash = yearHash(currentYearFilter);

  const chartBars = expenses[hash].map((month, i) => {
    const name = monthName(i);
    const unique = uniqueId('chartbar_');

    return (
      <ChartBar
        key={unique}
        name={name}
        month={i}
        expenses={month.total}
        yearlyExpenses={total[hash]}
      />
    );
  });

  return chartBars;
}

export default ChartBars;
