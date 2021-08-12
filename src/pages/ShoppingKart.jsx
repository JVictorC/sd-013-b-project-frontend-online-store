import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingKart extends Component {
  renderCartProducts = (cartItems) => (
    cartItems.map(({ id, title, thumbnail, price, actualQtd }) => (
      <div key={ id }>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <img
          src={ thumbnail }
          alt={ title }
          style={ { width: '150px' } }
        />
        <p>{price}</p>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { `Quantidade ${actualQtd} unidade(s)` }
        </p>
      </div>
    ))
  );

  render() {
    const emptyCartMessage = (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );

    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length ? this.renderCartProducts(cartItems) : emptyCartMessage}
      </div>
    );
  }
}

ShoppingKart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
