import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default class Cart extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <div>
          {
            cartList.map(({ title, id }) => (
              <h3 data-testid="shopping-cart-product-name" key={ id }>{ title }</h3>
            ))
          }
          <h4 data-testid="shopping-cart-product-quantity">{cartList.length}</h4>
        </div>
        <Link data-testid="checkout-products" to="/checkout" />
      </div>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.string),
}.isRequired;
