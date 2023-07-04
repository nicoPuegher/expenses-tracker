import React from 'react';

const ExpensesContext = React.createContext({
  expenses: {
    2023: {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
    },
    2022: {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
    },
  },
  total2023: 0,
  total2022: 0,
  addExpense: () => {},
});

export default ExpensesContext;
