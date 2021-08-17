import React, { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';

export default class CartButton extends Component {
  render() {
    const { cart } = this.props;
    // console.log(cart);
    return (
      <div className="shop-cart">
        <Link
          to={ {
            pathname: '/shoppingcart',
            data: cart,
          } }
          data-testid="shopping-cart-button"
        >
          <AiOutlineShoppingCart size={ 70 } color="black" />
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
