import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  handleDetails = () => {
    const { product } = this.props;
    localStorage.setItem('product', JSON.stringify(product));
  }

  handleProduct = () => {
    const { product } = this.props;
    console.log(product);
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', `[${JSON.stringify(product)}]`);
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <div data-testid="product" className="card">
        <h2>{ title }</h2>
        <div>
          <img className="image" src={ thumbnail } alt="Product Banner" />
        </div>
        <p>{ price }</p>
        <div>
          <button type="button">
            <Link
              data-testid="product-detail-link"
              to={ `/products/${id}` }
              onClick={ this.handleDetails }
            >
              Detalhes
            </Link>
          </button>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.handleProduct }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
