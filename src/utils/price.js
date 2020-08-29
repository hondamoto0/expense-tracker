import numeral from 'numeral';

export const signPrice = price => (price > 0 ? '+' : '-');

export const totalAmount = amountArr =>
  numeral(amountArr.reduce((total, amount) => (total += amount), 0)).format(
    '0,0.00'
  );

export const transferAmount = amount =>
  numeral(Math.abs(amount)).format('0,0.00');
