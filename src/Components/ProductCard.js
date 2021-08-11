import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h3>
          { title }
        </h3>
        <img src={ thumbnail } alt="test" />
        <h4>
          { price }
        </h4>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${product.id}` }
          onClick={ () => localStorage.setItem('item', JSON.stringify(product)) }
        >
          Detalhes
        </Link>
        <button type="button">Add to cart</button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default ProductCard;
