import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  if (action.type === 'ADD') {
    console.log(action);
  }

  return defaultState;
};

export default expensesReducer;
