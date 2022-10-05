import React from 'react';
import css from "./TransactionHistory.module.css"

import PropTypes from 'prop-types';

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
      <td>{capitalizeFirstLetter(item.type)}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        )) }
  </tbody>
      </table>
)
}

export default TransactionHistory

///////////////////First letter to uppercase Function////////
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
///////////////////First letter to uppercase Function////////

TransactionHistory.propTypes = {items:PropTypes.arrayOf(PropTypes.object).isRequired}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })).isRequired
}
