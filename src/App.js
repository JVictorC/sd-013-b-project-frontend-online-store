import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingKart from './pages/ShoppingKart';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: '',
    };
  }

  getProductData = (product) => {
    this.setState({ productData: product });
  }

  render() {
    const { productData } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ () => <Home getProductData={ this.getProductData } /> } />
          <Route exact path="/shoppingKart" component={ ShoppingKart } />
          <Route exact path="/product/:id" render={ () => <ProductDetails productData={ productData } /> } />
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </Router>
    );
  }
}
