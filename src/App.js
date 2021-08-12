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
    // this.getCartNumber = this.getCartNumber.bind(this);
  }

  // componentDidUpdate() {
  //   this.getCartNumber();
  // }

  getQuery(item) {
    this.setState((previous) => ({
      query: [...previous.query, item],
    }));
  }

  // getCartNumber() {
  //   const { query } = this.state;
  //   this.setState({
  //     cartNumber: query.length,
  //   });
  //   // if (query === '') {
  //   //   this.setState({
  //   //     cartNumber: 0,
  //   //   });
  //   // }
  // }

  render() {
    const { query } = this.state;
    localStorage.setItem('count', query.length);

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/shopping-cart"
            render={ () => <ShoppingCart query={ query } /> }
          />
          <Route exact path="/" render={ () => <Main getQuery={ this.getQuery } query={ query } /> } />
          <Route
            path="/product-details/:id"
            render={
              (props) => <ProductDetails { ...props } getQuery={ this.getQuery } query={ query } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
