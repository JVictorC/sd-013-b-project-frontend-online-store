import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const {productData: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h4>{title}</h4>
      </div>
    );
  }
}
