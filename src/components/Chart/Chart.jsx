import React from 'react';
import ChartNav from '../ChartNav/ChartNav';
import ChartBar from '../ChartBar/ChartBar';

function Chart() {
  return (
    <section className="bg-gray-200">
      <ChartNav />
      <ChartBar name="Jan" />
      <ChartBar name="Feb" />
      <ChartBar name="Mar" />
      <ChartBar name="Apr" />
      <ChartBar name="May" />
      <ChartBar name="Jun" />
    </section>
  );
}

export default Chart;
