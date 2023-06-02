import React from 'react';
import Add from './components/Add/Add';
import Filter from './components/Filter/Filter';
import Chart from './components/Chart/Chart';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div className="flex h-full flex-col px-2 py-3">
      <Add />
      <Filter title="Filter by" option="Year" />
      <Chart />
      <Transactions />
    </div>
  );
}

export default App;
