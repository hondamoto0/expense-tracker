import { combineReducers } from 'redux';
import transactionsReducer from 'reducers/transactionsReducer';
export default combineReducers({
  transactions: transactionsReducer,
});
