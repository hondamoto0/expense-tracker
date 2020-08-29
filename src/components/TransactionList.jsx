import React from 'react';
import { useSelector } from 'react-redux';
import { Transaction } from 'components';
const TransactionList = () => {
  const transactions = useSelector(state => state.transactions);
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
