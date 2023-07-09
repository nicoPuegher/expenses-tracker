import React, { useContext } from 'react';
import { uniqueId } from 'lodash';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import monthName from '../../../utils/format-helpers/month-name';
import ChartBar from './ChartBar';

function ChartBars() {
  const { expenses, currentYearFilter, total } = useContext(ExpensesContext);

  const hash = yearHash(currentYearFilter);

  const chartBars = expenses[hash].map((month, i) => (
    <ChartBar
      key={uniqueId('chartbar_')}
      name={monthName(i)}
      month={i}
      expenses={month.total}
      yearlyExpenses={total[hash]}
    />
  ));

  return chartBars;
}

export default ChartBars;
