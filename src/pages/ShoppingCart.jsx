import React, { Component } from 'react';
import ProductList from '../Componentes/ProductList';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(items);
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
        {items.map((itemObj) => <ProductList key={ itemObj.title } itemObj={ itemObj } 
        />)}
      </div>
    );
  }
}
