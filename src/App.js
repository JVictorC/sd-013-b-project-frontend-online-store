import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ProductList from './PageList/ProductList';
import Product from './PageList/Product';
import Cart from './PageList/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.cartStateUpadte = this.cartStateUpadte.bind(this);
    this.increseProduct = this.increseProduct.bind(this);
    this.decreseProduct = this.decreseProduct.bind(this);

    this.state = {
      products: {},
      cartList: {},
    };
  }

  updateState(products) {
    this.setState({ products });
  }

  cartStateUpadte(product) {
    const { cartList } = this.state;
    if (cartList[product.id]) cartList[product.id].quantity += 1;
    else cartList[product.id] = product;
  }

  increseProduct(id) {
    const { cartList } = this.state;
    cartList[id].quantity += 1;
    this.setState({ cartList });
  }

  decreseProduct(id) {
    const { cartList } = this.state;
    if (cartList[id].quantity > 0) {
      cartList[id].quantity -= 1;
      this.setState({ cartList });
    }
  }

  render() {
    const { products, cartList } = this.state;
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
              exact
              path="/cart"
              render={
                () => (
                  <Cart
                    increseProduct={ this.increseProduct }
                    decreseProduct={ this.decreseProduct }
                    cartList={ cartList }
                  />)
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
