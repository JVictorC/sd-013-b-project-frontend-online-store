import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ProductList from './PageList/ProductList';
import Product from './PageList/Product';
import Checkout from './Components/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.cartStateUpadte = this.cartStateUpadte.bind(this);

    this.state = {
      products: {},
    };
  }

  updateState(products) {
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Link to="/cart" data-testid="shopping-cart-button">
            <span role="img" aria-label="carrinho">🛒</span>
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              render={
                () => (
                  <ProductList
                    cartStateUpadte={ this.cartStateUpadte }
                    updateState={ this.updateState }
                  />)
              }
            />
            <Route
              exact
              path="/product/:id"
              render={
                (props) => (
                  <Product
                    { ...props }
                    products={ products }
                    cartStateUpadte={ this.cartStateUpadte }
                  />)
              }
            />
            <Route
              path="/checkout"
              component={ Checkout }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
