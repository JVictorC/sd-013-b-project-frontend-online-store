import React, { Component } from 'react';
import ButtonHome from '../Components/ButtonHome';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class Cart extends Component {
  constructor() {
    super();
    this.createCart = this.createCart.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  handleRemove = ({ target }) => {
    // const { cartProducts } = this.state;
  }

  handleClick = (parameter) => {
    const { quantity } = this.state;
    if (parameter === 'plus') {
      return this.setState((old) => ({
        quantity: old.quantity + 1,
      }));
    }
    if (quantity === 0) return;
    this.setState((old) => ({
      quantity: old.quantity - 1,
    }));
  }

  createCart() {
    const { quantity } = this.state;
    const { cartProducts } = this.props;
    const { title, thumbnail, price } = cartProducts;
    return (
      <div>
        <button type="button" onClick={ this.handleRemove }>X</button>
        <ButtonHome />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt="Produto" />
        <p>
          Preço: R$
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { quantity }
          <div>
            <p>
              Total:
              {price * quantity}
            </p>
            <button type="button" onClick={ () => this.handleClick() }>-</button>
            { quantity }
            <button type="button" onClick={ () => this.handleClick('plus') }>+</button>
          </div>

        </p>
      </div>
    );
  }

  render() {
    const { cartProducts } = this.props;
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
