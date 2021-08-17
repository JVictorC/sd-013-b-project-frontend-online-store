import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';

class ProductCard extends React.Component {
  // EXIBE SE O FRETE É GRÁTIS SE DISPONIVEL
  availableQuantity = () => {
    const { product: { shipping } } = this.props;
    if (shipping.free_shipping) {
      return <span data-testid="free-shipping">Frete Grátis</span>;
    }
  }

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    const { product, onClick } = this.props;

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
        <div>
          { this.availableQuantity() }
        </div>
        <AddToCartButton
          onClick={ onClick }
          product={ product }
          testid="product-add-to-cart"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
