import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class CartButton extends Component {
  render() {
    const number = 0;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to={ { pathname: '/cart', state: { number } } }>Cart</Link>
      </div>
    );
  }
}
