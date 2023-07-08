import React from 'react';

const ExpensesContext = React.createContext({
  expenses: {
    2023: {
      0: { total: 0, expensesArr: [] },
      1: { total: 0, expensesArr: [] },
      2: { total: 0, expensesArr: [] },
      3: { total: 0, expensesArr: [] },
      4: { total: 0, expensesArr: [] },
      5: { total: 0, expensesArr: [] },
      6: { total: 0, expensesArr: [] },
      7: { total: 0, expensesArr: [] },
      8: { total: 0, expensesArr: [] },
      9: { total: 0, expensesArr: [] },
      10: { total: 0, expensesArr: [] },
      11: { total: 0, expensesArr: [] },
    },
    2022: {
      0: { total: 0, expensesArr: [] },
      1: { total: 0, expensesArr: [] },
      2: { total: 0, expensesArr: [] },
      3: { total: 0, expensesArr: [] },
      4: { total: 0, expensesArr: [] },
      5: { total: 0, expensesArr: [] },
      6: { total: 0, expensesArr: [] },
      7: { total: 0, expensesArr: [] },
      8: { total: 0, expensesArr: [] },
      9: { total: 0, expensesArr: [] },
      10: { total: 0, expensesArr: [] },
      11: { total: 0, expensesArr: [] },
    },
  },
  currentYearFilter: '2023',
  displayMonth: {
    visibility: false,
    current: null,
  },
  currentView: {
    filter: true,
    month: false,
  },
  total: {
    2023: 0,
    2022: 0,
  },
  addExpense: () => {},
  changeFilter: () => {},
});

export default ExpensesContext;
