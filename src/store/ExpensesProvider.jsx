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

  const changeFilter = (mode, current) => {
    dispatchExpense({ type: 'FILTER', mode, current });
  };

  const expensesContext = useMemo(
    () => ({
      expenses: expensesState.expenses,
      currentYearFilter: expensesState.currentYearFilter,
      currentView: expensesState.currentView,
      total: expensesState.total,
      addExpense,
      changeFilter,
    }),
    [
      expensesState.expenses,
      expensesState.currentYearFilter,
      expensesState.currentView,
      expensesState.total,
    ]
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
