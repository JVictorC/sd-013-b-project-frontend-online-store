import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CarrinhoDeCompra from '../pages/CarrinhoDeCompra';
import ProductDetails from '../pages/ProductDetails';

class PagComponents extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.addToStateClick = this.addToStateClick.bind(this);
  }

  addToStateClick(product) {
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="all-content">
        <Router>
          <Route
            exact
            path="/"
            component={ () => <Home func={ this.addToStateClick } /> }
          />
          <Route
            path="/cart"
            component={ () => <CarrinhoDeCompra products={ product } /> }
          />
          <Route path="/details/:id" component={ ProductDetails } />
        </Router>
      </div>
    );
  }
}

export default PagComponents;
