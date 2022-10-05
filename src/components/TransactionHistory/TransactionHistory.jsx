import React from 'react';


import PropTypes from 'prop-types';

import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) =>{
  return (
  <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
      </thead>
      <tbody>
        {items.map(item => (
    <tr key={item.id}>
      <td className={css.firstColmn}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        )) }
  </tbody>
      </table>
)
}

export default TransactionHistory



TransactionHistory.propTypes = {items:PropTypes.arrayOf(PropTypes.object).isRequired}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })).isRequired
}
