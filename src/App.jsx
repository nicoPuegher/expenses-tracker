import React from 'react';
import Header from './components/Header/Header';
// import React, { useState } from 'react';
// import New from './components/New/New';
// import Filter from './components/Filter/Filter';
// import Chart from './components/Chart/Chart';
// import Transactions from './components/Transactions/Transactions';

function App() {
  // const [newFilter, setNewFilter] = useState('2023');

  // const changeFilterHandler = (filter) => {
  //   setNewFilter(filter);
  // };

  return (
    <div className="flex h-full flex-col px-2 py-3">
      <Header />
      {/* <New />
      <Filter title="Filter by year" onChangeFilter={changeFilterHandler} />
      <Chart />
      <Transactions currentFilter={newFilter} /> */}
    </div>
  );
}

export default App;
