import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/:categoryId/:id" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
