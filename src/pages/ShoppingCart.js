import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartCards from '../components/ShoppingCartCards';

class ShoppingCart extends React.Component {
  render() {
    const { cartProducts, handleQuant } = this.props;
    if (cartProducts.length === 0) {
      return (
        <h4 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h4>
      );
    }
    return (
      <div>
        <ShoppingCartCards cartProducts={ cartProducts } handleQuant={ handleQuant } />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleQuant: PropTypes.func.isRequired,
};

export default ShoppingCart;
