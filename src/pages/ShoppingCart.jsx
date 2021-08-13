import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        {cart ? (
          cart.map(({ title, id }) => (
            <div key={ id } className="card">
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
        )}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
