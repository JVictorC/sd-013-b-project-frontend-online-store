import React, { Component } from 'react';
import CartButton from '../Components/CartButton';
import CategoriesList from '../Components/CategoriesList';
import SearchBar from '../Components/SearchBar';

export default class Searches extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CategoriesList />
        <CartButton />
      </div>
    );
  }
}
