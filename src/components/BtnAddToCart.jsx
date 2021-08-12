import React from 'react';
import PropTypes from 'prop-types';

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
    const { buttonId } = this.props;
    return (
      <button
        id="product-add-to-cart"
        data-testid={ buttonId }
        type="button"
        onClick={ this.addToCart }
      >
        ADICIONAR AO CARRINHO
      </button>
    );
  }
}

BtnAddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonId: PropTypes.string.isRequired,
};
