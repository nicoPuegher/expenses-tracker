import React from 'react';
import Filter from './Filter';
import Chart from './Chart';
import Expenses from './Expenses/Expenses';

function Main() {
  return (
    <main className="flex flex-1 flex-col overflow-y-hidden">
      <Filter title="Filter by year" />
      <Chart />
      <Expenses />
    </main>
  );
}

export default Main;
