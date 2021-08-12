import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

class Home extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ ProductList }
            />
            <Route
              exact
              path="/shopping-cart"
              component={ ShoppingCart }
            />
            <Route
              path="/product-details/:name"
              component={ ProductDetails }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
