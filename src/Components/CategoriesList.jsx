import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import ProductInvalid from './ProductInvalid';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

export default class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      products: [],
      firstquery: '',
    };
    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  async handleClick(event) {
    const itemId = event.target.id;
    console.log(itemId);
    const productList = await getProductsFromCategoryAndQuery(itemId, '');
    this.setState({
      products: productList.results,
      firstquery: itemId,
    });
  }

  async handleState() {
    const categories = await getCategories();
    this.setState({
      category: categories,
    });
  }

  render() {
    const { category, products, firstquery } = this.state;
    const categories = category.map(({ name, id }) => (
      <label htmlFor={ id } key={ id }>
        <input
          data-testid="category"
          type="radio"
          id={ id }
          name="categories"
          onChange={ this.handleClick }
        />
        {name}
      </label>
    ));
    return (
      <div>
        { category !== [] ? categories : <ProductInvalid /> }
        <SearchBar firstquery={ firstquery } />
        { products !== [] ? <ProductList products={ products } /> : '' }
      </div>
    );
  }
}
