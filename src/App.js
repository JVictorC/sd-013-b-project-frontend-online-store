import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarrinhoDeCompra from './pages/CarrinhoDeCompra';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="all-content">
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ CarrinhoDeCompra } />
        <Route path="/details/:id" component={ ProductDetails } />
      </Router>
    </div>
  );
}

export default App;
