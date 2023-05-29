import React from 'react';
import CustomIcon from '../CustomIcon/CustomIcon';
import Tag from '../Tag/Tag';

const expenses = [
  {
    id: 'tf1',
    type: 'Food',
    name: 'Supermarket',
    amount: 35,
  },
  {
    id: 'tr1',
    type: 'Rent',
    name: 'Apartment',
    amount: 1500,
  },
  {
    id: 'tt1',
    type: 'Transport',
    name: 'Bus',
    amount: 2,
  },
];

function Transactions() {
  const transactions = expenses.map((transaction) => (
    <li key={transaction.id} className="flex py-2">
      <div className="flex w-full items-center gap-x-4">
        <div className="flex h-7 w-7 flex-none items-center justify-center rounded bg-gray-300">
          <CustomIcon iconType={transaction.type} />
        </div>
        <div className="flex min-w-0 flex-auto items-center justify-between">
          <div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {transaction.name}
            </p>
            <Tag name={transaction.type} color="bg-gray-50" />
          </div>
          <p className="text-base leading-5 text-gray-500">
            ${transaction.amount}
          </p>
        </div>
      </div>
    </li>
  ));

  return <ul className="divide-y divide-gray-100">{transactions}</ul>;
}

export default Transactions;
