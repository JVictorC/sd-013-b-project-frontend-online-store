import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
import Searches from './Components/Searches';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <header>
            <Searches />
          </header>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>

      </div>
    );
  }
}
