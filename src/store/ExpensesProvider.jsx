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

  const changeFilter = (mode, value, name, long) => {
    dispatchExpense({ type: 'FILTER', mode, value, name, long });
  };

  const changeExpense = (mode, oldExp, newExp) => {
    dispatchExpense({ type: 'CHANGE', mode, oldExp, newExp });
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
