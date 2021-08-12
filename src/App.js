import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import DescribeItem from './pages/ProductDetails';
import Home from './Components/Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ Cart } />
          <Route exact path="/product-details/:id" component={ DescribeItem } />
        </Switch>
      </BrowserRouter>
    );
  }
}
