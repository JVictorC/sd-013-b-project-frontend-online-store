import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './components/ShoppingCart';
import Main from './components/Main';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: [],
      itemQuantity: {},
    };

    this.getQuery = this.getQuery.bind(this);
  }

  async getQuery(item) {
    const { query } = this.state;
    const compareTrue = query.some((qry) => qry.id === item.id);
    if (compareTrue) {
      this.setState((previous) => ({
        itemQuantity: { ...previous.itemQuantity,
          [item.id]: previous.itemQuantity[item.id]
            ? previous.itemQuantity[item.id] + 1 : 1 },
      }));
    } else {
      this.setState((previous) => ({
        query: [...previous.query, item],
        itemQuantity: { ...previous.itemQuantity, [item.id]: 1 },
      }));
    }
  }

  render() {
    const { query, itemQuantity } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/shopping-cart"
            render={ () => (<ShoppingCart
              itemQuantity={ itemQuantity }
              query={ query }
            />) }
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
