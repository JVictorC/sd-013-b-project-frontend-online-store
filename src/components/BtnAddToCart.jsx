import React from 'react';

export default class BtnAddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const cart = localStorage.getItem('cart');
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        onClick={ this.handleClick }
      >
        ADICIONAR AO CARRINHO
      </button>
    );
  }
}
