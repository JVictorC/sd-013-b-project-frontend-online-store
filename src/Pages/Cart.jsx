import React, { Component } from 'react';
import ButtonHome from '../Components/ButtonHome';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class Cart extends Component {
  constructor() {
    super();
    this.createCart = this.createCart.bind(this);
    this.state = {
      cartProducts: [],
    };
  }

  createCart() {
    const { location: { state: { object } } } = this.props;
    const { title, thumbnail, price } = object;
    return (
      <div>
        <ButtonHome />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt="Produto" />
        <p>
          Preço: R$
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {/* {
            object.available_quantity
          } */}
        </p>
      </div>
    );
  }

  render() {
    const { cartProducts } = this.state;
    const emptyCart = (
      <div>
        <ButtonHome />
        <p>Seu carrinho está vazio</p>
      </div>
    );
    return (
      <div data-testid="shopping-cart-empty-message">
        { cartProducts.length === 0 ? emptyCart : this.createCart() }
      </div>
    );
  }
}
