import React from 'react';
import { useSelector } from 'react-redux';
const Balance = () => {
  const total = useSelector(state =>
    state.transactions
      .reduce((total, transaction) => (total += transaction.amount), 0)
      .toFixed(2)
  );
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </>
  );
};

export default Balance;
