import React from 'react';
import List from '../components/List';

class ShoppingCart extends React.Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('product'));
    if (cartProducts === null) {
      return (
        <div data-testid="shopping-cart-empty-message">
          <h1>Seu carrinho está vazio</h1>
        </div>
      );
    } return (
      <ul>
        {cartProducts.map((product) => (
          <List
            key={ product.title }
            onClick1={ this.handleClick1 }
            onClick2={ this.handleClick2 }
            product={ product }
          />
        ))}
      </ul>
    );
  }
}

export default ShoppingCart;
