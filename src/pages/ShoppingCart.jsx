import React from 'react';
import { Link } from 'react-router-dom';
// import Quantidade from '../components/Quantidade';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleAdd() {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  }

  handleSub() {
    this.setState((prevState) => ({
      total: prevState.total - 1,
    }));
  }

  render() {
    // const { Cart } = this.props;
    const { total } = this.state;
    const cartStorage = localStorage.getItem('cart');
    const cart = JSON.parse(cartStorage);
    return (
      <div>
        {cart.map(({ title, id }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <p data-testid="shopping-cart-product-quantity" onChange={ this.handleAdd }>{total}</p>
          </div>
        ))}
        <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
        <Link to="/">Voltar</Link>
        <section name="quantidade">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleAdd }
          >
            +
          </button>

          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.handleSub }
          >
            -
          </button>
        </section>
      </div>
    );
  }
}

export default ShoppingCart;
