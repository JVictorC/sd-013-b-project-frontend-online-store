import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import SearchBar from './SearchBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}
