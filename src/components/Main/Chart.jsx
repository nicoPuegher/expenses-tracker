import React, { useContext } from 'react';
import { uniqueId } from 'lodash';
import dayjs from 'dayjs';
import ExpensesContext from '../../store/expenses-context';
import ChartBar from './ChartBar';

function Chart() {
  const expensesCtx = useContext(ExpensesContext);
  const { expenses, currentFilter, total } = expensesCtx;

  const months = Object.values(expenses[currentFilter]);

  const chartBars = months.map((month, i) => {
    const date = dayjs().month(i).$d;
    const monthName = date.toLocaleString('en-US', { month: 'short' });

    return (
      <ChartBar
        key={uniqueId('chartbar_')}
        name={monthName}
        month={i}
        expenses={month.total}
        yearlyExpenses={total[currentFilter]}
      />
    );
  });

  return (
    <section className="mb-3 rounded bg-gray-200 py-2">
      <div className="grid grid-cols-2">{chartBars}</div>
    </section>
  );
}

export default Chart;
