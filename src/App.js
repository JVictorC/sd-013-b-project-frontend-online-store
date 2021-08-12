import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import CardDetails from './components/CardDetails';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CheckoutPage from './components/CheckoutPage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.productDetails = this.productDetails.bind(this);

    this.state = {
      cartList: [],
      productObj: [],
    };
  }

  productDetails(object) {
    this.setState({ productObj: object });
  }

  render() {
    const { cartList, productObj } = this.state;
    return (
      <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route
              exact
              path="/product/:id"
              render={ ((props) => <CardDetails { ...props } product={ productObj } />) }
            />
            <Route
              exact
              path="/cart"
              render={ ((props) => <Cart { ...props } list={ cartList } />) }
            />
            <Route path="/checkout" component={ CheckoutPage } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
