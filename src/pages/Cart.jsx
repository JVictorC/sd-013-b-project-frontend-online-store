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
    if (increase === false) {
      this.decrement(targetId);
    } else if (increase === true) {
      this.increment(targetId);
    }
  }

  setItems() {
    const data = localStorage.getItem('cart');
    if (data) {
      const parsedData = JSON.parse(data);
      const sum = this.sum();
      console.log(sum);
      this.setState({
        items: parsedData,
        sum,
      });
    }
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
    const sum = foundItem.reduce((a, b) => a + b);
    return sum;
  }

  render() {
    const { items, sum } = this.state;

    if (items.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
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
