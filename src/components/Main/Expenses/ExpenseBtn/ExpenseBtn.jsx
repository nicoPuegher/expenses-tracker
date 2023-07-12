import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseBtn() {
  return (
    <button className="w-full" type="button">
      <ExpenseItem />
    </button>
  );
}

export default ExpenseBtn;
