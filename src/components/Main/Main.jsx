import React from 'react';
import Filter from './Filter';
import Chart from './Chart';
import Expenses from './Expenses/Expenses';

function Main() {
  const changeFilterHandler = () => {};

  return (
    <main>
      <Filter title="Filter by year" onChangeFilter={changeFilterHandler} />
      <Chart />
      <Expenses currentFilter={2023} />
    </main>
  );
}

export default Main;