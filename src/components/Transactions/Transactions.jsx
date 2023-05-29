import React from 'react';
import TransactionDate from '../TransactionDate/TransactionDate';
import Tag from '../Tag/Tag';

const expenses = [
  {
    id: 'tf1',
    type: 'Food',
    name: 'Supermarket',
    amount: 35,
    date: new Date(2023, 4, 29),
  },
  {
    id: 'tr1',
    type: 'Rent',
    name: 'Apartment',
    amount: 1500,
    date: new Date(2023, 4, 29),
  },
  {
    id: 'tt1',
    type: 'Transport',
    name: 'Bus',
    amount: 2,
    date: new Date(2023, 4, 26),
  },
];

function Transactions() {
  const transactions = expenses.map((transaction) => (
    <li key={transaction.id} className="flex py-2">
      <div className="flex w-full items-center gap-x-4">
        <TransactionDate date={transaction.date} />
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
