import React from 'react';
import { useSelector } from 'react-redux';
import { signPrice, totalAmount } from 'utils/price';
const IncomeExpense = () => {
  const transactionsAmount = useSelector(state =>
    state.transactions.map(transaction => transaction.amount)
  );

  const income = totalAmount(transactionsAmount.filter(amount => amount > 0));

  const expense =
    totalAmount(transactionsAmount.filter(amount => amount < 0)) * -1;

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          ${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
