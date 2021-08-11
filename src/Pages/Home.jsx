import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import CartButton from '../Components/CartButton';
import SideBar from '../Components/SideBar';
import SearchButton from '../Components/SearchButton';
import CardList from '../Components/CardList';
import * as api from '../services/api';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class Home extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategoriesId = this.handleCategoriesId.bind(this);

    this.state = {
      searchValueHome: '',
      categoryId: '',
      productsArray: [],
    };
  }

  handleChange(callback) {
    this.setState({
      searchValueHome: callback,
    });
  }

  handleClick(callback) {
    this.setState({
      productsArray: callback,
    });
  }

  async handleCategoriesId(callback) {
    const resultApi = await this.fetchProductsFromCategoryAndQuery(callback);
    this.setState({
      categoryId: callback,
      productsArray: resultApi,
    });
  }

  fetchProductsFromCategoryAndQuery = async (categoryId) => {
    const response = await api
      .getProductsFromCategoryAndQuery(categoryId, '');
    return response.results;
  }

  render() {
    const { searchValueHome, productsArray, categoryId } = this.state;
    return (
      <div>
        <SearchBar onInputChange={ this.handleChange } />
        <SearchButton
          searchValueHome={ searchValueHome }
          onButtonClick={ this.handleClick }
          categoryId={ categoryId }
        />
        <CartButton />
        <SideBar handleCategoriesId={ this.handleCategoriesId } />
        <CardList productsList={ productsArray } />
      </div>
    );
  }
}
