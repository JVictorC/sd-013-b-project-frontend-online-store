import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getItemsFromLocalStorage,
  saveProductToLocalStorage,
  setArrayToLocalStorage,
} from '../../utils/localStorageHelpers';

import './style.css';

class Product extends React.Component {
  handleClick = () => {
    const { product, updateItemCount } = this.props;

    const items = getItemsFromLocalStorage('cartItems');

    if (!items.some((item) => item.id === product.id)) {
      const newItems = [...items, { ...product, amount: 1 }];

      setArrayToLocalStorage(newItems);
      updateItemCount();
    } else {
      setArrayToLocalStorage(items.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }));
      updateItemCount();
    }
  };

  render() {
    const { product } = this.props;

    return (
      <div className="product-card" data-testid="product" key={ product.id }>
        <div className="product-info">
          <img
            className="product-image"
            src={ product.thumbnail }
            alt={ `imagem de ${product.title}` }
          />
          <p>{product.title}</p>
          <p>
            R$
            {' '}
            {product.price}
          </p>
          <Link
            className="product-detail-link"
            data-testid="product-detail-link"
            to={ `/product/${product.id}` }
            onClick={ () => saveProductToLocalStorage(product) }
          >
            DETALHES
          </Link>
        </div>
        <button
          className="cart-button"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          ADICIONAR AO CARRINHO
        </button>
        {product.freeShipping && (
          <p className="free-shipping" data-testid="free-shipping">
            IT&apos;S FREE SHIPPING!
          </p>
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
  updateItemCount: PropTypes.func.isRequired,
};

export default Product;
