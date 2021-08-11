import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProduct extends Component {
  render() {
    const { products } = this.props;
    const { title, thumbnail, price } = products;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <p>{price}</p>
        <img src={ thumbnail } alt="foto" />
        <button
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
