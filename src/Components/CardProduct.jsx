import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  render() {
    const { products, addToCart } = this.props;
    const { title, thumbnail, price, id } = products;
    return (
      <div>
        <div data-testid="product" className="product">
          <h3>{ title }</h3>
          <p>{ price }</p>
          <img src={ thumbnail } alt="foto" className="img-product" />
        </div>
        <Link
          to={ { pathname: `/product-details/${id}`, state: products } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(products) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
