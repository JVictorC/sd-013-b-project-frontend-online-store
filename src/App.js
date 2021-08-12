import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import CardDetails from './components/CardDetails';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.productDetails = this.productDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      cartList: [],
      productObj: [],
    };
  }

  productDetails(object) {
    this.setState({ productObj: object });
  }

  addToCart(item) {
    const { cartList } = this.state;
    this.setState({
      cartList: [...cartList, item] },
    () => {});
  }

  render() {
    const { cartList, productObj } = this.state;
    return (
      <div className="">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                ((props) => <HomePage { ...props } handleAddToCart={ this.addToCart } />)
              }
            />
            <Route
              exact
              path="/product/:id"
              render={ ((props) => (<CardDetails
                { ...props }
                product={ productObj }
                AddToCart={ this.addToCart }
              />)) }
            />
            <Route
              exact
              path="/cart"
              render={ ((props) => <Cart { ...props } list={ cartList } />) }
            />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
