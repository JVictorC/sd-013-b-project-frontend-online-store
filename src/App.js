import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import CardDetails from './pages/CardDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/cart" component={ Cart } />
          <Route path="/product/:categoryId/:query" component={ CardDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
