import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import * as api from './services/api';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.subProduct = this.subProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.state = {
      cart: [{
        id: 'MLB1324585293',
        available_quantity: 5,
        price: 54.9,
        title: 'Bola Fut Campo Oficial Topper Slick Ii',
        thumbnail: 'http://http2.mlstatic.com/D_868421-MLB41330463670_042020-O.jpg',
        quantity: 3,
      },
      {
        id: 'MLB1873504309',
        available_quantity: 50000,
        price: 95.9,
        title: 'Chuteira Campo Adulto Infantil + Relógio + Meião Promoção',
        thumbnail: 'http://http2.mlstatic.com/D_953550-MLB45982200233_052021-O.jpg',
        quantity: 5,
      },
      ],
    };
  }

  subProduct(id) {
    const { cart } = this.state;
    const newCart = (cart.map((product) => {
      if (id === product.id) {
        if (product.quantity === 0) return product;
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
    this.setState({
      cart: newCart,
    });
  }

  addProduct(id) {
    const { cart } = this.state;
    const newCart = (cart.map((product) => {
      if (id === product.id) {
        if (product.quantity >= product.available_quantity) {
          return { ...product, quantity: product.available_quantity };
        }
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
    this.setState({
      cart: newCart,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            exact
            path="/shopping-cart"
            render={ (props) => <ShoppingCart { ...props } cart={ cart } onSubClick={ this.subProduct } onAddClick={ this.addProduct } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
