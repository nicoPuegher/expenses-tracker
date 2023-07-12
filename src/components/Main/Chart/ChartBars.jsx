import React, { useContext } from 'react';
import { uniqueId } from 'lodash';
import ExpensesContext from '../../../store/expenses-context';
import yearHash from '../../../utils/hash/year-hash';
import getMonthName from '../../../utils/format-helpers/get-month-name';
import ChartBar from './ChartBar';

function ChartBars() {
  const {
    expenses,
    currentView: {
      filter: { current },
    },
    total,
  } = useContext(ExpensesContext);

  const hash = yearHash(current);

  const chartBars = expenses[hash].map((month, i) => (
    <ChartBar
      key={uniqueId('chartbar_')}
      name={getMonthName(i)}
      month={i}
      expenses={month.total}
      yearlyExpenses={total[hash]}
    />
  ));

  return chartBars;
}

export default ChartBars;
