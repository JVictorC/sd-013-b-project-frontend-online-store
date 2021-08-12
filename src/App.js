import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import ShoppingCart from './Pages/ShoppingCart';
import ProductsLibrary from './Components/ProductsLibrary';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <header>
            <CartButton />
          </header>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>
        <ProductsLibrary />
      </div>
    );
  }
}
