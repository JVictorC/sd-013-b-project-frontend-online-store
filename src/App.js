import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="app">
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

export default App;
