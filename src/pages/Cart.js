import React from 'react';
import CartItem from '../components/CartItem';

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
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const cartItems = getItemsFromLocalStorage();

    this.setState({ cartItems });

    this.getTotalPrice(cartItems);
  };

  getTotalPrice = (items) => {
    const totalPrice = items.reduce(
      (acc, curr) => acc + curr.price * curr.amount,
      0,
    );

    this.setState({ totalPrice });
  };

  removeItemFromCart = (id) => {
    const { cartItems } = this.state;

    const newItems = cartItems.filter((item) => item.id !== id);

    this.setState({ cartItems: [...newItems] });

    this.getTotalPrice(newItems);
    setArrayToLocalStorage(newItems);
  };

  updateItemAmount = (quantity, itemId) => {
    const { cartItems } = this.state;

    const newItems = cartItems.map((item) => (
      item.id === itemId ? { ...item, amount: quantity } : item
    ));

    this.setState({ cartItems: [...newItems] });
    this.getTotalPrice(newItems);
    setArrayToLocalStorage(newItems);
  };

  render() {
    const { cartItems, totalPrice } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

export default Cart;
