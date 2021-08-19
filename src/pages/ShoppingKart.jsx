import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingKart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: props.cartItems,
    };
  }

  removeProduct = (index) => {
    const { cartItems } = this.state;
    const deepCopy = [...cartItems];
    deepCopy.splice(index, 1);
    this.setState({ cartItems: deepCopy });
  }

  handleAmount = (operation, index) => {
    const { cartItems } = this.state;
    const deepCopy = [...cartItems];

    if (operation === 'plus') {
      deepCopy[index].actualAmount += 1;
      this.setState({ cartItems: deepCopy });
      return;
    }

    if (deepCopy[index].actualAmount > 0) {
      deepCopy[index].actualAmount -= 1;
      this.setState({ cartItems: deepCopy });
    }
  }

  sumPrice = () => {
    const { cartItems } = this.state;
    const totalPrice = cartItems.reduce((acc, { actualAmount }) => actualAmount, 0);
    return (<p>{totalPrice}</p>);
  }

  renderCartProducts = (cartItems) => (
    cartItems.map(({ id, title, thumbnail, price, actualAmount }, index) => (
      <div key={ id }>
        <button type="button" onClick={ () => this.removeProduct(index) }>X</button>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <img
          src={ thumbnail }
          alt={ title }
          style={ { width: '150px' } }
        />
        <p>{price * actualAmount}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          name="increase"
          onClick={ () => this.handleAmount('plus', index) }
        >
          +
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {actualAmount}
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name="decrease"
            onClick={ () => this.handleAmount('subtract', index) }
          >
            -
          </button>
        </p>
        <Link data-testid="checkout-products" to="/checkout">Checkout</Link>
      </div>
    ))
  );

  render() {
    const emptyCartMessage = (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );

    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.length ? this.renderCartProducts(cartItems) : emptyCartMessage}
        { this.sumPrice()}
      </div>
    );
  }
}

ShoppingKart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
