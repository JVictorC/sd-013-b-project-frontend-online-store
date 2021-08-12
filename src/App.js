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
      cartItems: [],
    };
  }

  getProductData = (product) => {
    this.setState({ productData: product });
  }

  addItemsToCart = (product) => {
    const { cartItems } = this.state;
    const qtd = cartItems.filter(({ id }) => id === product.id).length;

    if (!qtd) {
      product.actualQtd = 1;
      this.setState({ cartItems: [...cartItems, product] });
      return;
    }

    cartItems.forEach((item, index) => {
      if (item.id === product.id) {
        const deepCopy = [...cartItems];
        deepCopy[index].actualQtd += 1;
        this.setState({ cartItems: deepCopy });
      }
    });
    // this.setState({ cartItems: product });
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
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </Router>
    );
  }
}
