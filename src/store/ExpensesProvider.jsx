import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import expensesReducer from './expensesReducer';
import defaultState from './expenses-default';
import ExpensesContext from './expenses-context';

function ExpensesProvider({ children }) {
  const [expensesState, dispatchExpense] = useReducer(
    expensesReducer,
    defaultState
  );

  const addExpense = (expense) => {
    dispatchExpense({ type: 'ADD', expense });
  };

  const expensesContext = useMemo(
    () => ({
      expenses: expensesState.expenses,
      total2023: expensesState.total2023,
      total2022: expensesState.total2022,
      addExpense,
    }),
    [expensesState.expenses, expensesState.total2023, expensesState.total2022]
  );

  return (
    <ExpensesContext.Provider value={expensesContext}>
      {children}
    </ExpensesContext.Provider>
  );
}

ExpensesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExpensesProvider;
