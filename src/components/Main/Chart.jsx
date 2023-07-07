import React, { useContext } from 'react';
import ExpensesContext from '../../store/expenses-context';
import ChartBar from './ChartBar';
import monthsData from '../../utils/months-data';

function Chart() {
  const expensesCtx = useContext(ExpensesContext);
  const { total, currentFilter } = expensesCtx;

  console.log(total);

  const chartBars = monthsData.map((monthData) => (
    <ChartBar
      key={monthData.id}
      name={monthData.name}
      expenses={monthData.expenses}
      yearlyExpenses={Number(total[currentFilter])}
    />
  ));

  return (
    <section className="mb-3 rounded bg-gray-200 py-2">
      <div className="grid grid-cols-2">{chartBars}</div>
    </section>
  );
}

export default Chart;
