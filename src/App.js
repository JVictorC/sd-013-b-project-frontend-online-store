import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductSelected from './pages/ProductSelected';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addHandler = this.addHandler.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  addHandler(product) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product],
    });
  }

  changeQuantity(e) {
    const { cart } = this.state;
    const { id } = e.target.parentNode;
    let newCart = [...cart];

    if (e.target.innerHTML === '-') {
      let productIndex;
      let count = 0;

      cart.forEach((el, index) => {
        if (el.id === id) {
          productIndex = index;
          count += 1;
        }
      });

      if (count === 1) {
        newCart[productIndex].none = true;
      } else if (productIndex) {
        newCart = newCart.filter((el, index) => index !== productIndex);
      }
    }

    if (e.target.innerHTML === '+') {
      const productIndex = cart.findIndex((el) => el.id === id);
      let count = 0;
      newCart.forEach((el) => {
        if (el.id === newCart[productIndex].id) {
          count += 1;
        }
      });

      if (newCart[productIndex].none) {
        newCart[productIndex].none = false;
      } else if (productIndex >= 0 && count < cart[productIndex].available_quantity) {
        newCart = [...cart, cart[productIndex]];
      }
    }

    this.setState({
      cart: newCart,
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
            <ShoppingCart onChangeQuantity={ this.changeQuantity } cart={ cart } />
          </Route>
          <Route
            exact
            path="/product/:id"
            component={
              (props) => <ProductSelected { ...props } onAdd={ this.addHandler } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
