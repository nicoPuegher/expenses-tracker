import React from 'react';
import New from './components/New/New';
import Filter from './components/Filter/Filter';
import Chart from './components/Chart/Chart';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div className="flex h-full flex-col px-2 py-3">
      <New />
      <Filter title="Filter by" option="Year" />
      <Chart />
      <Transactions />
    </div>
  );
}

export default App;
