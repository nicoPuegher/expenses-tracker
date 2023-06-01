import React from 'react';
import Add from './components/Add/Add';
import Chart from './components/Chart/Chart';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div className="flex h-full flex-col px-2 py-4">
      <Add />
      <Chart />
      <Transactions />
    </div>
  );
}

export default App;
