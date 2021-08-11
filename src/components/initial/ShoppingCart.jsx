import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const { itens, onClick } = this.props;
    console.log(itens);
    return (
      <div>
        <div data-testid="shopping-cart-product-name">
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
