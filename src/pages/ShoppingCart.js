import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartCards from '../components/ShoppingCartCards';

class ShoppingCart extends React.Component {
  render() {
    const { cartProducts } = this.props;
    if (cartProducts.length === 0) {
      return (
        <h4 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h4>
      );
    }
    return (
      <div>
        <ShoppingCartCards cartProducts={ cartProducts } />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
