import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartRender';
import EmptyCart from '../components/EmptyCart';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      sum: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setItems = this.setItems.bind(this);
    this.sum = this.sum.bind(this);
  }

  componentDidMount() {
    this.setItems();
  }

  onClick({ target }) {
    const targetId = target.id;
    const increase = target.id.includes('increase');
    const decrease = target.id.includes('decrease');
    if (decrease === true) {
      this.decrement(targetId);
    } else if (increase === true) {
      this.increment(targetId);
    } else {
      this.remove(targetId);
    }
  }

  setItems() {
    const data = localStorage.getItem('cart');
    if (data) {
      const parsedData = JSON.parse(data);
      const sum = this.sum();
      this.setState({
        items: parsedData,
        sum,
      });
    }
  }

  remove(targetId) {
    const data = localStorage.getItem('cart');
    const parsedData = JSON.parse(data);
    const foundItem = parsedData
      .filter((item) => `${item.id}-remove` !== targetId);
    localStorage.setItem('cart', JSON.stringify([...foundItem]));
    this.setItems();
    this.sum();
  }

  increment(targetId) {
    const data = localStorage.getItem('cart');
    const parsedData = JSON.parse(data);
    const foundItem = parsedData
      .find((item) => `${item.id}-product-increase-quantity` === targetId);
    foundItem.quantity += 1;
    localStorage.setItem('cart', JSON.stringify([...parsedData]));
    this.setItems();
    this.sum();
  }

  decrement(targetId) {
    const data = localStorage.getItem('cart');
    const parsedData = JSON.parse(data);
    const foundItem = parsedData
      .find((item) => `${item.id}-product-decrease-quantity` === targetId);
    if (foundItem.quantity > 0) {
      foundItem.quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify([...parsedData]));
    this.setItems();
    this.sum();
  }

  sum() {
    const data = localStorage.getItem('cart');
    const parsedData = JSON.parse(data);
    const foundItem = parsedData.map((item) => item.price * item.quantity);
    if (foundItem.length !== 0) {
      const sum = foundItem.reduce((a, b) => a + b);
      return sum;
    }
    this.setState({ items: [], sum: 0 });
  }

  render() {
    const { items, sum } = this.state;

    if (items.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Voltar</Link>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1>Carrinho de compras</h1>
        { items.length >= 1
          ? <CartItems onClick={ this.onClick } items={ items } sum={ sum } />
          : <EmptyCart />}
      </div>
    );
  }
}
