import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainScreen from './Pages/MainScreen';
import ShoppCart from './Pages/ShoppCart';
import Detalhes from './Pages/Detalhes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainScreen } />
          <Route path="/ShoppCart" component={ ShoppCart } />
          <Route path="/product/:ProductId" component={ Detalhes } />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
