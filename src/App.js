import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Components/ProductDetails';
import ProductsLibrary from './Components/ProductsLibrary';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ ProductsLibrary }
            />
            <Route
              exact
              path="/shoppingcart"
              component={ ShoppingCart }
            />
            <Route
              exact
              path="/:categoryID/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>
      </div>
    );
  }
}
