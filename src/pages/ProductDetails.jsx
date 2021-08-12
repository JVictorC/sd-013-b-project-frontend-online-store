import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RatingForms from '../components/RatingForms';

export default class ProductDetails extends Component {
  render() {
    const { productData: { title, id } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h4>{title}</h4>
        <RatingForms id={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productData: PropTypes.objectOf(PropTypes.any),
}.isRequired;
