import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    const { product } = this.props;

    return (
      <div
        data-testid="product"
        className="card"
      >
        <Link
          // SALVAR O OBJETO EM LOCATION - REFERÊNCIA: https://abre.ai/c84N
          // ESTRUTURA PADRÃO { pathname: /abc, state: {qualquercoisa} }
          to={ {
            pathname: `/product-details/${title}`,
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <div className="card-title">
            <h4>{ title }</h4>
          </div>

          <div className="card-body">
            <div className="card-image-div">
              <img src={ thumbnail } alt={ title } />
            </div>
            <span>{ price }</span>
          </div>
        </Link>

        <AddToCartButton
          product={ product }
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;

