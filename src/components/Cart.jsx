import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class Cart extends React.Component {
  getProductFromStorage = () => {
    const parse = JSON.parse(localStorage.getItem('cart'));
    return (
      <div className="product-in-cart">
        {parse.map((product) => <CartItem key={ product.id } product={ product } />)}
      </div>
    );
  }

  render() {
    if (localStorage.key('cart')) {
      return this.getProductFromStorage();
    }
    return (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>);
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.oneOfType(PropTypes.object, PropTypes.string),
  }).isRequired,
};

export default Cart;
