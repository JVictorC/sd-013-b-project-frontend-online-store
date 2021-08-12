import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <div data-testid="product" className="card">
        <h1>{ title }</h1>
        <img className="image" src={ thumbnail } alt="Product Banner" />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ `/products/${id}` }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
