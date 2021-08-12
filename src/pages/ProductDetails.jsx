import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { productData: { title } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h4>{title}</h4>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productData: PropTypes.objectOf(PropTypes.any),
}.isRequired;
