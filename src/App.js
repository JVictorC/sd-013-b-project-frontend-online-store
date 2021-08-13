import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCart from './Pages/ShopCart';
import CardDetails from './Pages/CardDetails';
import CheckOut from './Pages/CheckOut';
// FEITO POR TODOS VIA PAIR PROGRAMING;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: [],
    };
  }

  handleClick = (product, value) => {
    const { cartProducts } = this.state;
    const cartFindId = cartProducts.find((idProduct) => idProduct.id === product.id);
    if (value === 'plus') {
      cartFindId.quantityCount += 1;
      return this.setState((old) => ({
        cartProducts: [...old.cartProducts],
      }));
    } if (cartFindId.quantityCount === 0) return;
    cartFindId.quantityCount -= 1;
    return this.setState((old) => ({
      cartProducts: [...old.cartProducts],
    }));
  }

  handleCartItems = (callback) => {
    const { cartProducts } = this.state;
    const cartFindId = cartProducts.find((idProduct) => idProduct.id === callback.id);
    if (cartFindId) {
      cartFindId.quantityCount += 1;
      this.setState((old) => ({
        cartProducts: [...old.cartProducts],
      }));
    } else {
      this.setState((old) => ({
        cartProducts: [...old.cartProducts, { ...callback, quantityCount: 1 }],
      }));
    }
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              handleCartItems={ this.handleCartItems }
            />) }
          />
          <Route
            path="/shopCart"
            render={ () => (<ShopCart
              cartProducts={ cartProducts }
              handleClick={ this.handleClick }
            />) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<CardDetails
              { ...props }
              handleCartItems={ this.handleCartItems }
            />) }
          />
          <Route
            path="/checkout"
            component={ () => <CheckOut cartProducts={ cartProducts } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
