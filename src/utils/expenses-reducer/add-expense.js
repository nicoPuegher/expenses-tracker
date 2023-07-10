const addExpense = (state, updatedExpenses, updatedView, updatedTotal) => ({
  ...state,
  expenses: updatedExpenses,
  currentView: updatedView,
  total: updatedTotal,
});

export default addExpense;
