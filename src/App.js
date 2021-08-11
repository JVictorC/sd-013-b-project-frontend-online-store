import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import ShoppingCart from './pages/ShoppingCart';
import InfoProducts from './Componentes/infoProducts';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/details/:title" component={ InfoProducts } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
