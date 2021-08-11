import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { products, addToCard, getDetailsProduct } = this.props;
    return (
      <div className="product-list">
        <ul>
          {products.map((product) => (
            <li data-testid="product" key={ product.id }>
              <span>{product.title}</span>
              <img src={ product.thumbnail } alt={ product.title } />
              {product.shipping.free_shipping
                ? <div data-testid="free-shipping">📦 Frete Grátis</div>
                : false}
              <Link
                data-testid="product-detail-link"
                to={ `/ProductDetails/${product.id}` }
                onClick={ () => getDetailsProduct(product) }
              >
                <p>Ver detalhes</p>
              </Link>
              R$
              <p>{product.price}</p>
              <button
                type="button"
                onClick={ () => addToCard(product) }
                data-testid="product-add-to-cart"
              >
                Adicionar no Carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addToCard: PropTypes.func.isRequired,
  getDetailsProduct: PropTypes.func.isRequired,
};
