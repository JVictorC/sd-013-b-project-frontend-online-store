import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarrinhoDeCompra from './pages/CarrinhoDeCompra';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="all-content">
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ CarrinhoDeCompra } />
      </Router>
    </div>
  );
}

export default App;
