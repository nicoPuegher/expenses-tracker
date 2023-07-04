import React from 'react';

const ExpensesContext = React.createContext({
  expenses: {
    2023: [],
    2022: [],
    2021: [],
  },
  totalExpenses: 0,
  addExpense: () => {},
});

export default ExpensesContext;
