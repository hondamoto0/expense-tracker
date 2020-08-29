import { DELETE_TRANSACTION, ADD_TRANSACTION } from 'common/constants';

const initialState = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
];

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case DELETE_TRANSACTION:
      return state.filter(item => item.id !== payload);
    case ADD_TRANSACTION:
      return [...state, payload];
    default:
      return state;
  }
}
