import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingKart from './pages/ShoppingKart';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: '',
      cartItems: [],
    };
  }

  getProductData = (product) => {
    this.setState({ productData: product });
  }

  addItemsToCart = (product) => {
    const { cartItems } = this.state;
    const itemAmount = cartItems.filter(({ id }) => id === product.id).length;

    if (!itemAmount) {
      product.actualAmount = 1;
      this.setState({ cartItems: [...cartItems, product] });
      return;
    }

    cartItems.forEach((item, index) => {
      if (item.id === product.id) {
        const deepCopy = [...cartItems];
        deepCopy[index].actualAmount += 1;
        this.setState({ cartItems: deepCopy });
      }
    });
  }

  render() {
    const { productData, cartItems } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              getProductData={ this.getProductData }
              addItemsToCart={ this.addItemsToCart }
            />) }
          />
          <Route
            exact
            path="/shoppingKart"
            render={ () => <ShoppingKart cartItems={ cartItems } /> }
          />
          <Route
            exact
            path="/product/:id"
            render={ () => (<ProductDetails
              productData={ productData }
              getProductData={ this.getProductData }
            />) }
          />
          < Route exact path="/checkout" component={Checkout}/>
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </Router>
    );
  }
}
