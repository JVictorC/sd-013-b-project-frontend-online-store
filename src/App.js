import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/body.css';
import './css/header.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Home from './Components/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    console.log('foi');
    const {
      id,
      price,
      title,
      thumbnail,
    } = product;
    const newItem = { id, price, title, thumbnail };
    this.setState((prevState) => ({
      cart: [...prevState.cart, newItem],
    }));
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home cart={ cart } addToCart={ this.addToCart } /> }
          />
          <Route
            exact
            path="/carrinho"
            component={ ShoppingCart }
          />
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => (
              <ProductDetails { ...props } addToCart={ this.addToCart } cart={ cart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
