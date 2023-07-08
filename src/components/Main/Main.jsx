import React, { useContext } from 'react';
import ExpensesContext from '../../store/expenses-context';
import Filter from './Filter';
import Chart from './Chart';
import Expenses from './Expenses/Expenses';
import yearList from '../../utils/dropdown/filter-year';

function Main() {
  const { currentYearFilter } = useContext(ExpensesContext);

  return (
    <main className="flex flex-1 flex-col overflow-y-hidden">
      <Filter
        title="Filter by year"
        currentFilter={currentYearFilter}
        filterList={yearList}
      />
      <Chart />
      <Expenses />
    </main>
  );
}

export default Main;
