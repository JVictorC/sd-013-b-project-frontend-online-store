import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  onClick = () => {
    const { product } = this.props;

    if (localStorage.key('cart')) {
      const parse = JSON.parse(localStorage.getItem('cart'));
      parse.push({ ...product, quantidade: 1 });
      localStorage.setItem('cart', JSON.stringify(parse));
    } else {
      localStorage.setItem('cart', JSON.stringify([{ ...product, quantidade: 1 }]));
    }
  }

  render() {
    const { selectedProductToCart, product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div
        data-testid="product"
        className="main-card-product"
      >
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <p>{title}</p>
          <div className="image-card">
            <img src={ thumbnail } alt={ `Capa do ${title}` } />
          </div>
          <p>{price}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.onClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  selectedProductToCart: PropTypes.func.isRequired,
};

export default ProductCard;
