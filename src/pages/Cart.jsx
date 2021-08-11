import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartRender';
import EmptyCart from '../components/EmptyCart';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  componentDidMount() {
    this.setItems();
  }

  onClick({ target }) {
    if (target.id === 'product-decrease-quantity') {
      this.decrement();
    } else if (target.id === 'product-increase-quantity') {
      this.increment();
    }
  }

  setItems() {
    const data = localStorage.getItem('cart');
    const parsedData = JSON.parse(data);

    this.setState({
      items: parsedData,
    });
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
    const { items } = this.state;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1>Carrinho de compras</h1>
        { items.length >= 1
          ? <CartItems onClick={ this.onClick } items={ items } />
          : <EmptyCart />}
      </div>
    );
  }
}
