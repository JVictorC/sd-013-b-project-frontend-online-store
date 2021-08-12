import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormProduct from './FormProduct';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { productDetailsSelect } = this.props;
    this.state = {
      productDetailsSelect,
    };
    this.hadlerClick = this.hadlerClick.bind(this);
  }

  hadlerClick(product) {
    const { getCardItem } = this.props;
    const { title, price, thumbnail, id } = product;
    getCardItem({ title, price, thumbnail, quantity: 1 }, true);
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    localStorage.setItem('card',
      JSON.stringify([...cardLocal, { title, price, thumbnail, id }]));
  }

  render() {
    const { productDetailsSelect } = this.state;
    const { thumbnail, price, title } = productDetailsSelect;
    const { QuantityItemCard } = this.props;
    return (
      // thumbnail= imagem, price = preço, title = nome, installments = especificações
      <div>
        <Link
          to="/"
        >
          🏠
        </Link>
        <Link data-testid="shopping-cart-button" to="/cart">
          <p data-testid="shopping-cart-size">{QuantityItemCard}</p>
          🛒
        </Link>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço: R$
          {price}
        </p>
        <img src={ thumbnail } alt={ title } />
        {productDetailsSelect.shipping.free_shipping
          ? <div data-testid="free-shipping">📦 Frete Grátis</div>
          : false}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={
            () => this.hadlerClick(productDetailsSelect)
          }
        >
          Adicionar ao Carrinho
        </button>
        <div>
          <FormProduct />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productDetailsSelect: PropTypes.objectOf(PropTypes.string).isRequired,
  getCardItem: PropTypes.func.isRequired,
  QuantityItemCard: PropTypes.number.isRequired,
};
