import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import mainPage from './components/mainPage';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
    };
  }

  render() {
    const { cartList } = this.state;
    return (
      <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ mainPage } />
            <Route
              exact
              path="/cart"
              render={ ((props) => <Cart { ...props } list={ cartList } />) }
            />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
