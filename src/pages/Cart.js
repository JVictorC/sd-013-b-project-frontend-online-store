import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';
import CartLink from '../components/CartLink';

import {
  getItemsFromLocalStorage,
  setArrayToLocalStorage,
} from '../utils/localStorageHelpers';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      totalPrice: 0,
      itemCount: 0,
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.updateItemCount();
  }

  fetchProducts = () => {
    const cartItems = getItemsFromLocalStorage();

    this.setState({ cartItems });

    this.getTotalPrice(cartItems);
  };

  updateItemCount = () => {
    const items = getItemsFromLocalStorage();

    const itemCount = items.reduce((acc, { amount }) => acc + amount, 0);

    this.setState({ itemCount });
  }

  getTotalPrice = (items) => {
    const totalPrice = items.reduce(
      (acc, curr) => acc + curr.price * curr.amount,
      0,
    );

    this.setState({ totalPrice });
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  };

  removeItemFromCart = (id) => {
    const { cartItems } = this.state;

    const newItems = cartItems.filter((item) => item.id !== id);

    this.setState({ cartItems: [...newItems] });

    this.getTotalPrice(newItems);
    setArrayToLocalStorage(newItems);
    this.updateItemCount();
  };

  updateItemAmount = (quantity, itemId) => {
    const { cartItems } = this.state;

    const newItems = cartItems.map((item) => (
      item.id === itemId ? { ...item, amount: quantity } : item
    ));

    this.setState({ cartItems: [...newItems] });
    this.getTotalPrice(newItems);
    setArrayToLocalStorage(newItems);
    this.updateItemCount();
  };

  render() {
    const { cartItems, totalPrice, itemCount } = this.state;

    return (
      <div>
        <CartLink itemCount={ itemCount } />
        {cartItems.length !== 0 ? (
          cartItems.map((element) => (
            <CartItem
              key={ element.id }
              id={ element.id }
              title={ element.title }
              thumbnail={ element.thumbnail }
              amount={ element.amount }
              availableQuantity={ element.availableQuantity }
              removeItemFromCart={ this.removeItemFromCart }
              updateItemAmount={ this.updateItemAmount }
              updateItemCount={ this.updateItemCount }
            />
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
        <p>
          Total:
          {' '}
          {totalPrice}
        </p>
        <Link
          to="/purchase"
          data-testid="checkout-products"
        >
          Ir para tela de finalização...
        </Link>
      </div>
    );
  }
}

export default Cart;
