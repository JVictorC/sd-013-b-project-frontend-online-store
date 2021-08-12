import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  render() {
    const { products } = this.props;
    const { title, thumbnail, price, id } = products;
    return (
      <div>
        <div data-testid="product">
          <h3>{ title }</h3>
          <p>{ price }</p>
          <img src={ thumbnail } alt="foto" />
        </div>
        <Link
          to={ { pathname: `/product-details/${id}`, state: products } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
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
