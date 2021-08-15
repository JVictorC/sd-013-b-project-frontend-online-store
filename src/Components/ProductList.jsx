import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products, searchbar, callback, cart } = this.props;
    // const { productsActual } = this.state;
    const searchListComponent = products.map((product) => {
      const { id } = product;
      return (<ProductCard
        callback={ callback }
        key={ id }
        product={ product }
        query={ searchbar }
        cart={ cart }
      />);
    });
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
  callback: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf.isRequired,
};
