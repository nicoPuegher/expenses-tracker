import React from 'react';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

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
    <li key={transaction.id} className="flex justify-between gap-x-6 py-3">
      <div className="flex items-center gap-x-4">
        <div className="h-7 w-7 flex-none rounded bg-gray-300">
          <LocalDiningIcon />
        </div>
        <div className="flex min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {transaction.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {transaction.amount}
          </p>
        </div>
      </div>
    </li>
  ));

  return <ul className="divide-y divide-gray-100">{transactions}</ul>;
}

export default Transactions;
