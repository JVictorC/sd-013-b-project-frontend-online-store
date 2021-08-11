import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  initialMessage = () => (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  productsCards = (products) => {
    if (products.length === 0) {
      return <span>Nenhum produto foi encontrado</span>;
    }

    if (products === 'Carregando...') {
      return <span>{products}</span>;
    }

    const { getProductData } = this.props;

    return (
      products.map((product) => (
        <Link
          to={ `/product/${product.id}` }
          key={ product.id }
          onClick={ () => getProductData(product) }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="product-card">
            <h4>{product.title}</h4>
            <img src={ product.thumbnail } alt={ product.title } />
            <span>{`R$${product.price}`}</span>
          </div>
        </Link>
      ))
    );
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        { products === 'noSearchAlready'
          ? this.initialMessage() : this.productsCards(products) }
      </div>
    );
  }
}

ProductsList.propTypes = ({
  products: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}).isRequired;
