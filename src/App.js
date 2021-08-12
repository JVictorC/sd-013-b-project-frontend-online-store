import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import ShoppingCart from './Pages/ShoppingCart';
import ProductsLibrary from './Components/ProductsLibrary';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="shop-title">FrontEnd Online Store</h1>
        <div className="test">
          <BrowserRouter>
            <CartButton />
            <header className="header">
              <ProductsLibrary />
            </header>
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
