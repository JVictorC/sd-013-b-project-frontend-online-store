import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AvaliationsArea from './AvaliationsArea';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetailsSelect: {},
      quantidadeCard: 0,
    };
    this.hadlerClick = this.hadlerClick.bind(this);
    this.getQuantityCard = this.getQuantityCard.bind(this);
    this.getDetailProduct = this.getDetailProduct.bind(this);
  }

  componentDidMount() {
    this.getQuantityCard();
    this.getDetailProduct();
  }

  componentDidUpdate() {
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    const quantidadeCardLocal = cardLocal.reduce((acc, obj) => {
      acc += obj.quantity;
      return acc;
    }, 0);
    const { quantidadeCard } = this.state;
    if (quantidadeCard !== quantidadeCardLocal) { this.getQuantityCard(); }
  }

  getDetailProduct() {
    const productDetail = JSON.parse(localStorage.getItem('productDetail'));
    this.setState({ productDetailsSelect: productDetail });
  }

  getQuantityCard() {
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    const quantidadeCard = cardLocal.reduce((acc, obj) => {
      acc += obj.quantity;
      return acc;
    }, 0);
    this.setState({ quantidadeCard });
  }

  hadlerClick(product) {
    const { getCardItem } = this.props;
    const { title, price, thumbnail, id, available_quantity: availableQtd } = product;
    const newCard = (
      { title, price, thumbnail, id, available_quantity: availableQtd, quantity: 1 }
    );
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    if (cardLocal.some((objc) => objc.id === newCard.id)) {
      const newCardLocal = cardLocal.map((obj) => {
        if (obj.id === newCard.id) {
          obj.quantity += 1;
        }
        return obj;
      });
      localStorage.setItem('card', JSON.stringify(newCardLocal));
      getCardItem();
    } else {
      localStorage.setItem('card', JSON.stringify([...cardLocal, newCard]));
      getCardItem();
    }
  }

  render() {
    const { productDetailsSelect, quantidadeCard } = this.state;
    const { thumbnail, price, title, freeshipping } = productDetailsSelect;
    return (
      <div>
        <Link
          to="/"
        >
          <span role="img" aria-label="home">🏠</span>
        </Link>
        <Link data-testid="shopping-cart-button" to="/cart">
          <span role="img" aria-label="shop">🛒</span>
        </Link>
        <p data-testid="shopping-cart-size">{quantidadeCard}</p>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço: R$
          {price}
        </p>
        <img src={ thumbnail } alt={ title } />
        { freeshipping
          ? (
            <div data-testid="free-shipping">
              <span role="img" aria-label="shipping">
                📦 Frete Grátis
              </span>
            </div>
          )
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
          <AvaliationsArea />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  getCardItem: PropTypes.func.isRequired,
};
