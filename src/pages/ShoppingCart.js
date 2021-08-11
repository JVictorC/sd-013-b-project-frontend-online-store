import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <div>
          <ShoppingCartCards cartProducts={ cartProducts } />
        </div>
        <div>
          <Link
            data-testid="checkout-products"
            to="/checkout"
          >
            Finalizar Compra
          </Link>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
