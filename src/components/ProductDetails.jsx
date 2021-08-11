import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductDetail from './ProductDetail';

class ProductDetails extends Component {
  render() {
    const { location: { productInfo } } = this.props;
    return (
      <div>
        <ProductDetail product={ productInfo } />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    productInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
