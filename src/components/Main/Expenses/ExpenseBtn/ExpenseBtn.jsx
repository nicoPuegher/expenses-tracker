import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

function ExpenseBtn({ singleExpense }) {
  return (
    <button className="w-full" type="button">
      <ExpenseItem singleExpense={singleExpense} />
    </button>
  );
}

ExpenseBtn.propTypes = {
  singleExpense: PropTypes.instanceOf(Object).isRequired,
};

export default ExpenseBtn;
