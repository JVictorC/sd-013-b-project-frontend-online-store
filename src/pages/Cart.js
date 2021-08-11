import React from 'react';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.addProductToCart();
  }

  addProductToCart = () => {
    const itemsList = localStorage.getItem('cartItems');

    if (itemsList) {
      const parsedItems = JSON.parse(itemsList);

      this.setState({
        cartItems: [...parsedItems],
      });

      this.getTotalPrice(parsedItems);
    }
  };

  getTotalPrice = (items) => {
    const totalPrice = items.reduce((acc, curr) => acc + curr.price * curr.amount, 0);

    this.setState({ totalPrice });
  }

  removeItemFromCart = (id) => {
    const { cartItems } = this.state;

    const newItems = cartItems.filter((item) => item.id !== id);

    this.setState({ cartItems: [...newItems] });

    this.setArrayToLocalStorage(newItems);
    this.getTotalPrice(newItems);
  }

  setArrayToLocalStorage = (array) => {
    localStorage.setItem('cartItems', JSON.stringify(array));
  }

  updateItemAmount = (quantity, itemId) => {
    const { cartItems } = this.state;

    const newItems = cartItems.map((item) => (
      item.id === itemId ? { ...item, amount: quantity } : item
    ));

    this.setState({ cartItems: [...newItems] });
    this.setArrayToLocalStorage(newItems);
    this.getTotalPrice(newItems);
  }

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
          { totalPrice }
        </p>
      </div>
    );
  }
}

export default Cart;
