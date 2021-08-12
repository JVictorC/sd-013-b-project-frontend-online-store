import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    const item = JSON.parse(localStorage.getItem('item'));
    if (localStorage.length === 0) {
      return (
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      );
    }
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ item.title }</h5>
        <img src={ item.thumbnail } alt={ item.title } width="150px" />
        <p>{`R$${item.price}`}</p>
        <p data-testid="shopping-cart-product-quantity">{localStorage.length}</p>
      </div>
    );
  }
}
