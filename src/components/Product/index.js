import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getItemsFromLocalStorage,
  saveProductToLocalStorage,
} from '../../utils/localStorageHelpers';

// import './style.css';

class Product extends React.Component {
  handleClick = () => {
    const { product } = this.props;

    const items = getItemsFromLocalStorage();
    const newItems = [...items, { ...product, amount: 1 }];

    localStorage.setItem('cartItems', JSON.stringify(newItems));
  };

  render() {
    const { product } = this.props;

    return (
      <div data-testid="product" key={ product.id }>
        <h2>{product.title}</h2>
        <img src={ product.thumbnail } alt={ `imagem de ${product.title}` } />
        <p>{product.price}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${product.id}` }
          onClick={ () => saveProductToLocalStorage(product) }
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
        {product.freeShipping && (
          <p data-testid="free-shipping">IT&apos;S FREE SHIPPING!</p>
        )}
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    freeShipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Product;
