import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartLink extends React.Component {
  render() {
    const { itemCount } = this.props;

    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
        <span data-testid="shopping-cart-size">{ itemCount }</span>
      </Link>
    );
  }
}

CartLink.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartLink;
