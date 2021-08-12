import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler() {
    const { product, onAdd } = this.props;
    onAdd(product);
  }

  render() {
    const { product, product: { id, title, thumbnail, price, shipping } } = this.props;

    return (
      <div>
        <Link
          style={ { textDecoration: 'none', color: 'black' } }
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: product,
          } }
        >
          <h3>{ title }</h3>
          <img
            src={ thumbnail }
            alt="Product Thumbnail"
            style={ { width: '90%', maxHeight: '7rem' } }
          />
          <p>
            {`Preço R$ ${price}`}
          </p>
          {shipping.free_shipping && <p data-testid="free-shipping">Frete grátis</p>}
        </Link>
        <button
          type="button"
          onClick={ this.addHandler }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductCard;
