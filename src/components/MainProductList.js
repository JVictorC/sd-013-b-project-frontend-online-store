import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class MainProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

MainProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainProductList;
