import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <img alt={ title } src={ thumbnail } />
        <p data-testid="product-detail-name">{ title }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetail;
