import React from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: JSON.parse(localStorage.getItem('product')),
      currentAmount: 0,
    };
  }

  /* componentDidMount() {
    this.handleCurrentAmount();
    this.handleClick();
  } */

  // MUDA O VALOR TOTAL DE ACORDO COM A QUANTIDADE TOTAL DE PRODUTOS
  handleCurrentAmount = () => {
    const cartProducts = JSON.parse(localStorage.getItem('product'));
    this.setState({
      currentAmount: cartProducts.reduce((acc, curr) => acc + curr.amount, 0),
    });
  }

  // DELETA UM ITEM DA LISTA DE ACORDO COM ID DO PARÂMENTRO
  handleClick = (itemId) => {
    const { cartProducts } = this.state;
    cartProducts.forEach((product, index) => {
      if (product.itemId === itemId) {
        cartProducts.splice(index, 1);
        console.log(itemId);
      }
      localStorage.setItem('product', JSON.stringify(cartProducts));
      this.setState({
        cartProducts: JSON.parse(localStorage.getItem('product')),
        currentAmount: cartProducts.reduce((acc, curr) => acc + curr.amount, 0),
      });
    });
  };

  render() {
    const { cartProducts, currentAmount } = this.state;

    if (cartProducts === null || cartProducts.length < 1) {
      return (
        <div data-testid="shopping-cart-empty-message">
          <Link to="/">Voltar</Link>
          <h1>Seu carrinho está vazio</h1>
        </div>
      );
    } return (
      <div>
        <ul>
          {cartProducts.map((product) => (
            <List
              key={ product.itemId }
              product={ product }
              onClick={ this.handleClick }
              handleCurrentAmount={ this.handleCurrentAmount }
            />
          ))}
        </ul>
        <Link
          data-testid="checkout-products"
          to="/shopping-cart/checkout"
        >
          Checkout
        </Link>
        <h1>{ currentAmount }</h1>
      </div>
    );
  }
}

export default ShoppingCart;
