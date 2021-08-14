import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export default class CartButton extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Link
        to={ { pathname: '/carrinho', cart } }
        data-testid="shopping-cart-button"
      >
        <HiOutlineShoppingCart className="" />
      </Link>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.array).isRequired,
};
