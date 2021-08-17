import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
<<<<<<< HEAD
import ProductDetails from './Pages/ProductDetails';
import ProductsLibrary from './Pages/ProductsLibrary';
=======
import ProductsLibrary from './Components/ProductsLibrary';
import './App.css';
>>>>>>> main-group-2-style

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
              render={ (props) => <ShoppingCart { ...props } /> }
            />
            <Route
              exact
              path="/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
=======
      <div className="main-container">
        <h1 className="shop-title">FrontEnd Online Store</h1>
        <div className="main">
          <BrowserRouter>
            <header className="header">
              <ProductsLibrary />
            </header>
            <div className="main">
              <CartButton />
              <Route exact path="/shoppingcart" component={ ShoppingCart } />
            </div>
          </BrowserRouter>
        </div>
>>>>>>> main-group-2-style
      </div>
    );
  }
}
