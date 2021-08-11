import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  

  render() {
    const { item, handleQuantity, handleChange } = this.props;
    return (
      <li key={ item.id }>
      { `${item.title}, R$${item.price}` }
      <button type="button" onClick={ handleQuantity(1) }>+</button>
      <input onChange={ handleChange } />
      <button type="button" onClick={ handleQuantity(-1) }>-</button>
      </li>
    )
  }
}

CartItems.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleQuantity: PropTypes.func.isRequired,
};
