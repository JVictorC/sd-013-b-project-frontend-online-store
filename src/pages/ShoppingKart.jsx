import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingKart extends Component {
  render() {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    );
}}

export default ShoppingKart;
