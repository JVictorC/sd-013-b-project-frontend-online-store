import React, { Component } from 'react';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class Cart extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1,
      cartItems: [],
    }
  }

  addItemToCart() {
    const { location: { state: { object } } } = this.props;
    const { cartProducts } = this.state;
    // const { title, thumbnail, price } = object;
    this.setState({
      cartProducts: [...cartProducts, object],
    });
  }

  handleRemove = ({ target }) => {
    const { cartItems } = this.state;
  }

  handleClick = (parameter) => {
    const { quantity } = this.state;
    if( parameter == 'plus' ) {
      return this.setState((old) => ({
        quantity: old.quantity + 1,
      }));
    }
    if ( quantity === 0 ) return;
    this.setState((old) => ({
      quantity: old.quantity - 1,
    }))
  }

  render() {
    const { quantity } = this.state;
    // const { price } = this.props;
    const price = 14.99;
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
        <button onClick={ this.handleRemove }>X</button>
        <div>
          <p>Total: {price*quantity}</p>
        <button onClick={ () => this.handleClick() }>-</button>
        <>{ quantity }</>
        <button onClick={ () => this.handleClick('plus') }>+</button>
        </div>
      </div>
    );
  }
}
