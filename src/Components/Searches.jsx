import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import CartButton from './CartButton';

export default class Searches extends Component {
  render() {
    return (
      <div>
        <CategoriesList />
        <CartButton />
      </div>
    );
  }
}
