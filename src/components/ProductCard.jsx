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
    const { product, product: { id, title, thumbmail, price, shipping } } = this.props;

    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: product,
          } }
        >
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="Product Thumbnail" />
          <p>
            {`Preço R$ ${price}`}
          </p>
          {shipping.free_shipping && <p data-testid="free-shipping">Frete grátis</p>}
          <button
            type="button"
            onClick={ this.addHandler }
            data-testid="product-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </Link>
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
    shipping: PropTypes.string,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductCard;
