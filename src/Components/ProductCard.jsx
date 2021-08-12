import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Iniciando req 7
export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { category_id, title, price, thumbnail, id } = product;
    // console.log(product);
    return (
      <Link to={ `/${category_id}/${id}` } data-testid="product-detail-link">
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
  }).isRequired,
};
