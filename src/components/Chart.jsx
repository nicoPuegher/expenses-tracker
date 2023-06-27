import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import monthsData from './monthsData';

function Chart() {
  const yearlyExpenses = monthsData.reduce(
    (acc, curr) => acc + curr.expenses,
    0
  );

  const chartBars = monthsData.map((monthData) => (
    <ChartBar
      key={monthData.id}
      name={monthData.name}
      expenses={monthData.expenses}
      yearlyExpenses={yearlyExpenses}
    />
  ));

  return (
    <section className="mb-3 rounded bg-gray-200 py-2">
      <div className="grid grid-cols-2">{chartBars}</div>
    </section>
  );
}

export default Chart;
