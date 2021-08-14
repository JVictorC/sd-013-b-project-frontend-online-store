import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Iniciando req 7
export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <Link to={ `/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{ title }</h2>
          <h4>{ price }</h4>
          <img alt="Product disc" src={ thumbnail } />
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    categoryId: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
