import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductList extends React.Component {
  getCartStoarge = () => {
    const items = localStorage.getItem('cart');
    if (items) {
      return JSON.parse(items);
    }
    return [];
  }

  handleLocalStorage = () => {
    const { product } = this.props;
    const items = this.getCartStoarge();
    const wholeItems = [...items, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(wholeItems));
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
        >
          <span>{title}</span>
          <img src={ thumbnail } alt={ title } />
          <span>{price}</span>
        </Link>
        <br />
        <button
          type="button"
          onClick={ this.handleLocalStorage }
          data-testid="product-add-to-cart"
        >
          Add to cart
        </button>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
