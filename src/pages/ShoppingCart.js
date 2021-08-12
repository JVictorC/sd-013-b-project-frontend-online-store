import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
  }

  addCount() {
    const addNumber = 1;
    this.setState((prevState) => ({ quantity: [...prevState.quantity, +addNumber] }));
  }

  subCount() {
    const subNumber = 1;
    this.setState((prevState) => ({ quantity: [...prevState.quantity, -subNumber] }));
  }

  render() {
    const { quantity } = this.state;
    const { location: { state: { cartItems } } } = this.props;
    const emptyCart = (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>);

    return (
      <div>
        {cartItems.length !== 0 && (
          cartItems.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{`R$${price}`}</p>
              <div>
                <label htmlFor="quantity">
                  { quantity }
                  <input
                    name="quantity"
                    type="number"
                    data-testid="shopping-cart-product-quantity"
                    min="1"
                  />
                </label>
                <button type="button" onClick={ this.addCount() }>+</button>
                <button type="button" onClick={ this.subCount() }>-</button>
              </div>
            </div>
          ))
        )}
        {cartItems.length === 0 && emptyCart }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartItems: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
    }),
  }).isRequired,
};

export default ShoppingCart;
