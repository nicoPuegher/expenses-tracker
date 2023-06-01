import React from 'react';
import Filter from '../Filter/Filter';
import TransactionDate from '../TransactionDate/TransactionDate';
import Tag from '../Tag/Tag';
import expenses from './expenses';

function Transactions() {
  const transactions = expenses.map((transaction) => (
    <li key={transaction.id} className="py-2">
      <div className="flex gap-x-4">
        <TransactionDate date={transaction.date} />
        <div className="flex flex-auto items-center justify-between">
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
    <section className="overflow-hidden overflow-y-scroll rounded bg-gray-300 p-2">
      <Filter title="Transactions" option="Year" />
      <ul className="divide-y divide-gray-100">{transactions}</ul>
    </section>
  );
}

export default Transactions;
