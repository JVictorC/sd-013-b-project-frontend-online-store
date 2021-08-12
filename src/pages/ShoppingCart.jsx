import React, { Component } from 'react';
import '../App.css';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return (
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      );
    }
    return (
      <div>
        <h1>aaaa</h1>
      </div>
    );
  }
}
