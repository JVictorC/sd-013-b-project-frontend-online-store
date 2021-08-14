import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CartButton extends Component {
  render() {
    const { cart } = this.props;
    // console.log(cart);
    return (
      <div>
        <Link
          to={ {
            pathname: '/shoppingcart',
            data: cart,
          } }
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
