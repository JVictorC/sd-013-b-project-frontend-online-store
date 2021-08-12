import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products, searchbar } = this.props;
    // const { productsActual } = this.state;
    const searchListComponent = products.map((product) => (
      <ProductCard key={ product.id } product={ product } query={ searchbar } />
    ));
    return (
      <div>
        { searchListComponent }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.objectOf.isRequired,
  searchbar: PropTypes.string.isRequired,
};
