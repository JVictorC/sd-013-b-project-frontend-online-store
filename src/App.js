import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

import { Home, Cart, ProductDetails, PurchaseScreen } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/product/:id" component={ ProductDetails } />
          <Route exact path="/purchase" component={ PurchaseScreen } />
        </Switch>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
