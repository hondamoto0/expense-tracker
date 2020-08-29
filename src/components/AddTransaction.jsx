import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTransaction } from 'actions';
import { useDispatch } from 'react-redux';

const AddTransaction = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [amount, setAmout] = useState(0);

  const _handleText = ({ target: { value } }) => {
    setText(value);
  };

  const _handleAmount = ({ target: { value } }) => {
    setAmout(value);
  };

  const _onSubmitForm = e => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: Number(amount),
      id: uuidv4(),
    };
    dispatch(addTransaction(newTransaction));
    setAmout(0);
    setText('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={e => _onSubmitForm(e)} id='form'>
        <div className='form-control'>
          <label for='text'>Text</label>
          <input
            value={text}
            onChange={e => _handleText(e)}
            type='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label for='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={e => _handleAmount(e)}
            type='number'
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
