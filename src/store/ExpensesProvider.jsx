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

  const changeFilter = (mode, value, name) => {
    dispatchExpense({ type: 'FILTER', mode, value, name });
  };

  const changeExpense = (mode, expense) => {
    dispatchExpense({ type: 'CHANGE', mode, expense });
  };

  const expensesContext = useMemo(
    () => ({
      expenses: expensesState.expenses,
      currentView: expensesState.currentView,
      total: expensesState.total,
      addExpense,
      changeFilter,
      changeExpense,
    }),
    [expensesState.expenses, expensesState.currentView, expensesState.total]
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
