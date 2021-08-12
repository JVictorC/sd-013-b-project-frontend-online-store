import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    // const { productsActual } = this.state;
    const searchListComponent = products.map((product) => (
      <ProductCard key={ product.id } product={ product } />
    ));
    return (
      <div className="product-list">
        { searchListComponent }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.objectOf.isRequired,
};
