import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './components/ShoppingCart';
import Main from './components/Main';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };

    this.getQuery = this.getQuery.bind(this);
  }

  getQuery(item) {
    this.setState((previous) => ({
      query: [...previous.query, item],
    }));
  }

  render() {
    const { query } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/shopping-cart"
            render={ () => <ShoppingCart query={ query } /> }
          />
          <Route exact path="/" render={ () => <Main getQuery={ this.getQuery } /> } />
          <Route
            path="/product-details/:id"
            render={
              (props) => <ProductDetails { ...props } getQuery={ this.getQuery } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
