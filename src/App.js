import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductSelected from './pages/ProductSelected';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ ProductSelected } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
