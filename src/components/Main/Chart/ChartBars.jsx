import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { uniqueId } from 'lodash';
import ExpensesContext from '../../../store/expenses-context';
import ChartBar from './ChartBar';

import yearHash from '../../../utils/expenses-reducer/year-hash';

function ChartBars() {
  const { expenses, currentYearFilter, total } = useContext(ExpensesContext);

  const hash = yearHash(currentYearFilter);

  console.log(expenses[hash]);

  const chartBars = months.map((month, i) => {
    const date = dayjs().month(i).$d;
    const monthName = date.toLocaleString('en-US', { month: 'short' });

    return (
      <ChartBar
        key={uniqueId('chartbar_')}
        name={monthName}
        month={i}
        expenses={month.total}
        yearlyExpenses={total[Number(currentYearFilter)]}
      />
    );
  });

  return chartBars;
}

export default ChartBars;
