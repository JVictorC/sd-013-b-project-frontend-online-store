import React from 'react';

export default class BtnAddToCart extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    /* baseado na ideia do grupo 3 https://github.com/tryber/sd-013-b-project-frontend-online-store/blob/d5291bf6ee4efe61472a347f4980c1a96b7b3028/src/components/Product/index.js#L9
    */
    const { title, price, thumbnail, id } = this.props;

    const prevsItems = localStorage.getItem('cart');
    let items = [];
    if (prevsItems) {
      items = JSON.parse(prevsItems);
    }
    const fullItems = [...items, { title, price, thumbnail, id, quantity: 1 }];

    localStorage.setItem('cart', JSON.stringify(fullItems));
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        onClick={ this.addToCart }
      >
        ADICIONAR AO CARRINHO
      </button>
    );
  }
}
