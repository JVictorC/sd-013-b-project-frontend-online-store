import React, { Component } from 'react';
import ButtonHome from '../Components/ButtonHome';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.createCart = this.createCart.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.state = {
    //   cartProducts: 0,
    // };
  }

  // updateState() {
  //   const { location: { state: { object } } } = this.props;
  //   this.setState({
  //     cartProducts: [...object],
  //   });
  // }

  // componentDidMount() {
  //   const props = this.props;
  //   if (props.length !== 0) {
  //     this.createCart();
  //   }
  // }

  createCart() {
    // this.updateState();
    const { location: { state: { object } } } = this.props;
    const { title, thumbnail, price } = object;
    // const { cartProducts } = this.state;
    // this.setState({
    //   cartProducts: 1,
    // });
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
    // const { location: { state: { object } } } = this.props;
    // const { cartProducts } = this.state;
    const { number } = this.props;
    if (number === 0) {
      return (
        <div>
          <ButtonHome />
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        { this.createCart() }
      </div>
    );
  }
}
