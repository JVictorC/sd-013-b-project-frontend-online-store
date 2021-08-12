import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;

    if (state.length > 0) {
      return (
        <div className="product-in-cart">
          {state.map((product) => <CartItem key={ product.id } product={ product } />)}
        </div>
      );
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
