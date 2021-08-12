import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { location: { state: { cartItems } } } = this.props;
    const emptyCart = (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>);

    return (
      <div>
        {cartItems.length !== 0 && (
          cartItems.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{`R$${price}`}</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))
        )}
        {cartItems.length === 0 && emptyCart }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartItems: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
    }),
  }).isRequired,
};

export default ShoppingCart;
