import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewProduct extends Component {
  render() {
    const { cartItems } = this.props;
    return cartItems.map(({ title, price, actualAmount, id }) => (
      <div className="review-product-container" key={ id }>
        <p>
          {title}
          -
          {price}
        </p>
        <p>
          Quantidade:
          {' '}
          {actualAmount}
        </p>
        <p>
          TOTAL:
          {actualAmount * price}
        </p>
      </div>
    ));
  }
}

ReviewProduct.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
