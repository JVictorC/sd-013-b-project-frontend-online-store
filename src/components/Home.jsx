import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
    };
  }

  handleClick = (product) => {
    const { cartProducts } = this.state;
    let counter = 0;

    cartProducts.forEach((e) => {
      if (e.title === product.title) {
        counter += 1;
        product.qts += 1;
      }
    });

    if (counter === 0) cartProducts.push(product);
    this.setState({ cartProducts: [...cartProducts] });
  }

  render() {
    const { cartProducts } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <ProductList onClick={ this.handleClick } /> }
            />
            <Route
              exact
              path="/shopping-cart"
              render={ () => <ShoppingCart cartProducts={ cartProducts } /> }
            />
            <Route
              path="/product-details/:name"
              component={ ProductDetails }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
