import React, { useContext } from 'react';
import ExpensesContext from '../../store/expenses-context';
import Filter from './Filter';
import yearList from '../../utils/lists/filter-year';
import Chart from './Chart/Chart';
import Expenses from './Expenses/Expenses';

function Main() {
  const {
    currentView: {
      filter: { current },
    },
  } = useContext(ExpensesContext);

  return (
    <main className="flex flex-col overflow-y-hidden">
      <Filter
        title="Filter by year"
        currentFilter={current}
        filterList={yearList}
      />
      <Chart />
      <Expenses />
    </main>
  );
}

export default Main;
