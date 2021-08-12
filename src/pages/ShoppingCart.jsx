import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('product'));

    if (cartProducts === null) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    } return (
      <ul>
        {cartProducts.map((e) => (
          <li
            key={ e.title }
          >
            <span data-testid="shopping-cart-product-quantity">
              {`${e.qts}: `}
            </span>

            <span data-testid="shopping-cart-product-name">
              {e.title}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShoppingCart;
