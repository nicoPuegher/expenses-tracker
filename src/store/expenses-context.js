import React from 'react';

const ExpensesContext = React.createContext({
  expenses: [
    [
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
    ],
    [
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
      { total: 0, arr: [] },
    ],
  ],
  currentYearFilter: '2023',
  currentView: {
    filter: true,
    month: false,
    current: null,
  },
  total: [0, 0],
  addExpense: () => {},
  changeFilter: () => {},
});

export default ExpensesContext;
