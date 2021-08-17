import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ HomePage }
          />
          <Route
            exact
            path="/shopping-cart"
            component={ ShoppingCart }
          />
          <Route
            exact
            path="/shopping-cart/checkout"
            component={ Checkout }
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

export default App;
