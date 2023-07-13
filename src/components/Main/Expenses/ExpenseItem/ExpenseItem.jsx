import React from 'react';
import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import ExpenseTag from './ExpenseTag';

function ExpenseItem({ expData }) {
  return (
    <div className="flex gap-x-4">
      <ExpenseDate date={expData.date} />
      <div className="flex flex-auto items-center justify-between">
        <div className="text-left">
          <p className="pb-1.5 text-sm font-semibold leading-none text-gray-900">
            {expData.title}
          </p>
          <ExpenseTag name={expData.type} color="bg-gray-50" />
        </div>
        <p className="text-base text-gray-500">${expData.amount}</p>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
};

export default ExpenseItem;
