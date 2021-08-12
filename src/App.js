import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Components/ProductDetails';
import Searches from './Pages/Searches';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ Searches }
            />
            <Route
              exact
              path="/shoppingcart"
              component={ ShoppingCart }
            />
            <Route
              exact
              path="/:categoryID/:query/:title"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
