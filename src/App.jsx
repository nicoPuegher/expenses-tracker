import React from 'react';
import Name from './components/Name/Name';
import Add from './components/Add/Add';
import Chart from './components/Chart/Chart';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div className="p-2">
      <Name />
      <Add />
      <Chart />
      <Transactions />
    </div>
  );
}

export default App;
