import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { useBeforeunload } from 'react-beforeunload';

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
    this.updateFromStorage = this.updateFromStorage.bind(this);
  }

  componentDidMount() {
    this.updateFromStorage();
  }

  getQuery(item) {
    this.setState((previous) => ({
      query: [...previous.query, item],
    }));
  }

  useBeforeunload() {
    return 'sim';
  }

  updateFromStorage() {
    if (localStorage.getItem('count')) {
      const newQuery = localStorage.getItem('count');
      this.setState({
        query: JSON.parse(newQuery),
      });
    }
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
          <Route
            exact
            path="/"
            render={ () => <Main getQuery={ this.getQuery } query={ query } /> }
          />
          <Route
            path="/product-details/:id"
            render={
              (props) => (<ProductDetails
                { ...props }
                getQuery={ this.getQuery }
                query={ query }
              />)
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
