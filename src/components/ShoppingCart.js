import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from './ShoppingCartIcon';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    this.state = {
      cartItems: state,
    };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(id) {
    const { cartItems } = this.state;
    const increaseQuantity = cartItems.map((item) => (id === item.id
      ? { ...item, quantity: item.quantity + 1 }
      : item));
    this.setState({
      cartItems: increaseQuantity,
    });
  }

  decreaseQuantity(id) {
    const { cartItems } = this.state;
    const decreaseQuantity = cartItems.map((item) => (id === item.id
      ? { ...item, quantity: item.quantity - 1 }
      : item));
    this.setState({
      cartItems: decreaseQuantity,
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <ShoppingCartIcon />
        { cartItems.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cartItems.map(({ id, title, thumbnail, quantity }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decreaseQuantity(id) }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.increaseQuantity(id) }
              >
                +
              </button>
            </div>
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
