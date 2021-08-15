import React, { Component } from 'react';
// import { getCount } from '../services/api';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
  }

  componentDidMount() {
    this.getProductLocal();
  }

  getProductLocal() {
    const { product } = localStorage;
    const productList = JSON.parse(product);

    productList.map(async ({ id, count, evaluation }) => {
      const productsList = await localStorage.getItem('productsList');
      const listGet = JSON.parse(productsList);

      const productDetails = listGet.filter((objct) => (objct.id === id))[0];

      this.setState((prevState) => (
        { products: [...prevState.products, { ...productDetails, count, evaluation }] }));
    });
  }

  funcMapNegative(array, id) {
    return array.map((objct) => {
      if (objct.id === id && objct.count > 1) {
        objct.count -= 1;
      }
      return objct;
    });
  }

  funcMapPositive(array, id) {
    return array.map((objct) => {
      if (objct.id === id) {
        objct.count += 1;
      }
      return objct;
    });
  }

  increaseAmount({ target }) {
    const { product } = localStorage;
    const list = JSON.parse(product);
    const { products } = this.state;
    const newState = this.funcMapPositive(products, target.id);

    localStorage.setItem('product', JSON.stringify(
      this.funcMapPositive(list, target.id),
    ));

    this.setState({ products: newState });
    // localStorage.setItem('totalCart', getCount());
  }

  decreaseAmount({ target }) {
    const { product } = localStorage;
    const list = JSON.parse(product);
    const { products } = this.state;
    const newState = this.funcMapNegative(products, target.id);

    localStorage.setItem('product', JSON.stringify(
      this.funcMapNegative(list, target.id),
    ));

    this.setState({ products: newState });
    // localStorage.setItem('totalCart', getCount());
  }

  render() {
    const { products } = this.state;
    if (products.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return (
      <div>
        { products.map(({ id, title, thumbnail, price, count }) => (
          <div key={ id }>
            <h1 data-testid="shopping-cart-product-name">{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>

            <button
              onClick={ this.decreaseAmount }
              id={ id }
              type="button"
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">{ count }</span>
            <button
              onClick={ this.increaseAmount }
              id={ id }
              type="button"
              data-testid="product-increase-quantity"
            >
              +
            </button>
          </div>
        )) }
      </div>
    );
  }
}

export default Cart;
