import React from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('product')),
      teste: JSON.parse(localStorage.getItem('product'))
        .reduce((a, b) => a + b.totalPrice, 0),
    };
  }

  handleClick = (itemId) => {
    const { cartProducts } = this.state;
    cartProducts.forEach((produc, index) => {
      console.log(itemId);
      if (produc.itemId === itemId) {
        cartProducts.splice(index, 1);
      }
    });
    localStorage.setItem('product', JSON.stringify(cartProducts));
    this.setState({
      cartProducts: JSON.parse(localStorage.getItem('product')),
    });
  };

  render() {
    const { cartProducts, teste } = this.state;

    if (cartProducts === null || cartProducts.length < 1) {
      return (
        <div data-testid="shopping-cart-empty-message">
          <Link to="/">Voltar</Link>
          <h1>Seu carrinho está vazio</h1>
        </div>
      );
    } return (
      <div>
        <Link to="/">Voltar</Link>
        <ul>
          {cartProducts.map((product) => (
            <List
              key={ product.itemId }
              product={ product }
              onClick={ this.handleClick }
            />
          ))}
        </ul>
        <h1>{ teste }</h1>
      </div>
    );
  }
}

export default ShoppingCart;
