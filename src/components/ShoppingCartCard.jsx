import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartCard extends React.Component {
  render() {
    const { title, quantity } = this.props;
    if (quantity === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
    return (
      <div>
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
      </div>
    );
  }
}

ShoppingCartCard.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
