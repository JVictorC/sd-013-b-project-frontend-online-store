import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, onClickButton } = this.props;
    const { title, thumbnail, price, id } = product;
    const toLink = {
      pathname: `/product-details/${id}`,
      state: { product },
    };
    return (
      <div className="product-div">
        <Link
          data-testid="product-detail-link"
          to={ toLink }
        >
          <div data-testid="product">
            <h4>{title}</h4>
            <img src={ thumbnail } alt={ title } />
          </div>
        </Link>
        <p>{price}</p>
        <div>
          <button
            onClick={ () => onClickButton(product) }
            type="button"
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
