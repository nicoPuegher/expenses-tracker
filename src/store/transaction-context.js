import React from 'react';

const TransactionContext = React.createContext({
  transactions: {
    2023: [],
    2022: [],
    2021: [],
  },
  totalTransactions: 0,
});

export default TransactionContext;
