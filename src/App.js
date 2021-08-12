import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Cart, ProductDetails } from './pages';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ Cart } />
            <Route exact path="/product/:id" component={ ProductDetails } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
