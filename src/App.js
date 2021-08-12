import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import ShoppingCart from './Pages/ShoppingCart';
import ProductsLibrary from './Components/ProductsLibrary';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="shop-title">Front-end Online Store</h1>
        <div className="main-box">
          <BrowserRouter>
            <header className="header">
              <CartButton />
            </header>
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
          </BrowserRouter>
          <ProductsLibrary />
        </div>
      </div>
    );
  }
}
