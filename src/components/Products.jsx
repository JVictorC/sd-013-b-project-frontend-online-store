import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends React.Component {
  render() {
    const { list, onClick } = this.props;

    return (
      <div className="products">
        { list.map((element) => (
          <ProductCard
            key={ element.id }
            product={ element }
            onClick={ onClick }
          />
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Products;
