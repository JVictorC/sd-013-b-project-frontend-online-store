import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { addToCart } = this.props;
    const { product } = this.props;
    return (
      <div>
        <img alt={ product.title } src={ product.thumbnail } />
        <p
          data-testid="product-detail-name"
        >
          { product.title }
        </p>
        <p>{ product.price }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => {
            addToCart(product);
          } }
        >
          Add to Cart!
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetail;
