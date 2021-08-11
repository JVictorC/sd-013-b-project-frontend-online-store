import React from 'react';

export default class BtnAddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { cart } = this.state;
//    let cart = localStorage.getItem('cart');
    this.setState({ cart: cart.push({ xablau: 1 }) }, () => {
      localStorage.setItem('cart', JSON.stringify(cart));
    });
//    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    return (
      <button
        id="product-add-to-cart"
        data-testid="product-add-to-cart"
        type="button"
        onClick={ this.handleClick }
      >
        ADICIONAR AO CARRINHO
      </button>
    );
  }
}
