import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  increase = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  decrease = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  }

  render() {
    // const { Cart } = this.props;
    const cartStorage = localStorage.getItem('cart');
    const cart = JSON.parse(cartStorage);
    const { quantity } = this.state;
    return (
      <div>
        {cart.map(({ title, id }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ this.increase }
            >
              +
            </button>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ this.decrease }
            >
              -
            </button>
          </div>
        ))}
        <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
