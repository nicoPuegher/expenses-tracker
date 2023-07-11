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
  currentView: {
    filter: {
      active: true,
      current: '2023',
    },
    month: {
      active: false,
      current: null,
      name: null,
    },
  },
  total: [0, 0],
  addExpense: () => {},
  changeFilter: () => {},
});

export default ExpensesContext;
