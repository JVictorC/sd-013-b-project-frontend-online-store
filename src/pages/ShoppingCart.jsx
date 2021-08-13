import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.increaseQtd = this.increaseQtd.bind(this);
    this.decreaseQtd = this.decreaseQtd.bind(this);
  }

  increaseQtd = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  decreaseQtd = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  }

  render() {
    const { location } = this.props;
    const { cart } = location;
    const { quantity } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {cart.map((car) => (
          <div key={ car.id }>
            <h5 data-testid="shopping-cart-product-name">{car.title}</h5>
            <p
              data-testid="shopping-cart-product-quantity"
              onChange={ this.increaseQtd }
            >
              { quantity }
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ this.increaseQtd }
            >
              +
            </button>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ this.decreaseQtd }
            >
              -
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.arrayOf(PropTypes.array).isRequired,
};
