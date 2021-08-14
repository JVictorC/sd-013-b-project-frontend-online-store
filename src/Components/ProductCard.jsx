import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Iniciando req 7
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    const { product: { title, price, id } } = this.props;
    this.state = {
      basicInfo: {
        title,
        price,
        id,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { state: { basicInfo },
      props: { callback } } = this;
    callback(basicInfo);
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div>
        <Link to={ `/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <h2>{ title }</h2>
            <h4>{ price }</h4>
            <img alt="Product disc" src={ thumbnail } />
          </div>
        </Link>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.handleClick }
            id="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    categoryId: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  callback: PropTypes.func.isRequired,
};