import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      product.map(({ id, title, thumbnail, price }) => (
        <div data-testid="product" key={ id }>
          <div>
            <h2>{ title }</h2>
          </div>
          <img src={ thumbnail } alt={ title } />
          <h2>{`R$ ${price}`}</h2>
          <h3>
            <Link data-testid="product-detail-link" to={ `/product/${id}` }>
              Mais detalhes
            </Link>
          </h3>
          <button
            type="button"
            data-testid="product-add-to-cart"
            id={ id }
            onClick={ addToCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))
    );
  }
}

Search.propTypes = {
  product: PropTypes.objectOf(PropTypes.string),
  addToCart: PropTypes.func,
}.isRequired;
