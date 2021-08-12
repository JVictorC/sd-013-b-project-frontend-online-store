import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler(product) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product],
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ProductList onAdd={ this.addHandler } />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart cart={ cart } />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
