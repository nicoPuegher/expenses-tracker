import React from 'react';
import Filter from '../Filter/Filter';
import TransactionDate from '../TransactionDate/TransactionDate';
import Tag from '../Tag/Tag';
import expenses from './expenses';

function Transactions() {
  const transactions = expenses.map((transaction) => (
    <li key={transaction.id} className="flex py-2">
      <div className="flex w-full items-center gap-x-4">
        <TransactionDate date={transaction.date} />
        <div className="flex min-w-0 flex-auto items-center justify-between">
          <div>
            <p className="pb-1 text-sm font-semibold leading-none text-gray-900">
              {transaction.name}
            </p>
            <Tag name={transaction.type} color="bg-gray-50" />
          </div>
          <p className="text-base text-gray-500">${transaction.amount}</p>
        </div>
      </div>
    </li>
  ));

  return (
    <section>
      <Filter title="Transactions" options="Year" />
      <ul className="divide-y divide-gray-100">{transactions}</ul>
    </section>
  );
}

export default Transactions;
