import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default class CartButton extends Component {
  render() {
    return (
      <div className="shop-cart">
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <FaShoppingCart size={ 70 } color="black" />
        </Link>
      </div>
    );
  }
}
