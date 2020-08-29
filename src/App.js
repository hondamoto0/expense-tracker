import React from 'react';
import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  AddTransaction,
} from 'components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
