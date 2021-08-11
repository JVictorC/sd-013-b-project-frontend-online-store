import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Iniciando req 7
export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <h4>{ price }</h4>
        <img alt="Product disc" src={ thumbnail } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
