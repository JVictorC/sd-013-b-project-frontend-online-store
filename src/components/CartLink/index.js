import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GrCart } from 'react-icons/gr';

import './style.css';

class CartLink extends React.Component {
  render() {
    const { itemCount } = this.props;

    return (
      <Link className="cart-link" to="/cart" data-testid="shopping-cart-button">
        <GrCart />
        <span data-testid="shopping-cart-size">{ itemCount }</span>
      </Link>
    );
  }
}

CartLink.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartLink;
