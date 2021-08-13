import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CarrinhoDeCompra from '../pages/CarrinhoDeCompra';

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
    })
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Router>
          <Route exact path="/" component={ () => <Home func={ this.addToStateClick } /> } />
          <Route path="/cart" component={ () => <CarrinhoDeCompra products={ product } /> } />
        </Router>
      </div>
    );
  }
}

export default PagComponents;