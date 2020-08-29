import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'actions';
import { transferAmount } from 'utils/price';
const Transaction = ({ transaction: { id, text, amount } }) => {
  const dispatch = useDispatch();
  const sign = amount > 0 ? '+' : amount === 0 ? '' : '-';
  const liWrapperClass = amount > 0 ? 'plus' : 'minus';
  const _deleteTransaction = id => {
    dispatch(deleteTransaction(id));
  };
  const newAmount = transferAmount(amount);
  return (
    <li className={liWrapperClass}>
      {text}
      <span>
        {sign}${newAmount}
      </span>
      <button onClick={() => _deleteTransaction(id)} className='delete-btn'>
        x
      </button>
    </li>
  );
};

export default Transaction;
