import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartItems';
import EmptyCart from '../components/EmptyCart';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: ['teste'],
      quantity: 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  decrement() {
    const { quantity } = this.state;

    if (quantity === 0) {
      this.setState(() => ({ quantity: 0 }));
    } else {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  }

  render() {
    const { items, quantity } = this.state;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1>Carrinho de compras</h1>
        { items.length >= 1
          ? <CartItems quantity={ quantity } decrement={ this.decrement } increment={ this.increment } />
          : <EmptyCart />}
      </div>
    );
  }
}
