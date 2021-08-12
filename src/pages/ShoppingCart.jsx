import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const { cartProducts } = this.props;

    if (cartProducts.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    } return (
      <ul>
        {cartProducts.map((e) => (
          <li
            data-testid="shopping-cart-product-name"
            key={ e.title }
          >
            <span data-testid="shopping-cart-product-quantity">
              {`${e.qts}: `}
            </span>
            {e.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default ShoppingCart;

