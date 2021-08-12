import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  addToCart(newId) {
    if (!localStorage.getItem('ShoppingCart')) {
      const newCart = [
        {
          id: newId,
        },
      ];
      localStorage.setItem('ShoppingCart', JSON.stringify(newCart));
    } else {
      const currentCart = JSON.parse(localStorage.getItem('ShoppingCart'));
      if(!currentCart.find((item) => item.id === newId)) {
        const newItem = {
          id: newId,
        };
        currentCart.push(newItem);
        localStorage.setItem('ShoppingCart', JSON.stringify(currentCart));
        console.log(currentCart);
      }
    }
  }

  render() {
    const { products } = this.props;
    return (
      products ? products.map((product) => (
        <div data-testid="product" key={ product.id }>
          <h5>{product.title}</h5>
          <Link
            data-testid="product-detail-link"
            to={ `/details/${encodeURIComponent(product.title)}` }
          >
            Detalhes
          </Link>
          <img src={ product.thumbnail } alt={ product.title } width="150px" />
          <p>{`R$${product.price}`}</p>
          <button
            data-testid="product-add-to-cart"
            onClick={ ()=> this.addToCart(product.title) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      )) : <p>Nao existe produtos</p>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default ProductList;
