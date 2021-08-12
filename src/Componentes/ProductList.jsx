import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    localStorage.setItem('item', JSON.stringify(event));
  }

  render() {
    const { products } = this.props;
    return (
      products ? products.map((product) => (
        <div data-testid="product" key={ product.id }>
          <h5>{ product.title }</h5>
          <Link
            data-testid="product-detail-link"
            to={ `/details/${encodeURIComponent(product.title)}` }
          >
            Detalhes
          </Link>
          <img src={ product.thumbnail } alt={ product.title } width="150px" />
          <p>{`R$${product.price}`}</p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => this.handleClick(product) }
          >
            Adicionar ao Carrinho
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
