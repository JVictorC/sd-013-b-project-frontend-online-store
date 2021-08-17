import React, { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
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
          <AiOutlineShoppingCart size={ 70 } color="black" />
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
