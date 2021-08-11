<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> d7a7dcc5d78245839f96d68d052021f2c8303038
import ShoppingKart from './pages/ShoppingKart';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

<<<<<<< HEAD
function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingKart" component={ ShoppingKart } />
        <Route exact path="/product/:idProduct" component={ProductDetails}  />
        {/* <Route component={ NotFound } /> */}
      </Switch>
    </BrowserRouter>
    

  
  );
}
=======
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: '',
    };
  }
>>>>>>> d7a7dcc5d78245839f96d68d052021f2c8303038

  getProductData = (product) => {
    this.setState({ productData: product });
  }

  render() {
    const { productData } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home getProductData={ this.getProductData } /> }
          />
          <Route exact path="/shoppingKart" component={ ShoppingKart } />
          <Route
            exact
            path="/product/:id"
            render={ () => <ProductDetails productData={ productData } /> }
          />
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </Router>
    );
  }
}
