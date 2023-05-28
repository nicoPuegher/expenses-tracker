import React from 'react';
import ChartNav from '../ChartNav/ChartNav';
import ChartBar from '../ChartBar/ChartBar';
import monthsData from './monthsData';

function Chart() {
  const chartBars = monthsData.map((monthData) => (
    <ChartBar
      key={monthData.id}
      name={monthData.name}
      expenses={monthData.expenses}
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
