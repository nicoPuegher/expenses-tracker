import React from 'react';

const ExpenseContext = React.createContext({
  expenses: {
    2023: [],
    2022: [],
    2021: [],
  },
  totalExpenses: 0,
});

export default ExpenseContext;
