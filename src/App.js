import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" render={ () => <ShoppingCart /> } />
          <Route path="/products/:id" component={ ProductDetails } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
