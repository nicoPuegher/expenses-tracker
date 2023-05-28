import React from 'react';
import ChartNav from '../ChartNav/ChartNav';
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
    <section className="bg-gray-200">
      <ChartNav />
      {chartBars}
    </section>
  );
}

export default Chart;
