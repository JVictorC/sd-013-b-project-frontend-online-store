import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';
import ProductDetail from './ProductDetail';

class ProductDetails extends Component {
  render() {
    const { addToCart } = this.props;
    const { location: { productInfo } } = this.props;
    return (
      <div>
        <ProductDetail product={ productInfo } addToCart={ addToCart } />
        <Link to="/">Home</Link>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  location: PropTypes.shape({
    productInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
