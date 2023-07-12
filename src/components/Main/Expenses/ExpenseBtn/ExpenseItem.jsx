import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseTag from './ExpenseTag';

function ExpenseItem() {
  return (
    <div className="flex gap-x-4">
      <ExpenseDate date={singleExpense.date} />
      <div className="flex flex-auto items-center justify-between">
        <div className="text-left">
          <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
            {singleExpense.title}
          </p>
          <Tag name={singleExpense.type} color="bg-gray-50" />
        </div>
        <p className="text-base text-gray-500">${singleExpense.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
