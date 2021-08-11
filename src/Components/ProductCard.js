import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product" className="productCard">
        <h3 className="title">
          { title }
        </h3>
        <img src={ thumbnail } alt="test" className="thumbnail" />
        <h4 className="price">
          {`R$ ${price}` }
        </h4>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${product.id}` }
          onClick={ () => localStorage.setItem('item', JSON.stringify(product)) }
        >
          Detalhes
        </Link>
        <button type="button" onClick={ addToCart }>Add to cart</button>
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
