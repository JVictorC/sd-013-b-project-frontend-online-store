import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products: { results } } = this.props;
    return (
      <div className="productList">
        {results.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(),
  }).isRequired,
};